package com.meliova.product;

import com.meliova.api.ProductDto;
import java.util.List;
import java.util.regex.Pattern;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
  private final ProductRepo repo;
  private final MongoTemplate mongo;

  public ProductService(ProductRepo repo, MongoTemplate mongo) {
    this.repo = repo;
    this.mongo = mongo;
  }

  public Page<ProductDto> search(String q, String category, int page, int size) {
    int p = Math.max(0, page);
    int s = Math.min(Math.max(1, size), 100);
    Pageable pageable = PageRequest.of(p, s);
    Query query = new Query().with(pageable);

    // filter by category (ignore "all")
    if (category != null && !category.isBlank() && !"all".equalsIgnoreCase(category)) {
      query.addCriteria(Criteria.where("category").is(category));
    }

    // substring search (case-insensitive) on name / shortDetail / brand
    if (q != null && !q.isBlank()) {
      String safe = Pattern.quote(q.trim());
      query.addCriteria(new Criteria().orOperator(
        Criteria.where("name").regex(safe, "i"),
        Criteria.where("shortDetail").regex(safe, "i"),
        Criteria.where("brand").regex(safe, "i")
      ));
    }

    long total = mongo.count(query, ProductDocument.class);
    List<ProductDocument> docs = mongo.find(query, ProductDocument.class);
    List<ProductDto> content = docs.stream().map(this::toDto).toList();
    return new PageImpl<>(content, pageable, total);
  }

  public ProductDto getById(String id) {
    return repo.findById(id).map(this::toDto).orElseThrow();
  }

  private ProductDto toDto(ProductDocument d) {
    return new ProductDto(
      d.getId(),
      d.getName(),
      d.getShortDetail(),
      d.getPrice(),
      d.getImage(),
      List.of(d.getCategory())
    );
  }
}

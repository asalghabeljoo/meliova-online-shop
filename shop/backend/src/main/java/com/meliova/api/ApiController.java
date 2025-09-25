package com.meliova.api;

import com.meliova.product.ProductService;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Page;
import java.util.*;

@RestController
@RequestMapping("/api")
public class ApiController {
  private final ProductService productService;
  private final org.springframework.data.mongodb.core.MongoTemplate mongo;

  public ApiController(ProductService ps, org.springframework.data.mongodb.core.MongoTemplate mongo) {
    this.productService = ps; this.mongo = mongo;
  }

  @GetMapping("/products")
  public ProductPage list(@RequestParam(required=false) String q,
                          @RequestParam(required=false) String category,
                          @RequestParam(defaultValue="0") int page,
                          @RequestParam(defaultValue="20") int size) {
    Page<ProductDto> p = productService.search(q, category, page, size);
    return new ProductPage(p.getContent(), p.getNumber(), p.getSize(), (int)p.getTotalElements());
  }

  @GetMapping("/products/{id}")
  public ProductDto get(@PathVariable String id) { return productService.getById(id); }

  @GetMapping("/categories")
  public List<CategoryDto> categories() {
    var cats = mongo.query(com.meliova.product.ProductDocument.class)
                    .distinct("category").as(String.class).all();
    cats.sort(String::compareToIgnoreCase);
    var list = new ArrayList<CategoryDto>();
    list.add(new CategoryDto("all","All"));
    for (var c : cats) list.add(new CategoryDto(c,c));
    return list;
  }

  public record ProductPage(List<ProductDto> content, int page, int size, int totalElements) {}
  public record CategoryDto(String id, String label) {}
}

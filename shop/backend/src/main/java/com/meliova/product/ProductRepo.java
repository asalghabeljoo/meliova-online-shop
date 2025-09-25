package com.meliova.product;

import org.springframework.data.domain.*;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductRepo extends MongoRepository<ProductDocument, String> {
  Page<ProductDocument> findByCategoryIgnoreCase(String category, Pageable pageable);
}

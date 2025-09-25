package com.meliova.seed;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.meliova.product.ProductDocument;
import com.meliova.product.ProductRepo;
import java.io.InputStream;
import java.time.Instant;
import java.util.List;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Component
public class DataSeeder implements CommandLineRunner {
  private static final Logger log = LoggerFactory.getLogger(DataSeeder.class);
  private final ProductRepo repo;
  public DataSeeder(ProductRepo repo) { this.repo = repo; }

  @Override public void run(String... args) throws Exception {
    log.info("DataSeeder starting...");
    
    // Clear existing data and reload from JSON (for development)
    log.info("Deleting all existing products...");
    repo.deleteAll();
    
    log.info("Loading products from JSON file...");
    InputStream is = new ClassPathResource("data/products.json").getInputStream();
    var mapper = new ObjectMapper();
    List<ProductDocument> items = mapper.readValue(is, new TypeReference<>() {});
    
    log.info("Loaded {} products from JSON", items.size());
    var now = Instant.now();
    items.forEach(p -> { p.setCreatedAt(now); p.setUpdatedAt(now); });
    
    log.info("Saving products to database...");
    repo.saveAll(items);
    
    long count = repo.count();
    log.info("DataSeeder completed. Total products in database: {}", count);
  }
}

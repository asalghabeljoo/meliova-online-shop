package com.meliova.product;

import java.math.BigDecimal;
import java.time.Instant;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.index.TextIndexed;
import org.springframework.data.mongodb.core.mapping.Document;


@Document("products")
@JsonIgnoreProperties(ignoreUnknown = true)
public class ProductDocument {

  @Id
  @JsonAlias("_id")          
  private String id;

  @TextIndexed
  private String name;

  private BigDecimal price;

  @Indexed                 // Makeup | Skin care | Hair | Perfume | Health
  private String category;

  private String brand;

  @TextIndexed
  private String shortDetail;

  /** Product image URL */
  private String image;

  private Instant createdAt;
  private Instant updatedAt;

  public ProductDocument() {}

  public String getId() { return id; }
  public void setId(String id) { this.id = id; }

  public String getName() { return name; }
  public void setName(String name) { this.name = name; }

  public BigDecimal getPrice() { return price; }
  public void setPrice(BigDecimal price) { this.price = price; }

  public String getCategory() { return category; }
  public void setCategory(String category) { this.category = category; }

  public String getBrand() { return brand; }
  public void setBrand(String brand) { this.brand = brand; }

  public String getShortDetail() { return shortDetail; }
  public void setShortDetail(String shortDetail) { this.shortDetail = shortDetail; }

  public String getImage() { return image; }
  public void setImage(String image) { this.image = image; }

  public Instant getCreatedAt() { return createdAt; }
  public void setCreatedAt(Instant createdAt) { this.createdAt = createdAt; }

  public Instant getUpdatedAt() { return updatedAt; }
  public void setUpdatedAt(Instant updatedAt) { this.updatedAt = updatedAt; }
}

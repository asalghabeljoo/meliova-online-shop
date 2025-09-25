package com.meliova.order;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("orders")
public class OrderDocument {
  @Id
  private String id;

  // customer
  private String customerName;
  @Indexed
  private String customerEmail;
  private String deliveryAddress;

  // cart lines
  private List<Line> items;

  // totals
  private BigDecimal subtotal;
  private String currency;

  // metadata
  private String status;      // PLACED, PAID (no real payment in this demo)
  @Indexed
  private Instant createdAt;

  public static class Line {
    private String sku;
    private String name;
    private BigDecimal price; // unit price
    private int qty;

    public Line() {}
    public Line(String sku, String name, BigDecimal price, int qty) {
      this.sku = sku; this.name = name; this.price = price; this.qty = qty;
    }
    public String getSku() { return sku; }     public void setSku(String sku) { this.sku = sku; }
    public String getName() { return name; }   public void setName(String name) { this.name = name; }
    public BigDecimal getPrice() { return price; } public void setPrice(BigDecimal price) { this.price = price; }
    public int getQty() { return qty; }        public void setQty(int qty) { this.qty = qty; }
  }

  public OrderDocument() {}

  // getters/setters
  public String getId() { return id; } public void setId(String id) { this.id = id; }
  public String getCustomerName() { return customerName; } public void setCustomerName(String v) { this.customerName = v; }
  public String getCustomerEmail() { return customerEmail; } public void setCustomerEmail(String v) { this.customerEmail = v; }
  public String getDeliveryAddress() { return deliveryAddress; } public void setDeliveryAddress(String v) { this.deliveryAddress = v; }
  public List<Line> getItems() { return items; } public void setItems(List<Line> items) { this.items = items; }
  public BigDecimal getSubtotal() { return subtotal; } public void setSubtotal(BigDecimal v) { this.subtotal = v; }
  public String getCurrency() { return currency; } public void setCurrency(String v) { this.currency = v; }
  public String getStatus() { return status; } public void setStatus(String v) { this.status = v; }
  public Instant getCreatedAt() { return createdAt; } public void setCreatedAt(Instant v) { this.createdAt = v; }
}

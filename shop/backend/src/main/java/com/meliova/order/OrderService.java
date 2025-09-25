package com.meliova.order;

import com.meliova.api.OrderDtos;
import java.math.BigDecimal;
import java.time.Instant;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class OrderService {
  private final OrderRepo repo;

  public OrderService(OrderRepo repo) { this.repo = repo; }

  public OrderDtos.CreateOrderResponse create(OrderDtos.CreateOrderRequest req) {
    // compute subtotal
    BigDecimal subtotal = req.items().stream()
      .map(i -> i.price().multiply(BigDecimal.valueOf(i.qty())))
      .reduce(BigDecimal.ZERO, BigDecimal::add);

    OrderDocument o = new OrderDocument();
    o.setCustomerName(req.name());
    o.setCustomerEmail(req.email());
    o.setDeliveryAddress(req.address());
    o.setItems(req.items().stream()
      .map(i -> new OrderDocument.Line(i.sku(), i.name(), i.price(), i.qty()))
      .toList());
    o.setSubtotal(subtotal);
    o.setCurrency(req.currency() != null ? req.currency() : "EUR");
    o.setStatus("PLACED");
    o.setCreatedAt(Instant.now());

    o = repo.save(o);
    return new OrderDtos.CreateOrderResponse(o.getId(), o.getStatus());
  }
}

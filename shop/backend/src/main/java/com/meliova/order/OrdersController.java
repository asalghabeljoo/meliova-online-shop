package com.meliova.api;

import com.meliova.order.OrderService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class OrdersController {
  private final OrderService service;
  public OrdersController(OrderService s) { this.service = s; }

  @PostMapping("/orders")
  @ResponseStatus(HttpStatus.CREATED)
  public OrderDtos.CreateOrderResponse create(@Valid @RequestBody OrderDtos.CreateOrderRequest req) {
    return service.create(req);
  }
}

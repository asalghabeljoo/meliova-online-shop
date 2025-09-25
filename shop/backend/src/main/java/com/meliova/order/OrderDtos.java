package com.meliova.api;

import java.math.BigDecimal;
import java.util.List;

import jakarta.validation.Valid;
import jakarta.validation.constraints.*;

public class OrderDtos {
  public record CreateOrderRequest(
    @NotBlank String name,
    @Email @NotBlank String email,
    @NotBlank String address,
    @Size(min = 1) @Valid List<Item> items,
    @Pattern(regexp="^[A-Z]{3}$") String currency
  ) {}

  public record Item(
    @NotBlank String sku,
    @NotBlank String name,
    @NotNull BigDecimal price,
    @Min(1) int qty
  ) {}

  public record CreateOrderResponse(
    String id,
    String status
  ) {}
}

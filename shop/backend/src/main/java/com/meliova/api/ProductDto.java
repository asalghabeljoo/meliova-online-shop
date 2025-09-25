package com.meliova.api;

import java.math.BigDecimal;
import java.util.List;

public record ProductDto(
  String sku,
  String name,
  String description,
  BigDecimal price,
  String imageUrl,
  List<String> categories
) {}

package com.meliova.order;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface OrderRepo extends MongoRepository<OrderDocument, String> {}

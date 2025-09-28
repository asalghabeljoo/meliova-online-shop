import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

const load = () => {
  try {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  } catch {
    return [];
  }
};

const save = (items) => localStorage.setItem("cart", JSON.stringify(items));

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(load());
  }, []);

  const add = (item, qty = 1) => {
    const existing = items.find((i) => i.sku === item.sku);
    const newItems = existing
      ? items.map((i) =>
          i.sku === item.sku ? { ...i, quantity: i.quantity + qty } : i
        )
      : [...items, { ...item, quantity: qty }];
    setItems(newItems);
    save(newItems);
  };

  const update = (sku, quantity) => {
    const newItems = items
      .map((i) => (i.sku === sku ? { ...i, quantity } : i))
      .filter((i) => i.quantity > 0);
    setItems(newItems);
    save(newItems);
  };

  const remove = (sku) => {
    const newItems = items.filter((i) => i.sku !== sku);
    setItems(newItems);
    save(newItems);
  };

  const clear = () => {
    setItems([]);
    save([]);
  };

  const count = items.reduce((n, i) => n + i.quantity, 0);

  const total = Number(
    items.reduce((s, i) => s + i.price * i.quantity, 0).toFixed(2)
  );

  return (
    <CartContext.Provider
      value={{
        items,
        add,
        update,
        remove,
        clear,
        count,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

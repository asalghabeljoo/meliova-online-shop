const $fetch = function (url, options) {
  if (!url.startsWith("http")) {
    url = `http://localhost:8081${url.trim().trim("/")}`;
  }
  return fetch(url, options);
};

export function createOrder(data) {
  return $fetch("/api/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to create order");
    return res.json();
  });
}

export function getProductBySku(sku) {
  return $fetch(`/api/products/${encodeURIComponent(sku)}`).then((res) => {
      if (!res.ok) throw new Error("Product not found");
      return res.json();
    }); 
}

export function getProducts() {
  return $fetch("/api/products").then((res) => {
      if (!res.ok) throw new Error("Failed to fetch products");
      return res.json();
    });
}
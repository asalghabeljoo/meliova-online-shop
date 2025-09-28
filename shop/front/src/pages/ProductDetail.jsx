import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductBySku } from "../api/client";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { sku } = useParams();
  const cart = useCart();
  const [p, setP] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (sku) {
      setLoading(true);
      setError(null);
      getProductBySku(sku)
        .then(setP)
        .catch((err) => {
          console.error("Failed to load product:", err);
          setError("Product not found");
        })
        .finally(() => setLoading(false));
    }
  }, [sku]);

  if (loading) return <div className="loading">Loading…</div>;
  if (error) return <div className="error">{error}</div>;
  if (!p) return <div className="error">Product not found</div>;

  const img =
    p.imageUrl || p.image || "https://placehold.co/800x600?text=Image";

  return (
    <div className="product-detail-container">
      <div className="detail">
        <div className="image-section">
          <img
            src={img}
            alt={p.name}
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/800x600?text=No+Image";
            }}
          />
        </div>
        <div className="info">
          <h1>{p.name}</h1>
          <div className="product-meta">
            <div className="brand">
              <strong>Brand:</strong> {p.brand}
            </div>
            <div className="category">
              <strong>Category:</strong> {p.category}
            </div>
            <div className="price">€ {Number(p.price).toFixed(2)}</div>
          </div>
          <div className="description">
            <h3>Product Details</h3>
            <p>
              {p.description || p.shortDetail || "No description available"}
            </p>
          </div>
          <div className="actions">
            <button className="add-to-cart-btn" onClick={() => cart.add(p)}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

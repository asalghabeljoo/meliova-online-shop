// src/components/ProductCard.jsx
import { Link } from "react-router-dom";
import { useCart } from "../state/cart.jsx";

export default function ProductCard({ p }) {
  const cart = useCart();
  const id = p.sku ?? p.id; // support either field
  const img =
    p.imageUrl || p.image || "https://placehold.co/400x300?text=Image";

  return (
    <div className="card">
      <Link to={`/product/${encodeURIComponent(id)}`}>
        <img
          src={img}
          alt={p.name}
          onError={(e) => {
            e.currentTarget.src = "https://placehold.co/400x300?text=No+Image";
          }}
        />
      </Link>

      <div className="card-body">
        <h3 className="title">{p.name}</h3>
        <p className="price">€ {Number(p.price).toFixed(2)}</p>
        <div className="actions">
          <button onClick={() => cart.add(p)}>Add to cart</button>
          <Link to={`/product/${encodeURIComponent(id)}`} className="ghost">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

// src/components/ProductCard.jsx
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import styles from "./ProductCard.module.css";

export default function ProductCard({ p }) {
  const cart = useCart();
  const id = p.sku ?? p.id; // support either field
  const img =
    p.imageUrl || p.image || "https://placehold.co/400x300?text=Image";

  return (
    <div className={styles.card}>
      <Link to={`/p/${encodeURIComponent(id)}`}>
        <img
          src={img}
          alt={p.name}
          onError={(e) => {
            e.currentTarget.src = "https://placehold.co/400x300?text=No+Image";
          }}
        />
      </Link>

      <div className={styles.cardBody}>
        <h3 className={styles.title}>{p.name}</h3>
        <p className={styles.price}>€ {Number(p.price).toFixed(2)}</p>
        <div className={styles.actions}>
          <button onClick={() => cart.add(p)}>Add to cart</button>
          <Link to={`/p/${encodeURIComponent(id)}`} className={styles.ghost}>
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

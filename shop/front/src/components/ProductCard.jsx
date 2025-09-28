// src/components/ProductCard.jsx
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import styles from "./ProductCard.module.css";

function CartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
    </svg>
  );
}

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
          <button onClick={() => cart.add(p)} title="Add to cart">
            <CartIcon />
          </button>
          <Link to={`/p/${encodeURIComponent(id)}`} className={styles.ghost}>
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import s from "./Header.module.css";
import { getCategories } from "../api/client";

function IconSearch() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M21 21l-4.35-4.35m1.6-5.3a6.95 6.95 0 11-13.9 0 6.95 6.95 0 0113.9 0z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconHeart() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 21s-7.5-4.35-9.5-8.9C1 7.9 4.2 5 7.3 5c1.9 0 3.2.9 4.7 2.6C13.5 5.9 14.8 5 16.7 5 19.8 5 23 7.9 21.5 12.1 19.5 16.65 12 21 12 21z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function IconUser() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <circle
        cx="12"
        cy="8"
        r="3.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4.8 19.6a7.2 7.2 0 0114.4 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconCart() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="9" cy="20" r="1.6" />
      <circle cx="18" cy="20" r="1.6" />
      <path
        d="M2.5 3.5h2.3l2.1 11.3a1.8 1.8 0 001.7 1.4h8.2a1.8 1.8 0 001.7-1.3l1.7-6.4H7.1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Logo() {
  return (
    <Link to="/" className={s.logoWrap} aria-label="MELIOVA">
      <div className={s.logoText}>
        <div className={s.brand}>MELIOVA</div>
        <div className={s.tag}>Beautiful, just as you are.</div>
      </div>
    </Link>
  );
}

export default function Header() {
  const cart = useCart();

  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    async function fetchCategories() {
      const data = await getCategories();
      setCategories(data);
    }
    fetchCategories();
  }, []);

  return (
    <>
      {/* Header */}
      <header className={s.header}>
        <Logo />
        <label className={s.searchWrap} aria-label="Site search">
          <input
            className={s.searchInput}
            placeholder="Wonach suchen Sie?"
            aria-label="Wonach suchen Sie?"
          />
          <button className={s.searchBtn} aria-label="Suchen">
            <IconSearch />
          </button>
        </label>

        <nav className={s.headerActions} aria-label="User actions">
          <Link
            to="/cart"
            className={s.iconBtn}
            aria-label={`Warenkorb (${cart.count})`}
          >
            <IconCart />
            {cart.count > 0 && <span className="sr-only">({cart.count})</span>}
          </Link>
        </nav>
      </header>

      {/* Primary navigation */}
      <nav className={s.categoryBar} aria-label="Kategorien">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${encodeURIComponent(category.id)}`}
            className={s.catItem}
          >
            {category.label}
          </Link>
        ))}
      </nav>
    </>
  );
}

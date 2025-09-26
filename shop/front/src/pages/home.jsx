import React from "react";
import s from "./Home.module.css";
import { getProducts } from "../api/client";
import ProductCard from "../components/ProductCard";
export default function Home() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    async function fetchProducts() {
      const res = await getProducts();
      const products = res.content; // show only first 6 products
      setProducts(products);
    }
    fetchProducts();
  }, []);
  return (
    <div className={s.page}>
      {/* Hero */}
      <section className={s.hero} aria-label="Highlight">
        <div className={s.heroBg} />
        <div className={s.heroInner}>
          <div className={s.brandChip}>Neutrogena</div>
          <div className={s.heroLeft}>
            <div className={s.heroCircle}>
              Geschenk
              <br />
              für Dich
            </div>
          </div>
          <div className={s.heroRight}>
            <div className={s.heroCard}>
              <p>
                hey hey hey hey
                <br />
                hey hey
              </p>
              <p className={s.mt16}>
                hey hey heyy&nbsp;&nbsp;hey
                <br />
                hey hey hey hey
                <br />
                hey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Aktion circles */}
      <section className={s.actionSection} aria-label="Aktion">
        <div className={s.actionHeader}>
          <h2>Catalog</h2>
        </div>
        <div className={s.circleGrid}>
          {products.map((product) => (
            <ProductCard key={product.id} p={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

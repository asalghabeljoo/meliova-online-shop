import React from "react";
import { useLocation } from "react-router-dom";
import s from "./Home.module.css";
import { getProducts } from "../api/client";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const location = useLocation();

  React.useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const params = new URLSearchParams(location.search);
        const category = params.get("category") || "all";
        const page = parseInt(params.get("page") || "0", 10);
        const search = params.get("q") || "";
        // Build query string for API
        const queryParams = new URLSearchParams();
        if (category && category !== "all") {
          queryParams.set("category", category);
        }
        queryParams.set("page", page.toString());
        queryParams.set("size", "20");
        queryParams.set("q", search);
        const res = await getProducts(`?${queryParams.toString()}`);
        setProducts(res.content);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [location.search]);
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
        {loading ? (
          <div className={s.loading}>Loading products...</div>
        ) : (
        <div className={s.circleGrid}>
          {products.map((product) => (
            <ProductCard key={product.id} p={product} />
          ))}
        </div>
        )}
      </section>
    </div>
  );
}

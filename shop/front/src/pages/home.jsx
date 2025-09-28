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
      {/* Banner */}
      <section className={s.bannerSection} aria-label="Banner">
        <img
          src="/img/banner.png"
          alt="Cosmetic Products Banner"
          className={s.bannerImage}
        />
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

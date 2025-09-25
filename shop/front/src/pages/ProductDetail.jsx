import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductBySku } from "../api/client";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const cart = useCart();
  const [p, setP] = useState(null);

  useEffect(() => { getProductBySku(id).then(setP); }, [id]);

  if (!p) return <div>Loading…</div>;

  const img = p.imageUrl || p.image || "https://placehold.co/800x600?text=Image";

  return (
    <div className="detail">
      <img src={img} alt={p.name}
           onError={(e)=>{e.currentTarget.src="https://placehold.co/800x600?text=No+Image"}} />
      <div className="info">
        <h2>{p.name}</h2>
        <div className="price">€ {Number(p.price).toFixed(2)}</div>
        <p className="desc">{p.description || p.shortDetail}</p>
        <button onClick={()=>cart.add(p)}>Add to cart</button>
      </div>
    </div>
  );
}

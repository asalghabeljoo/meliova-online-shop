import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  const cart = useCart();
  return (
    <div className="header">
      <Link to="/" className="brand">MELIOVA</Link>
      <nav className="nav">
        <Link to="/">Catalog</Link>
        <Link to="/cart">Cart ({cart.count})</Link>
      </nav>
    </div>
  );
}

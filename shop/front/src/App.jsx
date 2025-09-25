import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
// import Success from "./pages/Success";
// import NotFound from "./pages/NotFound";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/p/:sku" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* <Route path="/success" element={<Success />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </CartProvider>
  );
}

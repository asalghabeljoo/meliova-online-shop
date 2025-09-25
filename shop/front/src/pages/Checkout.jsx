import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { createOrder } from "../api/client";

export default function Checkout() {
  const navigate = useNavigate();
  const cart = useCart();
  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setErr("");
    if (!cart.items.length) {
      setErr("Cart is empty.");
      return;
    }
    setLoading(true);
    try {
      const payload = {
        name: form.name.trim(),
        email: form.email.trim(),
        address: form.address.trim(),
        currency: "EUR",
        items: cart.items.map(i => ({
          sku: i.sku, name: i.name, price: i.price, qty: i.qty ?? 1
        }))
      };
      console.log("Submitting order", payload);
      const res = await createOrder(payload);      // <-- MUST await
      console.log("Order created", res);
      cart.clear();                                 // only clear on success
      navigate(`/success?id=${encodeURIComponent(res.id)}`);
    } catch (e2) {
      console.error(e2);
      setErr(typeof e2?.message === "string" ? e2.message : "Order failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Checkout</h2>

      <form className="form" onSubmit={submit}>
        <label>
          Name
          <input name="name" value={form.name} onChange={onChange} required />
        </label>
        <label>
          Email
          <input type="email" name="email" value={form.email} onChange={onChange} required />
        </label>
        <label>
          Delivery address
          <textarea name="address" value={form.address} onChange={onChange} required />
        </label>

        {err && <div className="err">{err}</div>}

        <button type="submit" disabled={loading || !cart.items.length}>
          {loading ? "Processing..." : "Pay"}
        </button>
      </form>
    </div>
  );
}

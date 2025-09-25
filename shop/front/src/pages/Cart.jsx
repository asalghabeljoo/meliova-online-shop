import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const cart = useCart();

  return (
    <div>
      <h2>Cart</h2>

      {!cart.items.length && (
        <p>Your cart is empty. <Link to="/">Go shopping</Link></p>
      )}

      {cart.items.length > 0 && (
        <>
          <ul className="cart-list">
            {cart.items.map((i) => (
              <li className="cart-item" key={i.sku}>
                <img src={i.imageUrl || "/images/placeholder.png"} alt={i.name}
                     onError={(e)=>{e.currentTarget.src="/images/placeholder.png"}}/>
                <div>
                  <div><b>{i.name}</b></div>
                  <div>€ {i.price.toFixed(2)}</div>
                </div>
                <div>
                  <input
                    type="number"
                    min="1"
                    value={i.qty}
                    onChange={(e)=>cart.setQty(i.sku, Number(e.target.value || 1))}
                    style={{width:"80px"}}
                  />
                </div>
                <div>
                  <button className="ghost" onClick={()=>cart.remove(i.sku)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-summary">
            <div><b>Total:</b> € {cart.total.toFixed(2)}</div>
            <Link to="/checkout" className="ghost">Checkout</Link>
          </div>
        </>
      )}
    </div>
  );
}

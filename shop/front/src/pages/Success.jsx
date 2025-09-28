import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

export default function Success() {
  const [searchParams] = useSearchParams();
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    const id = searchParams.get("id");
    setOrderId(id || "");
  }, [searchParams]);

  return (
    <div className="container">
      <div className="success-page">
        <div className="success-icon"></div>
        <h1>Thank You for Your Order!</h1>
        <p className="success-message">
          Your order has been successfully placed and is being processed.
        </p>

        {orderId && (
          <div className="order-details">
            <h3>Order Details</h3>
            <p>
              <strong>Order ID:</strong>
              <span className="order-id">{orderId}</span>
            </p>
            <p className="order-note">
              Please keep this order ID for your records.
            </p>
          </div>
        )}

        <div className="success-actions">
          <Link to="/" className="btn-primary">
            Continue Shopping
          </Link>
          <Link to="/cart" className="btn-secondary">
            View Cart
          </Link>
        </div>
      </div>
    </div>
  );
}

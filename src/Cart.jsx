import "./App.css";
import { Link } from "wouter";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useCart } from "./CartContext";

export default function Cart() {
  const { cart, removeFromCart, updateCartQuantity, totalPrice } = useCart();

  return (
    <>
      <div className="cart-top">
        <Link href="/">
          <IoMdArrowRoundBack size={30} color="rgb(78, 41, 24)" />
        </Link>
        <h1>Your Cart</h1>
      </div>
      <div className="reciept">
        {cart.length === 0 ? (
          <p style={{ textAlign: "center", padding: "20px", fontSize: "18px" }}>
            Your cart is empty
          </p>
        ) : (
          cart.map((item) => {
            const itemTotal = (item.price * item.quantity).toFixed(2);
            return (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px",
                  borderBottom: "1px solid #ccc",
                }}
              >
                <div>
                  <h3>{item.name}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price per item: ${item.price.toFixed(2)}</p>
                  <div style={{ marginTop: "10px" }}>
                    <button
                      onClick={() =>
                        updateCartQuantity(item.id, item.quantity - 1)
                      }
                      style={{ margin: "0 5px" }}
                    >
                      -
                    </button>
                    <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateCartQuantity(item.id, item.quantity + 1)
                      }
                      style={{ margin: "0 5px" }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ fontWeight: "bold" }}>${itemTotal}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{ marginTop: "10px", color: "red" }}
                  >
                    X
                  </button>
                </div>
              </div>
            );
          })
        )}
        {cart.length > 0 && (
          <div
            style={{ marginTop: "20px", textAlign: "right", padding: "10px" }}
          >
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button
              style={{
                marginTop: "10px",
                padding: "10px 20px",
                fontSize: "16px",
              }}
            >
              Finish
            </button>
          </div>
        )}
      </div>
    </>
  );
}

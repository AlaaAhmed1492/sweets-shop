import { Link } from "wouter";
import { IoMdArrowRoundBack, IoMdCart } from "react-icons/io";
import { useCart } from "./contexts/CartContext";
import "./Cart.css";

function Cart() {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart();

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  if (items.length === 0) {
    return (
      <div className="cart-container">
        <div className="cart-header">
          <Link href="/">
            <IoMdArrowRoundBack size={30} color="rgb(78, 41, 24)" />
          </Link>
          <h1>Your Cart</h1>
        </div>
        <div className="empty-cart">
          <div className="empty-cart-icon">
            <IoMdCart size={60} color="rgb(78, 41, 24)" />
          </div>
          <h2>Your cart is empty</h2>
          <p>Add some delicious desserts to get started!</p>
          <Link href="/">
            <button className="continue-shopping-btn">Continue Shopping</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <Link href="/">
          <IoMdArrowRoundBack size={30} color="rgb(78, 41, 24)" />
        </Link>
        <h1>Your Cart ({totalItems} items)</h1>
      </div>

      <div className="cart-items">
        {items.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div className="item-details">
              <h3>{item.title}</h3>
              <p className="item-price">${item.price.toFixed(2)}</p>
            </div>
            <div className="quantity-controls">
              <button
                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                className="quantity-btn"
              >
                -
              </button>
              <span className="quantity">{item.quantity}</span>
              <button
                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                className="quantity-btn"
              >
                +
              </button>
            </div>
            <div className="item-total">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
            <button onClick={() => removeItem(item.id)} className="remove-btn">
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="summary-row">
          <span>Total Items:</span>
          <span>{totalItems}</span>
        </div>
        <div className="summary-row total">
          <span>Total Price:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="cart-actions">
          <button onClick={clearCart} className="clear-cart-btn">
            Clear Cart
          </button>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;

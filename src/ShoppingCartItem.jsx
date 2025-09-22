import { useCart } from "./contexts/CartContext";
import PropTypes from "prop-types";

function ShoppingCartItem({ item }) {
  const { updateQuantity, removeItem } = useCart();

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(item.id);
    } else {
      updateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="shopping-cart-item">
      <img src={item.image} alt={item.title} />
      <div className="item-info">
        <h4>{item.title}</h4>
        <p>${item.price.toFixed(2)}</p>
      </div>
      <div className="quantity-controls">
        <button onClick={() => handleQuantityChange(item.quantity - 1)}>
          -
        </button>
        <span>{item.quantity}</span>
        <button onClick={() => handleQuantityChange(item.quantity + 1)}>
          +
        </button>
      </div>
      <button onClick={() => removeItem(item.id)} className="remove-btn">
        Remove
      </button>
    </div>
  );
}

ShoppingCartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default ShoppingCartItem;

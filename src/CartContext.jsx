import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [quantities, setQuantities] = useState({});
  const [cart, setCart] = useState([]);

  function handleQuantityChange(sweetId, newQuantity) {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [sweetId]: newQuantity,
    }));
  }

  function addToCart(sweetId, quantity, sweet) {
    if (quantity > 0) {
      const existingItem = cart.find((item) => item.id === sweetId);

      if (existingItem) {
        setCart(
          cart.map((item) =>
            item.id === sweetId
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        );
      } else {
        setCart([...cart, { ...sweet, quantity }]);
      }

      // Reset quantity after adding to cart
      setQuantities((prev) => ({ ...prev, [sweetId]: 0 }));
    }
  }

  function removeFromCart(sweetId) {
    setCart(cart.filter((item) => item.id !== sweetId));
  }

  function updateCartQuantity(sweetId, newQuantity) {
    if (newQuantity <= 0) {
      removeFromCart(sweetId);
    } else {
      setCart(
        cart.map((item) =>
          item.id === sweetId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  }

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        quantities,
        cart,
        handleQuantityChange,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        totalPrice,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

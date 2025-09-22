import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { Route } from "wouter";
import Cart from "./Cart.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
const Routes = () => {
  return (
    <>
      <Route path="/" component={App} />
      <Route path="/cart" component={Cart} />
    </>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <Routes />
    </CartProvider>
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { Route } from "wouter";
import Cart from "./Cart.jsx";
<<<<<<< HEAD
import { CartProvider } from "./CartContext.jsx";

const Routs = () => {
=======
import { CartProvider } from "./contexts/CartContext.jsx";
const Routes = () => {
>>>>>>> 6ed0078e6ab593e4ee0f03e9589a4c5527fb974c
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
<<<<<<< HEAD
      <Routs />
=======
      <Routes />
>>>>>>> 6ed0078e6ab593e4ee0f03e9589a4c5527fb974c
    </CartProvider>
  </StrictMode>
);

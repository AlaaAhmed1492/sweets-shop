import "./App.css";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "wouter";
<<<<<<< HEAD
import QuantitySelector from "./QuantitySelector";
import { sweets } from "./sweets";
import { useCart } from "./CartContext";

function App() {
  const { quantities, handleQuantityChange, addToCart, totalItems } = useCart();

  function handleClick(e) {
    e.preventDefault();
    const sweetId = parseInt(e.target.getAttribute("data-id"));
    const quantity = quantities[sweetId] || 0;
    const sweet = sweets.find((s) => s.id === sweetId);
    addToCart(sweetId, quantity, sweet);
  }

=======
import { sweets } from "./sweets";
import { useCart } from "./contexts/CartContext";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const { addItem, totalItems } = useCart();
  const handleAddToCart = (sweet) => {
    addItem(sweet);
    toast.success(`${sweet.title} added to cart! ✅`, {
      icon: "🍰",
      duration: 2000,
    });
  };
>>>>>>> 6ed0078e6ab593e4ee0f03e9589a4c5527fb974c
  return (
    <>
      <div className="container">
        <h1>Desserts</h1>
        <Link href="/cart">
<<<<<<< HEAD
          <div style={{ position: "relative", display: "inline-block" }}>
            <FaCartShopping size={30} color="rgb(78, 41, 24)" />
            {totalItems > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-8px",
                  background: "red",
                  color: "white",
                  borderRadius: "50%",
                  width: "20px",
                  height: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {totalItems}
              </span>
            )}
          </div>
        </Link>
      </div>
      <div className="sweets">
        {sweets.map((sweet) => {
          return (
            <>
              <div className="sweet">
                <figure>
                  <img width="200" src={sweet.image} alt={sweet.name} />
                </figure>
                <div className="sweet1">
                  <figcaption>{sweet.name}</figcaption>
                  <p>${sweet.price}</p>
                </div>
                <p id="description">{sweet.desc}</p>
                <div className="bottom-part">
                  <button data-id={sweet.id} onClick={handleClick}>
                    Add to cart
                  </button>
                  <QuantitySelector
                    initialQuantity={quantities[sweet.id] || 0}
                    onQuantityChange={(newQuantity) =>
                      handleQuantityChange(sweet.id, newQuantity)
                    }
                  />
                </div>
              </div>
            </>
          );
        })}
=======
          <FaCartShopping size={30} color="rgb(78, 41, 24)" />
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </Link>
      </div>
      <div className="sweets">
        {sweets.map((sweet) => (
          <div key={sweet.id} className="sweet">
            <figure>
              <img width="200" src={sweet.image} alt={sweet.name} />
            </figure>
            <div className="sweet1">
              <figcaption>{sweet.name}</figcaption>
              <p>${sweet.price}</p>
            </div>
            <p className="description">{sweet.desc}</p>
            <div className="bottom-part">
              <button onClick={() => handleAddToCart(sweet)}>
                Add to cart
              </button>
            </div>
          </div>
        ))}
>>>>>>> 6ed0078e6ab593e4ee0f03e9589a4c5527fb974c
      </div>

      {/* Toast notifications */}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
          style: {
            background: "rgb(78, 41, 24)",
            color: "#fff",
            borderRadius: "10px",
            padding: "12px 16px",
            fontFamily: "Poppins",
          },
        }}
      />
    </>
  );
}

export default App;

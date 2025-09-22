import "./App.css";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "wouter";
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
  return (
    <>
      <div className="container">
        <h1>Desserts</h1>
        <Link href="/cart">
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

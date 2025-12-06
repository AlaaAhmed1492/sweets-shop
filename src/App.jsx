import "./App.css";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "wouter";
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

  return (
    <>
      <div className="container">
        <h1>Desserts</h1>
        <Link href="/cart">
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
      </div>
    </>
  );
}

export default App;

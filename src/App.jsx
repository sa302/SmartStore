import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const cartTotal = cartItems.reduce((total, item) => {
    return total + item.price;
  }, 0);

  function removeFromCart(indexToRemove) {
    setCartItems((previousItems) =>
      previousItems.filter((item, index) => index !== indexToRemove),
    );
  }

  return (
    <>
      <Navbar cartCount={cartItems.length} />

      <Hero />

      <Categories />

      <FeaturedProducts setCartItems={setCartItems} />

      <section className="cart-total">
        <h2>Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>

              <button onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          ))
        )}

        <h3>Total: ${cartTotal.toFixed(2)}</h3>
      </section>

      <Footer />
    </>
  );
}

export default App;

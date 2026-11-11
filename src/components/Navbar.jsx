
function Navbar(props) {
  return (
    <nav className="navbar">
      <h2 className="logo">SmartStore</h2>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/about">About</a>
      </div>

      <button className="cart-button">
        Cart ({props.cartCount})
      </button>
    </nav>
  );
}

export default Navbar;

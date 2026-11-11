function ProductCard(props) {
  return (
    <div className="product-card">
      <img
        src={props.product.image}
        alt={props.product.name}
        className="product-image"
      />

      <h3>{props.product.name}</h3>

      <p>${props.product.price.toFixed(2)}</p>

      <button
        onClick={() =>
          props.setCartItems((previousItems) => [
            ...previousItems,
            props.product,
          ])
        }
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;

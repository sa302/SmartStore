import { useState } from "react";
import ProductCard from "./ProductCard";

const Products = [
  {
    id: 1,
    name: "T-shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 90,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
  },
  {
    id: 3,
    name: "Leather Handbag",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
  },
];

function FeaturedProducts(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = Products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <section className="featured-products">
      <h2>Featured Products</h2>

      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        className="search-input"
      />

      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              setCartItems={props.setCartItems}
            />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </section>
  );
}

export default FeaturedProducts;

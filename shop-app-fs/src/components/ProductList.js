import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";
import "./ProductList.css"; // Import the CSS file

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const handleCartClick = (product) => {
    const isInCart = cartItems.some((item) => item.id === product.id);
    if (isInCart) {
      dispatch(removeFromCart(product.id));
    } else {
      dispatch(addToCart(product));
    }
  };

  const getButtonText = (product) => {
    const isInCart = cartItems.some((item) => item.id === product.id);
    return isInCart ? "Remove from Cart" : "Add to Cart";
  };

  return (
    <div className="product-list">
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div
              style={{
                height: "60%",
                width: "100%", // Ensure the container takes the full width
                display: "flex",
                justifyContent: "center", // Center horizontally
                alignItems: "center", // Center vertically
                marginBottom: "10px", // Add spacing below the image container
              }}
            >
              <img src={product.image} alt={product.title} width="100" />
            </div>
            <div className="product-info">
              <h2>
                {product.title.slice(0, 10)}
                {product.title.length > 10 ? "..." : ""}
              </h2>
              <p>Price: ${product.price}</p>
              <div>
                <Link to={`/product/${product.id}`}>View Details</Link>
              </div>
            </div>
            <button onClick={() => handleCartClick(product)}>
              {getButtonText(product)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

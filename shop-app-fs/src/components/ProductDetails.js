import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import "./ProductDetails.css"; // Import the CSS file

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json))
      .catch((err) => console.error("Error fetching product details:", err));
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.title} />
      <div className="product-info">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <button style={{ alignSelf: "flex-start" }} onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions/cartActions";
import "./CartScreen.css"; // Import the CSS file

const CartScreen = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cart-screen">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.title} width="100" />
              <div style={{ marginLeft: "20px" }}>
                <h2>{item.title}</h2>
                <p>Price: ${item.price}</p>
                <button onClick={() => handleRemove(item.id)}>
                  Remove from Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartScreen;

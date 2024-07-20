import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import CartScreen from "./components/CartScreen";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

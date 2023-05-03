import React from "react";
import "./FloatingButton.css";
import { motion } from "framer-motion";

const FloatingButton = ({ onAddToCart, price, selectedSize }) => {
  const productId = 1;
  const productName = "Sandy Tie Dye Print Dress";
  const quantity = 1;

  const handleButtonClick = async () => {
    if (!selectedSize) {
      alert("Please select a size.");
      return;
    }

    const productDetails = {
      id: productId,
      name: productName,
      price: price,
      size: selectedSize,
      quantity: quantity,
    };

    onAddToCart();
    try {
      const response = await fetch("http://localhost:3003/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productDetails),
      });
      const data = await response.json();
      console.log("Server response:", data);
    } catch (error) {
      console.error("Error sending cart data to the server:", error);
    }

    console.log("Product added to cart:", productDetails);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 1.5, bounce: 0.55 }}
      className="floating-button"
    >
      <motion.button
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="add-button"
        onClick={handleButtonClick}
      >
        <span className="add-text">ADD TO CART</span>
        <span className="price-text">{price}</span>
      </motion.button>
    </motion.div>
  );
};

export default FloatingButton;

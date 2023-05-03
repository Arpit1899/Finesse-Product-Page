// src/SizeSelector.js
import React from "react";
import "./Size.css";
import { motion } from "framer-motion";

const sizes = ["S", "M", "L", "XL", "XXL", "XXXL"];

const SizeSelector = () => {
  const [selectedSize, setSelectedSize] = React.useState(sizes[0]);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="size-selector">
      <div className="size-list">
        {sizes.map((size) => (
          <motion.div
            key={size}
            className={`size-circle ${selectedSize === size ? "selected" : ""}`}
            onClick={() => handleSizeClick(size)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            animate={
              selectedSize === size
                ? { backgroundColor: "#000", color: "#fff" }
                : { backgroundColor: "#fff", color: "#000" }
            }
            transition={{ type: "tween", duration: 0.3 }}
          >
            {size}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;

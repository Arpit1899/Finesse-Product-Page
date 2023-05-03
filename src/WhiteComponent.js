import React, { useState } from "react";
import "./WhiteComponent.css";
import { motion } from "framer-motion"; // Import Framer Motion
import "font-awesome/css/font-awesome.min.css"; // Im
function WhiteComponent() {
  const colors = ["#FCE8E3", "#FBAF9C", "#C2B7B4"];
  const [selectedColor, setSelectedColor] = useState(null); // Add a state for the selected color

  const handleColorSelect = (color) => {
    // Set the selected color
    setSelectedColor(color);
    console.log("Selected color:", color);
  };

  return (
    <div className="white-container">
      <div className="product-details"></div>
      {/* Add the color selection component */}
      <div className="color-selection">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color-option"
            style={{ backgroundColor: color }}
            onClick={() => handleColorSelect(color)}
          >
            {selectedColor === color && (
              <motion.i
                className="fa fa-check color-option-check"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhiteComponent;

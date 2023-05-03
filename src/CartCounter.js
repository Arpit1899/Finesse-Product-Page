import React from "react";
import { motion } from "framer-motion";

function CartCounter({ count }) {
  return (
    <motion.span
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="cart-counter"
    >
      {count}
    </motion.span>
  );
}

export default CartCounter;

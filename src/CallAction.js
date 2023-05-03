import React, { useState } from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";
import "./CallAction.css";
import "./FractulAlt-Regular/FractulAlt-Regular.ttf";
import "./inter-cufonfonts/Inter-Regular.otf";
import SizeGuide from "./SizeGuide";
import { UilUpload, UilHeart, UilShoppingBag } from "@iconscout/react-unicons";

Modal.setAppElement("#root");

function CallAction({ onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState("");
  const sizes = ["XS", "S", "M", "L", "XL", "1X", "2X", "3X"];
  const [liked, setLiked] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const onSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Sandy Tie Dye Print Dress",
          url: "https://localhost:3000/sandy-tie-dye-print-dress",
        });
        console.log("Content shared successfully");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      console.error("Sharing is not supported in this browser");
    }
  };
  const modalContentAnimation = {
    initial: { borderRadius: 50, scale: 0.2, opacity: 0 },
    animate: { borderRadius: 10, scale: 1, opacity: 1 },
  };

  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        bounce: 0.25,
        duration: 0.7,
      }}
      className="call-action"
    >
      <div className="product-header">
        <h2 className="product-title-">Sandy Tie Dye Print Dress</h2>
        {/* <h2 className="price">$36.00</h2> */}
      </div>
      <div className="size">
        <div className="size-selector-container">
          <div className="size-selector">
            {sizes.map((size) => (
              <motion.button
                whileTap={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                key={size}
                onClick={() => onSizeSelect(size)}
                className={`size-button ${
                  selectedSize === size ? "selected" : ""
                }`}
              >
                {size}
              </motion.button>
            ))}
          </div>
          <h3 className="size-title" onClick={openModal}>
            Size Chart
          </h3>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Size Guide Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <motion.div
          initial={modalContentAnimation.initial}
          animate={
            modalIsOpen
              ? modalContentAnimation.animate
              : modalContentAnimation.initial
          }
          className="modal-content"
        >
          <SizeGuide />
          <button className="close-modal" onClick={closeModal}>
            X
          </button>
        </motion.div>
      </Modal>

      {/* <div className="buttons-container">
        <div className="button">
          <UilUpload className="icon" size="25" onClick={handleShare} />
          <motion.div
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <UilHeart
              className={`icon ${liked ? "liked" : ""}`}
              size="25"
              onClick={handleLikeClick}
            />
          </motion.div>
        </div>
        <motion.div
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="Add-to-cart"
          onClick={onAddToCart}
        >
          <UilShoppingBag className="Add-icon" size="30" />
          <h1 className="Add">ADD</h1>
        </motion.div>
      </div> */}
      <div className="line"></div>
    </motion.div>
  );
}

export default CallAction;

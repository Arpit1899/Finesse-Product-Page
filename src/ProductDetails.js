import React, { useState, useEffect } from "react";
import "./ProductDetails.css";
import Modal from "react-modal";
import SizeGuide from "./SizeGuide";
import ProductCardCarousel from "./ProductCardCarousel";
import {
  UilAngleDown,
  UilAngleUp,
  UilArrowRight,
} from "@iconscout/react-unicons";
import image1 from "./Frame 8.jpg";
import BackToTop from "./BackToTop";
import FloatingButton from "./FloatingButton";
import logo from "./finesse.png";
import { motion } from "framer-motion";
Modal.setAppElement("#root");

function ProductDetails({
  onAddToCart,
  price,
  selectedSize,
  setSelectedSize,
  title,
  model,
  description,
  material,
}) {
  const [showMore, setShowMore] = useState(false);
  const [showMaterials, setShowMaterials] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [liked, setLiked] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [products, setProducts] = useState([]);

  const sizes = ["XS", "S", "M", "L", "XL", "1X", "2X", "3X"];
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
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  const toggleShowMaterials = () => {
    setShowMaterials(!showMaterials);
  };
  const toggleShowModel = () => {
    setShowModel(!showModel);
  };
  const modalContentAnimation = {
    initial: { borderRadius: 50, scale: 0.2, opacity: 0 },
    animate: { borderRadius: 10, scale: 1, opacity: 1 },
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Replace the URL below with the IP address on your network without changing the port number
        const response = await fetch("http://192.168.1.229:3003/product");

        const productsData = await response.json();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const reversedProducts = [...products].reverse();

  const shippingDetails = `STANDARD SHIPPING
  

Free for orders over $75.

Within the US, the estimated transit period
is 6-11 business days, depending on the 
delivery address.

Within the AU & UK, the estimated transit 
period is 5-11 business days, depending on 
the delivery address.

Within DE, the estimated transit period is 
10-15 business days, depending on the 
delivery address.

EXPRESS SHIPPING

Within the US, the estimated transit period 
is 2-5 business days, depending on the 
delivery address.

Within the UK, the estimated transit period 
is 2-5 business days, depending on 
the delivery address

Express shipping is not yet available to 
customers in AU and DE.

FREE RETURNS & EXCHANGES

You can return or exchange your items 
from domestic orders easily with free 
shipping by clicking here and following the 
returns process.

For free international returns shipping,
just shoot us an email at 
rewind@finesse.us to get it started!`;

  return (
    <div className="product-details">
      <div className="product-header">
        <span className="product-title-">{title}</span>
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

      <h3 className="product-detail-title">Product Details</h3>
      <span className="product-detail">{description}</span>
      <div className="model-title" onClick={toggleShowModel}>
        <span className="shipping-details-title">MODEL</span>
        <span className="model-detail">{model}</span>
      </div>

      <div className="line"></div>

      <div className="shipping-title" onClick={toggleShowMaterials}>
        <span className="shipping-details-title">MATERIAL</span>
        <span className="model-detail">{material}</span>
      </div>

      <div className="line"></div>
      <div className="shipping-title" onClick={toggleShowMore}>
        <span className="shipping-details-title">SHIPPING & RETURNS</span>
        <span className="shipping-details-icon">
          {showMore ? <UilAngleUp /> : <UilAngleDown />}
        </span>
      </div>
      {showMore && <pre className="model-detail">{shippingDetails}</pre>}
      <div className="line"></div>

      <div className="recommendations">
        <h3 className="recommendation-title">YOU MAY LIKE...</h3>
        <UilArrowRight size={30} />
      </div>
      <ProductCardCarousel products={products} />
      <div className="recommendations">
        <h3 className="recommendation-title">THE HARDWELL</h3>
        <UilArrowRight size={30} />
      </div>
      <ProductCardCarousel products={reversedProducts} />
      <BackToTop />
      {/* <FooterMenu /> */}

      <div className="footer">
        <img src={image1} alt="product" className="banner-image" />
        <img src={logo} alt="product" className="logo-image" />
      </div>
      <FloatingButton
        onAddToCart={onAddToCart}
        price={price}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />
    </div>
  );
}

export default ProductDetails;

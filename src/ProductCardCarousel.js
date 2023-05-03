import React, { useRef, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./ProductCardCarousel.css";
const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.imageUrl} alt={product.title} className="product-image" />
    <div className="product-info">
      <span className="product-title">{product.title}</span>
      <span className="product-price">{product.price}</span>
    </div>
  </div>
);

const ProductCardCarousel = ({ products }) => {
  const scrollRef = React.useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        top: 0,
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };
  const [scrollProgress, setScrollProgress] = useState(0);

  const calculateScrollProgress = () => {
    const element = scrollRef.current;
    const scrollWidth = element.scrollWidth - element.clientWidth;
    const scrollPercentage = (element.scrollLeft / scrollWidth) * 100;
    setScrollProgress(scrollPercentage);
  };

  useEffect(() => {
    const element = scrollRef.current;
    const scrollbarThumb = element && element.querySelector(":after");

    if (scrollbarThumb) {
      scrollbarThumb.style.width = `${scrollProgress}%`;
    }
  }, [scrollProgress]);

  useEffect(() => {
    const element = scrollRef.current;

    const handleScroll = () => {
      calculateScrollProgress();
    };

    if (element) {
      element.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (element) {
        element.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="carousel-container">
      <FaChevronLeft
        className="carousel-arrow-left"
        onClick={() => handleScroll("left")}
      />
      <div className="carousel" ref={scrollRef}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <FaChevronRight
        className="carousel-arrow-right"
        onClick={() => handleScroll("right")}
      />
      <div
        className="scrollbar-thumb"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  );
};

export default ProductCardCarousel;

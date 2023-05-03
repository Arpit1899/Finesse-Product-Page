import React, { useState } from "react";
import "./App.css";
import ProductDetails from "./ProductDetails";
import ImageCarousel from "./ImageCarousel";
import Header from "./Header";
import { UilHeartAlt, UilUpload } from "@iconscout/react-unicons";
import { handleAddToFavorites } from "./Api";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);
  const handleAddToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
  };
  const handleFavoriteToggle = async () => {
    if (!isFavorite) {
      const success = await handleAddToFavorites(ID, title, price); // 'await' the API call
      if (!success) {
        Error("Failed to add product to favorites");
      }
    }
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };
  const ID = "1";
  const price = "$36.00";
  const title = "Sandy Tie Dye Print Dress";

  return (
    <div className="App">
      <Header counter={cartCount} />
      <UilHeartAlt
        className={`heart-icon ${isFavorite ? "favorite" : ""}`}
        size={25}
        onClick={handleFavoriteToggle}
      />
      <UilUpload className="upload-icon" size={25} />
      <ImageCarousel />
      <div className="product"></div>
      <ProductDetails
        onAddToCart={handleAddToCart}
        price={price}
        title={title}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />
    </div>
  );
}

export default App;

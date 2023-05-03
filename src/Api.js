export const handleAddToFavorites = async (id, title, price) => {
    try {
      const response = await fetch("http://localhost:3003/add-to-favorites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, title, price }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to add product to favorites");
      }
  
      return true;
    } catch (error) {
      return false;
    }
  };
  
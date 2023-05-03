export const handleAddToFavorites = async (id, title, price) => {
  try {
    // Replace the URL below with the IP address on your network without changing the port number
    const response = await fetch("http://192.168.1.229:3003/add-to-favorites", {
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

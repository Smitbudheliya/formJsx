import React, { useEffect, useState } from "react";

// Component to display home, slider, and product data
const HomePage = () => {
  const [homeData, setHomeData] = useState([]);
  const [sliderData, setSliderData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error handling

  useEffect(() => {
    const fetchData = async () => {
      try {
        const homeResponse = await fetch("http://localhost:1234/home");
        const home = await homeResponse.json();
        console.log("Home Data:", home);
        setHomeData(home);

        // Fetching data for 'slider' section
        const sliderResponse = await fetch("http://localhost:1234/slider");
        const slider = await sliderResponse.json();
        console.log("Slider Data:", slider);
        setSliderData(slider);

        // Fetching data for 'product' section
        const productResponse = await fetch("http://localhost:1234/product");
        const product = await productResponse.json();
        console.log("Product Data:", product);
        setProductData(product);
      } catch (error) {
        setError(`There was an error fetching the data: ${error.message}`);
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
        
    </div>
  );
};

export default HomePage;

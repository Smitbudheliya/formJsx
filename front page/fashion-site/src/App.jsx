// App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer"
import BestSeller from "./components/BestSeller";
import Categories from "./components/Categories";
import ProductInfo from "./components/ProductInfo";

export default function App() {
  return (
    <Router>
      <div className="font-sans bg-white text-gray-900">
        <Navbar />
        <Hero />
        <Footer />
        <BestSeller />
        <Categories />
        <ProductInfo />
      </div>
    </Router>
  );
}

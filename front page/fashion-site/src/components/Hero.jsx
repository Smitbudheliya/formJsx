// components/Hero.jsx
import React from "react";
import heroImage from "../assets/react.svg"; // You can replace this with any local image

export default function Hero() {
  return (
    <section className="bg-[#f9f1ef] py-10 px-6 md:flex md:items-center md:justify-between">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-4xl md:text-5xl font-semibold leading-snug">
          Shop by your<br />
          <span className="text-pink-500">favorite color</span> &<br />
          instantly brighten up your closet.
        </h2>
        <button className="mt-6 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800">
          Get Started
        </button>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img
          src={heroImage}
          alt="Fashion Model"
          className="rounded-xl shadow-lg w-full max-w-md"
        />
      </div>
    </section>
  );
}

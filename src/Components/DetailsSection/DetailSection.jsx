import React from "react";
import chairImage from "../../assets/images/chair.png";
import headphonesImage from "../../assets/images/headphones.png";

export default function DetailSection() {
  return (
    <div className="container flex flex-col md:flex md:flex-row gap-8 py-20">
      {/* Left Section: Description and Call-to-Action */}
      <div className="w-full md:w-1/3 pl-6 flex flex-col items-start gap-5 mb-14 md:mb-0">
        {/* Section Tagline */}
        <p className="text-yellow-400 font-semibold">WE HELP YOU</p>
        {/* Section Heading */}
        <h3 className="font-semibold text-5xl text-gray-800 text-start">
          Sell <br />
          Stunning <br />
          Products
        </h3>
        {/* Section Description */}
        <p className="text-start">
          We'll guide you through our unique 5-step <br /> brand-building
          framework
        </p>
        {/* Call-to-Action Button */}
        <button className="flex items-center justify-center py-2 w-full mb-7 md:w-1/2 bg-gradient-to-r from-purple-500 to-indigo-700 px-5 shadow-xl rounded-full gap-4">
          <p className="text-sm text-white font-semibold">MORE DETAILS</p>
          <div className="bg-white px-2 py-1 rounded-full">
            <i className="fa-solid fa-arrow-right text-indigo-700"></i>
          </div>
        </button>
      </div>

      {/* Right Section: Product Showcase */}
      <div className="w-full md:w-2/3 pl-16 flex flex-col md:flex md:flex-row justify-center items-center relative my-10 md:my-0 ">
        {/* First Product Card */}
        <div className="relative w-full md:w-1/2 mb-8">
          {/* Decorative Yellow Circle */}
          <div className="absolute -top-24 -left-10 w-60 h-60 bg-yellow-400 rounded-full shadow-xl"></div>
          {/* Product Card */}
          <div className="relative bg-white w-64 shadow-2xl rounded-xl pt-10">
            {/* Product Image */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <img
                className="rounded-full w-28 h-28 object-cover shadow-sm"
                src={chairImage}
                alt="Minimal Chair"
              />
            </div>
            {/* Product Details */}
            <div className="p-5 mt-16 text-center">
              <h5 className="mb-6 text-xl font-bold text-gray-800">
                Minimal Chair
              </h5>
              <hr />
              <div className="flex items-center justify-between mt-3">
                {/* Product Price */}
                <p className="text-yellow-500 text-lg font-bold">$204.00</p>
                {/* Add to Cart Button */}
                <button className="mt-2 p-2 w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-700 text-white rounded-full flex justify-center items-center">
                  <i className="fa-solid fa-cart-shopping"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Second Product Card */}
        <div className="relative w-full md:w-1/2 mt-28">
          {/* Decorative Violet Circle */}
          <div className="absolute -top-24 -left-12 w-60 h-60 bg-violet-500 rounded-full shadow-xl"></div>
          {/* Product Card */}
          <div className="relative bg-white w-64 shadow-2xl rounded-xl pt-10">
            {/* Product Image */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <img
                className="rounded-full w-28 h-28 object-cover shadow-md"
                src={headphonesImage}
                alt="Beats Headphone"
              />
            </div>
            {/* Product Details */}
            <div className="p-5 mt-16 text-center">
              <h5 className="mb-6 text-xl font-bold text-gray-800">
                Beats Headphone
              </h5>
              <hr />
              <div className="flex items-center justify-between mt-3">
                {/* Product Price */}
                <p className="text-yellow-500 text-lg font-bold">$75.00</p>
                {/* Add to Cart Button */}
                <button className="mt-2 p-2 w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-700 text-white rounded-full flex justify-center items-center">
                  <i className="fa-solid fa-cart-shopping"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

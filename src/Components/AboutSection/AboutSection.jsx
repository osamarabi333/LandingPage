import React from "react";
import aboutPerson1 from "../../assets/images/aboutPerson1.webp";
import aboutPerson2 from "../../assets/images/aboutPerson2.png";

export default function AboutSection() {
  return (
    <>
      {/* Main Container */}
      <div className="container pl-20">
        <div className="container md:flex md:flex-row flex flex-col gap-14 md:gap-8 py-20">
          {/* Left Section */}
          <div className="w-full md:w-2/3 flex flex-col md:gap-0 gap-48 justify-center relative">
            {/* First Person Card */}
            <div className="relative w-full md:w-1/2">
              {/* Circular Background */}
              <div className="absolute -top-24 -left-12 w-60 h-60 bg-cyan-500 rounded-full shadow-2xl -z-10"></div>

              {/* Card */}
              <div className="relative bg-white w-64 shadow-2xl rounded-xl flex items-center justify-between">
                {/* Person Image */}
                <div>
                  <img
                    className="rounded-full w-16 h-16 my-3 mx-3 object-cover shadow-lg"
                    src={aboutPerson1}
                    alt="Person 1"
                  />
                </div>
                {/* Person Data */}
                <div className="text-center my-3 mx-3">
                  <h5 className="text-xl font-bold text-gray-800">
                    $7,654{" "}
                    <span className="text-center px-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-700">
                      <i className="fa-solid fa-arrow-up text-sm text-white"></i>
                    </span>
                  </h5>
                  <p className="text-sm font-semibold">
                    TOTAL REVENUE <span className="text-green-500">+232</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Second Person Card */}
            <div className="relative w-full md:w-1/2 md:self-end">
              {/* Circular Background */}
              <div className="absolute -top-24 right-16 w-60 h-60 bg-green-500 rounded-full shadow-2xl -z-10"></div>

              {/* Card */}
              <div className="relative bg-white w-64 shadow-2xl rounded-xl flex items-center justify-between">
                {/* Person Image */}
                <div>
                  <img
                    className="rounded-full w-16 h-16 my-3 mx-3 object-cover shadow-lg"
                    src={aboutPerson2}
                    alt="Person 2"
                  />
                </div>
                {/* Person Data */}
                <div className="text-center my-3 mx-3">
                  <h5 className="text-xl font-bold text-gray-800">
                    $7,654{" "}
                    <span className="text-center px-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-700">
                      <i className="fa-solid fa-arrow-up text-sm text-white"></i>
                    </span>
                  </h5>
                  <p className="text-sm font-semibold">
                    TOTAL REVENUE <span className="text-green-500">+232</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/3 flex flex-col items-start gap-5 mt-12 -ml-8 md:-ml-0">
            {/* Section Title */}
            <p className="text-yellow-400 font-semibold">WHAT WE DO</p>
            <h3 className="font-semibold text-5xl text-gray-800 text-start">
              Increase Our <br />
              Customers <br />
              Sales
            </h3>
            <p className="text-start">
              Our Customers are seeing big results within <br /> the first three
              months framework.
            </p>
            {/* Button */}
            <button className="flex items-center justify-center py-2 w-full md:w-1/2 bg-gradient-to-r from-purple-500 to-indigo-700 px-5 rounded-full gap-4">
              <p className="text-sm text-white font-semibold">MORE DETAILS</p>
              <div className="bg-white px-2 py-1 rounded-full">
                <i className="fa-solid fa-arrow-right text-indigo-700"></i>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

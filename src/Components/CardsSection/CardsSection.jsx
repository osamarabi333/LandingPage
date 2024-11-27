import React from "react";
import girlCardImage from "../../assets/images/girlCard.avif";
import personCard from "../../assets/images/personCard.jpg";
import houseCard from "../../assets/images/houseCard.webp";

export default function CardsSection() {
  return (
    <>
      {/* Wave Shape Divider */}
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full  absolute  -left-24"
        >
          <path
            fill="var(--main-color)" // Dynamic color variable for flexibility
            fillOpacity="1"
            d="M0,96L80,117.3C160,139,320,181,480,176C640,171,800,117,960,80C1120,43,1280,21,1360,10.7L1440,0L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Cards Section */}
      <div className="relative my-20">
        {/* Cards Container */}
        <div className="md:flex md:flex-row flex flex-col items-center justify-between gap-12 md:gap-4">
          {/* First Card */}
          <div className="w-full md:w-1/4 rounded-3xl shadow-2xl">
            {/* Card Image */}
            <a href="#">
              <img
                src={girlCardImage}
                className="w-full h-48 object-cover rounded-t-3xl"
                alt="FASHION STORE"
              />
            </a>
            {/* Card Content */}
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-semibold text-gray-700">
                FASHION STORE
              </h5>
              <p className="mb-2 font-normal text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
                fugiat accusantium eum pariatur maxime cupiditate.
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="w-full md:w-1/4 rounded-3xl shadow-2xl">
            {/* Card Image */}
            <a href="#">
              <img
                src={houseCard}
                className="w-full h-48 object-cover rounded-t-3xl"
                alt="HOME FURNITURE"
              />
            </a>
            {/* Card Content */}
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-semibold text-gray-700">
                HOME FURNITURE
              </h5>
              <p className="mb-2 font-normal text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
                fugiat accusantium eum pariatur maxime cupiditate.
              </p>
            </div>
          </div>

          {/* Third Card */}
          <div className="w-full md:w-1/4 rounded-3xl shadow-2xl">
            {/* Card Image */}
            <a href="#">
              <img
                src={personCard}
                className="w-full h-48 object-cover rounded-t-3xl"
                alt="SUPER GADGET STORE"
              />
            </a>
            {/* Card Content */}
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-semibold text-gray-700">
                SUPER GADGET STORE
              </h5>
              <p className="mb-2 font-normal text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
                fugiat accusantium eum pariatur maxime cupiditate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

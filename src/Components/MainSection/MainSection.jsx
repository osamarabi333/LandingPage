import React from "react";
import MainPerson from "./../../assets/images/mainPerson.png";
import SecondPerson from "./../../assets/images/sc.jpg";

export default function MainSection() {
  return (
    <>
      {/* SVG Wave Shape Divider */}
      <div>
        <div className="custom-shape-divider-bottom-1732561970">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

        {/* Main Content Section */}
        <div className="container flex flex-col md:flex md:flex-row  items-center md:justify-center  relative">
          {/* Left Section: Image and Card */}
          <div className="w-1/2 relative">
            {/* Main Image */}
            <img
              src={MainPerson}
              className="w-full md:w-2/3 md:mt-10 md:ml-20 md:p-3 mt-36 drop-shadow-xl rounded-3xl"
              alt="MainImage"
            />

            {/* Floating Profile Card */}
            <div className="absolute top-72 right-12 -left-14 md:top-80 md:left-20 md:right-0">
              <div className=" w-full md:w-1/3 rounded-lg  bg-white shadow-2xl">
                <div className="flex justify-end px-4 pt-4"></div>
                <div className="flex flex-col items-center pb-10">
                  {/* Profile Image */}
                  <img
                    className="w-24 h-24 mb-3 rounded-full shadow-lg"
                    src={SecondPerson}
                    alt="Bonnie image"
                  />
                  {/* Profile Info */}
                  <h5 className="mb-1 text-xl font-medium text-gray-900">
                    James Bruno
                  </h5>
                  <span className="text-sm text-gray-500">
                    Digital Marketer
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Heading and Search Form */}
          <div className="w-full mt-48 md:mt-6 md:w-1/2 ">
            {/* Section Heading */}
            <h2 className="text-6xl text-start md:text-center pt-20 pl-8 font-semibold text-slate-800/95 pb-3">
              We Help You <br /> Build & Grow An <br /> Online Business
            </h2>

            {/* Search Form */}
            <form className="max-w-md mx-auto md:pl-5">
              <div className="relative">
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm border border-gray-200 shadow-xl mt-3 rounded-lg bg-gray-50"
                  placeholder="Tell us what you need to build...."
                  required
                />
                {/* Search Button */}
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 bg-indigo-700"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Section: Company Logos */}
      <div>
        <div className="pt-32 flex flex-col md:flex md:flex-row items-center justify-between text-gray-800">
          {/* Title */}
          <div>
            <p className="font-semibold text-xl mt-6 mb-8">
              Companies We Have Helped Build
            </p>
          </div>
          {/* Logos */}
          <div className="flex items-center justify-center gap-10 text-2xl">
            <i className="fa-brands fa-docker"></i>
            <i className="fa-brands fa-paypal"></i>
            <i className="fa-brands fa-stack-overflow"></i>
            <i className="fa-brands fa-dribbble"></i>
            <i className="fa-brands fa-codepen"></i>
          </div>
        </div>
      </div>
    </>
  );
}

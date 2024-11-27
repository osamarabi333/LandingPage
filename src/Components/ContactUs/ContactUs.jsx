import React from "react";
import contactUsImage from "../../assets/images/contactUsPerson.png";

export default function ContactUs() {
  return (
    <>
      {/* Main Container */}
      <div className="container py-8 flex md:flex-row  flex-col items-center justify-around">
        {/* Form Section */}
        <div className="md:w-1/2 w-full pb-12 md:pb-0">
          <form className="max-w-sm mx-auto shadow-2xl py-6 px-6 rounded-lg bg-white">
            {/* Email Input */}
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <i className="fa-regular fa-envelope text-gray-500"></i>
              </div>
              <input
                type="email"
                id="email-address-icon"
                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-2xl my-4 block w-full ps-10 p-2.5"
                placeholder="Enter your email address"
                required
              />
            </div>
            {/* Message Textarea */}
            <div>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-200 rounded-2xl border border-gray-300 my-4"
                placeholder="Enter your message..."
                required
              ></textarea>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-indigo-700 py-2 px-3 my-4 rounded-full text-sm text-white font-semibold w-full hover:shadow-lg transition-shadow"
            >
              SEND YOUR MESSAGE
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src={contactUsImage}
            className="w-5/6 drop-shadow-2xl rounded-full shadow-2xl shadow-yellow-400"
            alt="Contact Us Illustration"
          />
        </div> 
      </div>
    </>
  );
}

import React from 'react';
import banner from "../../assets/banner.png";
import { IoCheckmarkOutline } from "react-icons/io5";
import "./spikes.css"; // Link the spikes styles

const Products = () => {
  return (
    <section className="relative spikes w-full min-h-screen flex items-center justify-center px-4 py-10">
      <div className="relative z-10 w-full max-w-7xl h-full flex flex-col md:flex-row items-center justify-center gap-10">
        
        {/* Left Image */}
        <div
          className="w-full md:w-1/2 flex items-center justify-center"
          data-aos="fade-right"
        >
          <img
            src={banner}
            alt="banner"
            className="w-[90%] max-w-[600px] h-auto object-contain"
          />
        </div>

        {/* Right Text */}
        <div
          className="flex flex-col w-full md:w-1/2 px-4"
          data-aos="fade-up"
        >
          <span className="text-white text-2xl sm:text-3xl lg:text-[35px] font-semibold">
            Our Products
          </span>
          <span className="text-gray-200 text-sm sm:text-base font-semibold mt-2">
            To become a one-stop payment and collection solution provider across Africa.
          </span>

          {/* Product List */}
          <div className="flex flex-col sm:flex-row gap-6 mt-5">
            <div className="flex flex-col gap-3 w-full sm:w-1/2">
              {[
                "Techpay Mobile Application",
                "Techpay Wallet",
                "Techpay Payment Application",
              ].map((item) => (
                <div
                  key={item}
                  className="ooin flex items-center justify-center gap-3 bg-white py-2 px-4 rounded-[8px] shadow text-center"
                >
                  <IoCheckmarkOutline color="#60a5fa" />
                  <span className="text-center">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 w-full sm:w-1/2">
              {["APIs", "Techpay Collection Application"].map((item) => (
                <div
                  key={item}
                  className="ooin flex items-center justify-center gap-3 bg-white py-2 px-4 rounded-[8px] shadow text-center"
                >
                  <IoCheckmarkOutline color="#60a5fa" />
                  <span className="text-center">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Products;
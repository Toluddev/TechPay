import React from 'react';
import banner from "../../assets/banner.png";
import { IoCheckmarkOutline } from "react-icons/io5";

const Products = () => {
  return (
    <div className="bg-[#fff] w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-4 py-10 gap-10">
      
      {/* Left Image Section */}
      <div
        className="w-full md:w-1/2 flex items-center justify-center"
        data-aos="fade-right"
      >
        <img src={banner} alt="banner" className="w-[90%] max-w-[600px] h-auto object-contain" />
      </div>

      {/* Right Text Section */}
      <div
        className="flex flex-col w-full md:w-1/2 px-4"
        data-aos="fade-up"
      >
        <span className="text-blue-800 text-2xl sm:text-3xl lg:text-[35px] font-semibold">
          Our Products
        </span>
        <span className="text-slate-700 text-sm sm:text-base font-semibold mt-2">
          To become a one-stop payment and collection solution provider across Africa.
        </span>

        {/* Product List */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-6 mt-5">
          <div className="flex flex-col gap-3 w-full sm:w-[48%]">
            <div className="ooin flex items-center gap-3 bg-white py-2 px-2 rounded-[8px] shadow">
              <IoCheckmarkOutline color="#60a5fa" />
              <span>Techpay Mobile Application</span>
            </div>
            <div className="ooin flex items-center gap-3 bg-white py-2 px-2 rounded-[8px] shadow">
              <IoCheckmarkOutline color="#60a5fa" />
              <span>Techpay Wallet</span>
            </div>
            <div className="ooin flex items-center gap-3 bg-white py-2 px-2 rounded-[8px] shadow">
              <IoCheckmarkOutline color="#60a5fa" />
              <span>Techpay Payment Application</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-3 w-full sm:w-[48%]">
            <div className="ooin flex items-center gap-3 bg-white py-2 px-2 rounded-[8px] shadow">
              <IoCheckmarkOutline color="#60a5fa" />
              <span>APIs</span>
            </div>
            <div className="ooin flex items-center gap-3 bg-white py-2 px-2 rounded-[8px] shadow">
              <IoCheckmarkOutline color="#60a5fa" />
              <span>Techpay Collection Application</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
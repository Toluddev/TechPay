import React from 'react'
import banner from "../../assets/banner.png";
import { IoCheckmarkOutline } from "react-icons/io5";
import SectionWrapper from "../../hoc/SectionWrapper";

const Products = () => {
  return (
    <div className="bg-[#fff] w-100vh h-100vh flex flex-col md:flex-row items-center justify-center px-8 py-10 gap-10 md:gap-1">
        <div className= " h-[800px] w-[800px] bg-contain bg-no-repeat flex items-center justify-center" data-aos="fade-right">
          <img src={banner} alt="banner" className="" />
          </div>
      <div className="flex flex-col w-full md:w-[48%] md:px-0 px-8" data-aos="fade-up">
        <span className="text-blue-800 text-[35px] font-semibold">Our Products</span>
        <span className='text-slate-700 text-[15px] font-semibold'>To become a one-stop payment and collection solution provider across Africa.</span>
        <div className="flex flex-row gap-8 mt-5" style={{width: "1000px"}}>
          <div className='flex flex-col gap-3' style={{width: "300px"}}>
            <div className="ooin flex items-center gap-3 bg-white py-2 rounded-[8px]">
            <IoCheckmarkOutline color='#60a5fa' />
                <span>Techpay Mobile Application</span>
            </div>
            <div className="ooin flex items-center gap-3 bg-white py-2 rounded-[8px]">
              <IoCheckmarkOutline  color='#60a5fa' />
                <span>Techpay Wallet</span>
            </div>
            <div className="ooin flex items-center gap-3 bg-white py-2 rounded-[8px]">
            <IoCheckmarkOutline color='#60a5fa' />
              <span>Techpay Payment Application</span>
            </div>
          </div>
          <div className='flex flex-col gap-3' style={{width: "300px"}}>
            <div className="ooin flex items-center gap-3 bg-white py-2 rounded-[8px] ">
              <IoCheckmarkOutline color='#60a5fa' />
                <span>APIs</span>
            </div>
            <div className="ooin flex items-center gap-3 bg-white py-2 rounded-[8px]">
            <IoCheckmarkOutline  color='#60a5fa' />
                <span>Techpay Collection Application</span>
            </div>
          </div>
				</div>
      </div>
     </div>
  )
}

export default Products;

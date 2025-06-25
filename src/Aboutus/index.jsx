import React from 'react';
import { IoSettingsOutline, IoGridOutline } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa";
import Footer from '../components/Footer';

const Aboutus = () => {
  const values = [
    {
      title: "Vision",
      p: "To provide technological solution that drives our partners businesses.",
      icon: <IoSettingsOutline size={28} className="text-blue-800" />
    },
    {
      title: "Mission Statements",
      p: "Providing businesses in Africa with innovative solutions to achieve desired objectives.",
      icon: <FaRegEnvelope size={28} className="text-blue-800" />
    },
    {
      title: "Core Values",
      p: "Integrity, Experience & Customer Satisfactions.",
      icon: <IoGridOutline size={28} className="text-blue-800" />
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white pt-[130px]">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[#3e4095] text-center font-semibold mb-12">
        About Us
      </h2>

      <div className="flex flex-wrap justify-center gap-6 px-6 md:px-10 lg:px-20">
        {values.map((value) => (
          <div
            key={value.title}
            className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px] h-auto shadow-md p-6 rounded-md hover:scale-105 transition-transform duration-300 bg-white"
          >
            <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center bg-white mb-4">
              {value.icon}
            </div>
            <h3 className="text-[#3e4095] font-semibold text-xl mb-2">
              {value.title}
            </h3>
            <p className="text-[#6084a4] font-medium leading-relaxed text-[14.5px]">
              {value.p}
            </p>
          </div>
        ))}
      </div>

      {/* Decorative gradient just before footer */}
      <div className="w-full mt-24 h-[200px] bg-gradient-to-br from-blue-500 to-indigo-900" />

      <Footer />
    </div>
  );
};

export default Aboutus;
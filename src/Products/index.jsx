import React from 'react';
import { TfiLayoutGrid2 } from "react-icons/tfi";
import { FaHouseChimney, FaRegEnvelope } from "react-icons/fa6";
import { RiShieldCheckLine } from "react-icons/ri";
import { FaHospitalAlt } from "react-icons/fa";
import Footer from '../components/Footer';

const Products = () => {
  const params = [
    {
      title: "TechPay wallet",
      p: "Handles wallet – to -wallet. It can also be used for various transactions, such as bill payments (electricity, water, cable, etc.), buying air time and even transferring money to offset government fees or fines ..",
      icon: <FaHouseChimney size={30} />,
    },
    {
      title: "TechPay Mobile Application",
      p: "Our mobile solutions run on both Android and iOS platforms of phone devices, tablets etc.",
      icon: <TfiLayoutGrid2 size={30} />
    },
    {
      title: "APIs",
      p: "Our Application Programme Interface-API is the software intermediary that allows our clients/users to have a seamless integration with our state-of-the-art applications.",
      icon: <FaHospitalAlt size={30} />,
    },
    {
      title: "TechPay Collection Application",
      p: "Handles transactions such as Government Revenues and Taxes. It also allows collections in the Private Sector (e.g. SME)",
      icon: <RiShieldCheckLine size={30} />,
    },
    {
      title: "TechPay Payment Application",
      p: "Our payments solutions cater to all your payments needs -Single & Multiple Payments, Fund Sweeping, Single Viewing of Accounts, Vendor Payment, Salary Payment and other payments in both Private & Public sectors.",
      icon: <FaRegEnvelope size={30} />,
    },
  ];

  return (
    <div className="z-[1] w-full bg-white relative pt-[130px]">
      <h2 className="text-[40px] sm:text-[50px] text-[#3e4095] text-center font-bold mb-10">Our Products</h2>

      <div className="flex flex-wrap justify-center gap-8 px-4 md:px-8 py-8">
        {params.map((param) => (
          <div
            key={param.title}
            className="shadow-md w-full max-w-[350px] sm:max-w-[400px] p-8 rounded-md hover:scale-[1.03] transition-transform bg-white"
          >
            <div className="bg-gradient-to-r from-blue-500 to-indigo-700 text-white rounded-full w-[70px] h-[70px] flex items-center justify-center mb-4">
              {param.icon}
            </div>
            <p className="text-[#3e4095] font-semibold text-xl mb-2">{param.title}</p>
            <p className="text-[#6084a4] font-medium leading-6 text-sm">{param.p}</p>
          </div>
        ))}
      </div>

      {/* Decorative Gradient Strip */}
      <div className="w-full h-[200px] bg-gradient-to-br from-blue-500 to-indigo-900 z-10 mt-[80px]"></div>

      <Footer />
    </div>
  );
};

export default Products;
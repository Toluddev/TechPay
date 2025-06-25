import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import Footer from '../components/Footer';

const Contact = () => {
  const conts = [
    {
      title: "Address",
      p: "NECA House, Plot A2, Hakeem Balogun Way, Alausa, Lagos, Nigeria",
      icon: <FaLocationDot className="text-white" size={30} />,
    },
    {
      title: "Email",
      p: "info@techpay.ng",
      icon: <MdEmail className="text-white" size={30} />,
    },
    {
      title: "Phone",
      p: "(+234) 8072589575",
      icon: <BiSolidPhoneCall className="text-white" size={30} />,
    },
  ];

  return (
    <div className="w-full bg-white pt-[130px] pb-[100px] relative">
      <h2 className="text-4xl md:text-5xl text-[#3e4095] text-center font-semibold">Contact Us</h2>
      <p className="text-slate-700 text-center mt-3">LINK US ON THE ADDRESS BELOW.</p>

      <div className="flex flex-col lg:flex-row items-start justify-between gap-12 px-6 md:px-16 mt-10">
        {/* Contact Info */}
        <div className="flex flex-col gap-8 w-full lg:w-[45%]">
          {conts.map((cont, index) => (
            <div key={index} className="flex items-start gap-5">
              <div className="p-4 shadow-md rounded-full bg-gradient-to-r from-blue-500 to-orange-500">
                {cont.icon}
              </div>
              <div>
                <h4 className="text-[#3e4095] text-xl font-medium">{cont.title}</h4>
                <p className="text-slate-700 text-base font-medium">{cont.p}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-[50%]">
          <form method="post" action="/Techpay/Contactus" className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="Client_Name" placeholder="Full Name" required className="border p-3 rounded w-full" />
            <input type="email" name="Email" placeholder="Email" required className="border p-3 rounded w-full" />
            <input type="text" name="Phone_No" placeholder="Phone" required className="border p-3 rounded w-full" />
            <input type="text" name="Subject" placeholder="Subject" required className="border p-3 rounded w-full" />
            <select name="Country" className="border p-3 rounded w-full" defaultValue="Nigeria">
              <option value="">Select Country</option>
              <option value="Nigeria">Nigeria</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States of America">United States of America</option>
            </select>
            <select name="ProductType" className="border p-3 rounded w-full" defaultValue="">
              <option value="">Select Product Type</option>
              <option value="TechPay Mobile Collection">TechPay Mobile Collection</option>
              <option value="BroadPay Collection Application">TechPay Collection Application</option>
              <option value="Techpay Wallet">Techpay Wallet</option>
              <option value="APIs">APIs</option>
            </select>
            <textarea name="MessageBody" rows="5" placeholder="How can we help you?" required className="border p-3 rounded md:col-span-2 w-full" />
            <div className="md:col-span-2">
              <button type="submit" className="bg-gradient-to-r from-blue-500 via-blue-800 to-purple-900 text-white px-6 py-2 rounded w-full hover:opacity-90 transition">
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Gradient Strip BEFORE Footer */}
      <div className="w-full mt-20 h-[200px] bg-gradient-to-br from-blue-500 to-indigo-900" />

      <Footer />
    </div>
  );
};

export default Contact;
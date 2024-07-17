import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa";
import { IoGridOutline } from "react-icons/io5";
import Footer from '../components/Footer';
import SectionWrapper from '../hoc/SectionWrapper'

const Aboutus = () => {
  const values = [
    {
      title: "Vision",
      p: "To provide technological solution that drives our partners businesses.",
      icon: <IoSettingsOutline  color='bg-blue-800'/>
    },
    {
      title: "Mission Statements",
      p: "Providing businesses in Africa with innovative solutions to achieve desired objectives.",
      icon: <FaRegEnvelope color='' />
    },
    {
      title: "Core Values",
      p: "Integrity, Experience & Customer Satisfactions.",
      icon: <IoGridOutline />
    }
  ]
  return (
    <div className='z-[1] w-full h-[100vh]  bg-[#fff}] relative pt-[130px] mb-[130px]'>
      <h2 className='text-[80px] text-[#3e4095] text-center font-semibold'>About Us</h2>
      <div className='my-auto mx-0 h-[250px]  px-8 py-10 flex items-center justify-center gap-7 mt-[100px]'>
        {values.map((value) => {
          return(
            <div key={value.title} className='join  shadow-md w-[450px] h-[240px] flex flex-col justify-center  rounded-[5px] p-[15px] hover:scale-[1.07] '>
              <div className='bg-[#fff] rounded-full w-[70px] h-[70px] flex items-center justify-center'>
                  {value.icon}
              </div>
              <span className='text-[#3e4095] font-semibold mt-2 text-[20px]'>{value.title}</span>
              <span className='text-[#6084a4] leading-5 font-semibold mt-3 '>{value.p}</span>
            </div>
          )
        })}
      </div>
      <div className="w-full absolute top-[650px] bottom-0 bg-gradient-to-br from-blue-500 to-indigo-900 h-[200px] z-10"></div>
        <div className='mt-[200px]'></div>

    
      <Footer />
      
    </div>
  )
}

export default SectionWrapper(Aboutus, "aboutus");
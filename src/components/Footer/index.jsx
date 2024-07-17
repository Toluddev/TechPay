import React from 'react'
import SectionWrapper from "../../hoc/SectionWrapper";

const Footer = () => {
  return (
    <div className='relative z-1 text-gray-800'>
      <div className='footer -z-10 absolute right-[20px] bottom-[80px]'></div>
      <div className='py-14  z-1'>
        <div className='grid md:grid-cols-12 grid-cols-1 gap-10 z-100'>
          <div className='lg:col-span-4 col-span-12 '>
            <a href="#">
              <img
                className='h-10 '
                src='https://techpay.ng/assets/img/black-logo.png'
                alt='' />
            </a>
            <p className='mt-6 text-gray-900 text-[14.5px]'>
              TechPay Limited is a Financial Technology
              (FinTech) firm that specializes in the provision of
              payment and collection solutions to its clients
              (Individual, Corporate or Government).
            </p>
          </div>
          <div className='lg:col-span-2 md:col-span-4 col-span-12'>
            <h1 className='tracking-wide text-gray-700 font-semibold'>Company</h1>
            <ul className='list-none mt-6 space-y-2'>
              <li>
                <a href='#' className='hover:text-blue-400 transition-all text-[14.5px] duration-500 ease-in-out'>
                  About Us
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-blue-400 transition-all text-[14.5px] duration-500 ease-in-out'>
                  Products
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-blue-400 transition-all text-[14.5px] duration-500 ease-in-out'>
                  Partners
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-blue-400 transition-all text-[14.5px] duration-500 ease-in-out'>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className='lg:col-span-3 md:col-span-4 col-span-12'>
            <h2 className='tracking-wide text-gray-700 font-semibold'>
              Support 
            </h2>
            <ul className='list-none space-y-2 mt-6'>
              <li>
                <a href='#' className='hover:text-blue-400 transition-all duration-500 ease-in-out'>
                  FAQ's
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-blue-400 transition-all duration-500 ease-in-out'>
                  Terms & Condition
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-blue-400 transition-all duration-500 ease-in-out'>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className='lg:col-span-3 md:col-span-4 col-span-12 space-y-2 '>
            <h3 className='tracking-wide text-gray-700 font-semibold'>Address</h3>
            <p>Location: NECA House, Plot A2, Hakeem Balogun Way, Alausa, Lagos, Nigeria</p>
            <p>Email: info@techpay.ng</p>
            <p>Phone: (+234) 8072589575</p>
          </div>
        </div>
      </div>
      <div className='border-t border-slate-400 '>
        <div className='text-center container mx-auto py-7 px-6'>
          <p className='mb-0'>
            Copyright  &copy; {new Date().getFullYear()} Techpay Limited
          </p>
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(Footer, "footer");

import React from 'react';
import { TfiLayoutGrid2 } from "react-icons/tfi";
import { FaHouseChimney } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
import { RiShieldCheckLine } from "react-icons/ri";
import { FaHospitalAlt } from "react-icons/fa";
import Footer from '../components/Footer';
import { styles } from '../styles';
import SectionWrapper from '../hoc/SectionWrapper'
const Products = () => {
    const params = [
        {
            title: "TechPay wallet",
            p: "Handles wallet – to -wallet. It can also be used for various transactions, such as bill payments (electricity, water, cable, etc.), buying air time and even transferring money to offset government fees or fines ..",
            icon: <FaHouseChimney />,
        },
        {
            title: "TechPay Mobile Application",
            p: "Our mobile solutions run on both Android and iOS platforms of phone devices, tablets etc.",
            icon:<TfiLayoutGrid2 />
        },
        {
            title: "APIs",
            p: "Our Application Programme Interface-API is the software intermediary that allows our clients/users to have a seamless integration with our state-of-the-art applications.",
            icon: <FaHospitalAlt />,
        },
        {
            title: "TechPay Collection Application",
            p: "Handles transactions such as Government Revenues and Taxes. It also allows collections in the Private Sector (e.g. SME)",
            icon: <RiShieldCheckLine />,
        },
        {
            title: "TechPay Payment Application",
            p: "Our payments solutions cater to all your payments needs -Single & Multiple Payments, Fund Sweeping, Single Viewing of Accounts, Vendor Payment, Salary Payment and other payments in both Private & Public sectors.",
            icon: <FaRegEnvelope />,
        },
        
    ];

    return (
        <div className='z-[1] w-full h-[100vh] bg-[#fff] relative pt-[130px] '>
            <h2 className={`${styles.sectionHeadText}`}>Our Products</h2>
            <div className='my-auto mx-0 px-8 py-10 flex flex-wrap items-center justify-evenly gap-10 mt-[10px]'>
                {params.map((param, index) => (
                    <div key={param.title} className={`join shadow-lg w-[400px] h-[400px] p-[60px] ${index < 3 ? 'mb-7' : ''}`}>
                        <div className='bg-[#fff] rounded-full w-[70px] h-[70px] flex items-center justify-center'>
                            {param.icon} 
                        </div>
                        <p className='text-[#3e4095] font-semibold mt-2 text-[20px]'>{param.title}</p>
                        <p className='text-[#6084a4] leading-5 font-semibold mt-3'>{param.p}</p>
                    </div>
                ))}
            </div>



            <div className="w-full absolute  top-[1650px] bg-gradient-to-br from-blue-500 to-indigo-900 h-[200px] z-10"></div>

            <div className='mt-[250px]'></div>

            <Footer />
        </div>



    );
};

export default SectionWrapper(Products, "products");
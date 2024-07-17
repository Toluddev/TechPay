import banner2 from "../../assets/banner2.jpeg";
import SectionWrapper from "../../hoc/SectionWrapper";

const Payment = () => {
  return (
    <div className="z-[1] w-full h-[60vh] bg-[#fff]">
        <div className="flex md:flex-row flex-col items-center w-full md:px-[20px] justify-between md:gap-10 gap-28">
        <div data-aos="fade-right" className="flex flex-col gap-3 w-full ml-5">
            <span className="text-[#3e4095] text-[35px] font-medium">
            Easy Payment for Online <br /> Business and Ecommerce <br />Solution
            </span>
            <span className="text-slate-400 font-medium md:text-[15px] text-[20px] mt-2">
            A way of making transactions or paying for goods and services through an electronic medium, <br /> without the use of cheque or cash.
            </span>
        </div>
        <img
            data-aos="fade-up"
            src={banner2}
            className="md:w-[63%] w-full"
            alt=""
        />
        </div>
    </div>
  )
}

export default SectionWrapper(Payment, "payment");

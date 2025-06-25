import banner2 from "../../assets/banner2.jpeg";

const Payment = () => {
  return (
    <div className="z-[1] w-full min-h-[60vh] bg-white py-10 px-4 sm:px-6 lg:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Text Section */}
        <div data-aos="fade-right" className="flex flex-col gap-4 w-full md:w-1/2">
          <h2 className="text-[#3e4095] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] font-semibold leading-tight">
            Easy Payment for Online <br /> Business and Ecommerce <br /> Solution
          </h2>
          <p className="text-slate-500 font-medium text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
            A way of making transactions or paying for goods and services through an electronic medium,
            <br className="hidden sm:block" />
            without the use of cheque or cash.
          </p>
        </div>

        {/* Image Section */}
        <div data-aos="fade-up" className="w-full md:w-1/2">
          <img
            src={banner2}
            alt="Payment Banner"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
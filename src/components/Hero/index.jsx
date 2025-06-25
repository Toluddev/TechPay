import { useEffect } from 'react';

function Hero() {
  useEffect(() => {
    function showSlider(type) {
      const carousel = document.querySelector('.carousel');
      const SliderDom = carousel.querySelector('.carousel .list');
      const thumbnailBorderDom = document.querySelector('.carousel .thumbnail');

      const SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
      const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.carousel .thumbnail .item');

      if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carousel.classList.add('next');
      } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carousel.classList.add('prev');
      }

      setTimeout(() => {
        carousel.classList.remove('next');
        carousel.classList.remove('prev');
      }, 500);

      clearTimeout(window.runNextAuto);
      window.runNextAuto = setTimeout(() => {
        document.querySelector('.next')?.click();
      }, 5000);
    }

    const nextButtons = document.querySelectorAll('.next');
    const prevButtons = document.querySelectorAll('.prev');

    nextButtons.forEach(btn => {
      btn.onclick = () => showSlider('next');
    });

    prevButtons.forEach(btn => {
      btn.onclick = () => showSlider('prev');
    });

    return () => clearTimeout(window.runNextAuto);
  }, []);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?q=80',
      title: 'Government Bills',
      desc: 'Flexible Electronic Payments of Government Revenues and Bills'
    },
    {
      image: 'https://images.unsplash.com/photo-1571867424488-4565932edb41?q=80',
      title: 'Wallet to Wallet Transfer',
      desc: 'Transfer Money from Wallet to Wallet Instantly'
    },
    {
      image: 'https://images.unsplash.com/photo-1633526544365-a98d534c9201?q=80',
      title: 'Top Up',
      desc: 'Top up your Wallet from your Bank account or Debit Card'
    },
    {
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80',
      title: 'Other Payments',
      desc: 'Pay for your Data, Electricity Bills, Cable TV, Mosque Donations, Church Donations and Buy Airtime from your Wallet'
    }
  ];

  return (
    <div className="">
      <div className="carousel relative w-full overflow-hidden">
        <div className="list flex flex-nowrap transition-all duration-500 ease-in-out">
          {slides.map((item, index) => (
            <div key={index} className="item w-full relative min-w-full flex-shrink-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            <div className="content absolute inset-0 bg-opacity-40 flex flex-col justify-start items-start text-left px-4 sm:px-6 pt-32 sm:pt-24 text-white max-w-[90%] sm:max-w-[600px]">
                <div className="font-black text-black text-[20px] sm:text-[32px] md:text-[50px] lg:text-[70px] leading-tight author">
                  {item.title}
                </div>
                 <div className="text-black font-medium text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] lg:leading-[36px] mt-4 title">
                  {item.desc}
                 </div>
                <div className="buttons mt-5 flex flex-wrap sm:flex-row gap-4 z-[10]">
                  <button className="bg-white text-black text-sm sm:text-base font-medium rounded-md px-3 py-2 whitespace-nowrap">
                    GET STARTED
                  </button>
                  <button className="bg-gradient-to-r from-[#00afef] via-[#00afef] to-[#3e4095] text-white text-sm sm:text-base font-medium rounded-md px-1 py-2 whitespace-nowrap">
                    MAKE PAYMENT
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Thumbnails visible only on md+ */}
        <div className="thumbnail hidden md:flex justify-center items-center gap-4 mt-4 px-4 flex-wrap absolute bottom-14 right-6 z-10">
          {slides.map((item, index) => (
            <div key={index} className="item w-16 h-16 overflow-hidden rounded-md">
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* ✅ Mobile arrows below buttons */}
        <div className="arrows flex md:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 gap-4 z-10 mt-4">
          <button className="prev bg-gray-800 text-white px-4 py-2 rounded-full">P</button>
          <button className="next bg-gray-800 text-white px-4 py-2 rounded-full">N</button>
        </div>

        {/* ✅ Desktop arrows */}
        <div className="arrows hidden md:flex absolute bottom-4 left-1/2 transform -translate-x-1/2 gap-4 z-10">
          <button className="prev bg-gray-800 text-white px-4 py-2 rounded-full">P</button>
          <button className="next bg-gray-800 text-white px-4 py-2 rounded-full">N</button>
        </div>

        <div className="time absolute bottom-2 w-full h-1 bg-gray-200" />
      </div>
    </div>
  );
}

export default Hero;
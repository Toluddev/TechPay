import { useEffect } from 'react';
import { styles } from '../../styles';

function Hero() {
  useEffect(() => {
    function showSlider(type) {
      let carousel = document.querySelector('.carousel');
      let SliderDom = carousel.querySelector('.carousel .list');
      let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');

      let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
      let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.carousel .thumbnail .item');

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
        next.click();
      }, 5000);
    }

    let next = document.getElementById('next');
    let prev = document.getElementById('prev');

    next.onclick = function () {
      showSlider('next');
    };

    prev.onclick = function () {
      showSlider('prev');
    };

    return () => clearTimeout(window.runNextAuto);
  }, []);

  return (
    <div className="">
      <div className="neo"></div>
      <div className="carousel relative w-full overflow-hidden">
        <div className="list flex flex-nowrap transition-all duration-500 ease-in-out">
          {[
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
          ].map((item, index) => (
            <div key={index} className="item w-full relative min-w-full flex-shrink-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            <div className="content absolute inset-0 bg-opacity-40 flex flex-col justify-start items-start p-6 sm:p-10 pt-20 sm:pt-32 text-white ">
                <div className={`${styles.heroHeadText} author text-xl sm:text-3xl lg:text-5xl`}>
                  {item.title}
                </div>
                <div className={`${styles.heroSubText} mt-[20px] title text-sm sm:text-lg lg:text-2xl`}>
                  {item.desc}
                </div>
                <div className="buttons mt-5 flex flex-wrap gap-4">
                  <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white text-sm sm:text-base">
                    GET STARTED
                  </button>
                  <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white text-sm sm:text-base">
                    MAKE PAYMENT
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="thumbnail flex justify-center items-center gap-2 mt-4 px-4 flex-wrap">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="item w-16 h-16 overflow-hidden rounded-md">
              <img
                src={[
                  'https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?q=80',
                  'https://images.unsplash.com/photo-1571867424488-4565932edb41?q=80',
                  'https://images.unsplash.com/photo-1633526544365-a98d534c9201?q=80',
                  'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80'
                ][index]}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="arrows absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
          <button id="prev" className="bg-gray-800 text-white px-4 py-2 rounded">P</button>
          <button id="next" className="bg-gray-800 text-white px-4 py-2 rounded">N</button>
        </div>

        <div className="time absolute bottom-2 w-full h-1 bg-gray-200">
          {/* Optional loading bar */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
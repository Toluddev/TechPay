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
    <div class="">
      <div class="neo"></div>
          <div class="carousel">
            <div class="list">
              <div class="item">
              <img 
                style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                backgroundImage: "linear-gradient(to top, white, transparent), url(https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
              }} />
                <div class="content">
                  <div className={`${styles.heroHeadText} author`}>Government Bills</div>
                  <div className={`${styles.heroSubText} mt-[25px] title`}>Flexible Electronic Payments of Government Revenues and Bills</div>
                  <div class="buttons">
                    <button>GET STARTED</button>
                    <button>MAKE PAYMENT</button>
                  </div>
                </div>
              </div>
              <div class="item">
                <img 
                style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                backgroundImage: "linear-gradient(to top, white, transparent), url(https://images.unsplash.com/photo-1571867424488-4565932edb41?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
              }} />
                <div class="content">
                  <div className={`${styles.heroHeadText} author`}>Wallet to Wallet Transfer</div>
                  <div className={`${styles.heroSubText} mt-[25px] title`}>Transfer Money from Wallet to Wallet <br /> Instantly</div>
                  <div class="buttons">
                    <button>GET STARTED</button>
                    <button>MAKE PAYMENT</button>
                  </div>
                </div>
              </div>
              <div class="item">
              <img 
                style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                backgroundImage: "linear-gradient(to top, white, transparent), url(https://images.unsplash.com/photo-1633526544365-a98d534c9201?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
              }} />
                <div class="content">
                  <div className={`${styles.heroHeadText} author`}>Top Up</div>
                  <div className={`${styles.heroSubText} mt-[25px] title`}> Top up your Wallet from your Bank account <br /> or Debit Card</div>
                  <div class="buttons">
                    <button>GET STARTED</button>
                    <button>MAKE PAYMENT</button>
                  </div>
                </div>
              </div>
              <div class="item">
              <img 
                style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                backgroundImage: "linear-gradient(to top, white, transparent), url(https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
              }} />
                <div class="content">
                  <div className={`${styles.heroHeadText} author`}>Other Payments</div>
                  <div className={`${styles.heroSubText} mt-[25px] title`}>Pay for your Data, Electricity Bills, Cable TV, Mosque <br /> Donations, Church Donations and Buy Airtime from <br /> your Wallet</div>
                  <div class="buttons">
                    <button>GET STARTED</button>
                    <button>MAKE PAYMENT</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="thumbnail">
              <div class="item">
                <img src="https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <div class="content">
                  <div class="title">

                  </div>
                  <div class="description">

                  </div>
                </div>
              </div>
              <div class="item">
                <img src="https://images.unsplash.com/photo-1571867424488-4565932edb41?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <div class="content">
                  <div class="title">

                  </div>
                  <div class="description">

                  </div>
                </div>
              </div>
              <div class="item">
                <img src="https://images.unsplash.com/photo-1633526544365-a98d534c9201?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <div class="content">
                  <div class="title">

                  </div>
                  <div class="description">

                  </div>
                </div>
              </div>
              <div class="item">
                <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <div class="content">
                  <div class="title">

                  </div>
                  <div class="description">

                  </div>
                </div>
              </div>
            </div>

            <div class="arrows">
              <button id="prev">P</button>
              <button id="next">N</button>
            </div>
            <div class="time"></div>

    </div>
    </div>
  );
}

export default Hero;

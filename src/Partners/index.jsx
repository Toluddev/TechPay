import React from 'react'
import lagos from '../assets/lagos.jpeg'
import visa from '../assets/visa.jpeg';
import lasepa from '../assets/lasepa.jpeg';
import lirs from '../assets/lirs.jpeg';
import Footer from '../components/Footer';
import { styles } from '../styles';
import styled, { keyframes, css } from "styled-components";

function App() {
  const row1 = [
    "https://edugist.org/wp-content/uploads/2023/02/LAGOS-STATE-logo-1.jpg" ,
    "https://logos-world.net/wp-content/uploads/2020/05/Visa-Logo.png" ,
    "https://leadership.ng/wp-content/uploads/2023/12/Untitled-design-2023-12-17T134849.624.png" ,
    "https://pbs.twimg.com/profile_images/872480407161327616/vgSBrhWA_400x400.jpg",
  ];

  const row2 = [
    "https://edugist.org/wp-content/uploads/2023/02/LAGOS-STATE-logo-1.jpg" ,
    "https://logos-world.net/wp-content/uploads/2020/05/Visa-Logo.png" ,
    "https://leadership.ng/wp-content/uploads/2023/12/Untitled-design-2023-12-17T134849.624.png" ,
    "https://pbs.twimg.com/profile_images/872480407161327616/vgSBrhWA_400x400.jpg",
  ];

  return (
    <div>
    <AppContainer>
      <Wrapper>
        <h2 className={`${styles.sectionHeadText} mb-[20px]`}>Our Partners</h2>
        <Marquee>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee>
      </Wrapper>
    </AppContainer>

    <div className="w-full absolute top-[750px] bg-gradient-to-br from-blue-500 to-indigo-900 h-[200px] z-10"></div>
    <div className='mt-[110px]'></div>

   <Footer />
   </div>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #02203c;
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 200;
  margin-bottom: 40px;
  color: #7c8e9a;
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;


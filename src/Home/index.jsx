import Hero from './../components/Hero'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Products from '../components/Products';
import Payment from '../components/Payment'
import Logo from '../components/Logo';
import Footer from '../components/Footer';
const Home = () => {
useEffect(() => {
  AOS.init({
    offset: 100, 
    duration: 800, 
    easing: 'ease-in-out', 
    once: true, 
    delay: 500,
  });

 
  return () => {
    AOS.refresh(); 
  };
}, []);

  return (
    <>
    <Hero />
    <Products />
    <Payment />
    <Logo />
    <Footer />
    </>
  )
}

export default Home

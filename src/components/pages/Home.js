import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../Footer'
import '../../App.css';
import HeroSectionHome from '../HeroSectionHome'
import Cards from '../Cards'
import ContactSection from '../ContactSection';
import ProductShowcase from '../ProductShowcase';
import Showcase from '../Showcase';
import Showcase2 from '../Showcase2';
import Certification from '../Certification';
const Home = () => {
  return (
    <div>

    <HeroSectionHome/>
    <Showcase/>
    <ProductShowcase/>
    <Showcase2/>

 {/* <div className="absolute top-5/6 -translate-y-1/2 left-0 right-0 mx-auto z-10 flex justify-center p-4 bg-black-500 shadow-lg hidden md:flex">
  <img src="images/r1.jpg" className="w-60" alt="Vision" />
  <img src="images/Mission.png" className="w-60" alt="Vision" />
  <img src="images/Values-and.png" className="w-60" alt="Vision" />
  <img src="images/images.jpeg" className="w-60" alt="Vision" />


  <div className="text-2xl w-56 h-[200px] bg-sky-500 text-white flex flex-col items-center justify-center font-bold">
  <Link to="/products" className="text-center">
    <div>See Our</div>
    <div>Work</div>
  </Link>
</div>


 </div> */}


  
    <ContactSection/>
    <Certification/>
    <Footer />
    </div>
  )
}

export default Home

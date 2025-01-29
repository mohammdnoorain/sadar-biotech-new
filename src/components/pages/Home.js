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


  
    <ContactSection/>
    <Certification/>
    <Footer />
    </div>
  )
}

export default Home

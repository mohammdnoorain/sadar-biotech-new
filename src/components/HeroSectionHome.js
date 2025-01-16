import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import '../components/styleCssFiles/HeroSectionHome.css';

function HeroSectionHome() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % 3); // Cycle through the text options
    }, 4000); // Change text every 4 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const getSlideText = () => {
    switch (slideIndex) {
      case 0:
        return 'PESTICIDES & FERTILIZER';
      case 1:
        return 'API & Intermediate';
      case 2:
        return 'SURFACTANT';
      default:
        return '';
    }
  };

  return (
    <div className='hero-container'>
      <video src='/videos/10744336-sd_960_540_24fps.mp4' autoPlay loop muted />
      <h1 className="   slide-text ">
        {getSlideText()}
      </h1>
      <p>What are you waiting for? </p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          <Link to='/products'> Our Products</Link>
        
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          <Link to='/contact'> Contact Us</Link>
          {/* <i className='far fa-play-circle' /> */}
        </Button>
      </div>
    </div>
  );
}

export default HeroSectionHome;

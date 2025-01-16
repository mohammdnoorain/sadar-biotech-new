import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
import '../components/styleCssFiles/HeroSectionAbout.css';

function HeroSectionAbout() {
  return (
    <div className='hero-container-about'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <img src='/images/homeimg.jpg' className='background-about'/>
      <h1>About Us </h1>
      <p> Our Incredable Story</p>
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

export default HeroSectionAbout;
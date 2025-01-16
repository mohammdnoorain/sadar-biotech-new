import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
import '../components/styleCssFiles/HeroSectionContactus.css';

function HeroSectionContactus() {
  return (
    <div className='hero-container-contactus'>
    <img  src='/images/contactus.jpg' className='video12' />
      <h1>Contact Us</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
   <Link to='/contact'> Contact Us</Link>
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
     <Link to='/products'> Our Products</Link>
           {/* <i className='far fa-play-circle' /> */}
        </Button>
      </div>
    </div>
  );
}

export default HeroSectionContactus;
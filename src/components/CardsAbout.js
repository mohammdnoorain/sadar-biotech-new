import React from 'react';
import '../components/styleCssFiles/CardsAbout.css';
import CardItemAbout from './CardItemAbout';

function CardsAbout() {
  return (
    <div className='cards'>    <h1 className="text-4xl font-bold text-blue-600 hover:text-green-500 transition-colors duration-300">
  OUR VISION, MISSION AND VALUES
    </h1>
      {/* <h1>OUR VISION, MISSION AND VALUES</h1> */}
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItemAbout
              src='images/Mission.png'
              text='To enhance prosperity of farmers through quality farm solutions with sustainable value for all stakeholders.'
              label='Mission'
              path='/research'
            />
            <CardItemAbout
              src='images/special_nutrients.png'
              text='Harnessing innovation and technology to deliver sustainable pesticide solutions for healthier crops and a greener future."'
              label='Innovation & Technology'
              path='/research'
            />
          </ul>
          <ul className='cards__items'>
            <CardItemAbout
              src='images/Values-and.png'
              text='The fundamental principle of economic activity is that no man you transact with will lose then you shall not.'
              label='VALUES AND BELIEF'
             path='/research'
            />
            <CardItemAbout
              src='images/vision.png'
              text='To be the leader in farm solutions business in geography of choice, consistently delivering superior value to stakeholders through highly engaged employees, with a strong commitment towards sustainability and our values.'
              label='VISION'
           path='/research'
            />
            {/* <CardItemAbout
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            /> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsAbout;
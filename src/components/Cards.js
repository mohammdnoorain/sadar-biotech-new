import React from 'react';
import '../components/styleCssFiles/Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1 className=" text-4xl font-bold text-green-500 hover:text-blue-800 transition-colors duration-300 sm:hover:text-blue-800 transition-colors duration-300">
            Our Products
            </h1>
      <div class="flex items-center justify-center min-h-[20vh] px-4">
  <p class="text-center text-lg lg:text-xl text-gray-800 font-bold transition-transform duration-300 hover:translate-x-2  hover:text-green-500"  >
    Sadar Biotech is renowned for delivering top-notch products, including API & Intermediates, 
    Pesticides & Fertilizers, and Surfactants, ensuring unparalleled quality.
  </p>
</div>

       <div className='cards__container'>
         <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
               src='images/fertiliser.png'
               text='Sadar Biotech manufactures cutting edge pharma products and intermediates which addresses relevant therapeutic areas.'
               label='API & Intermediates'
              // path='/services'
            />
           
            <CardItem
              src='images/fertiliser2.webp'
              text='We offer a wide range of Pesticides, PGR, Fertilizer & Bio stimulants.'
              label='Pesticides & Fertlizer'
              // path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/cropped-surf.webp'
              text='We manufacture efficient, easy bonding surfactants and adjuvants with targeted application for different use.'
              label='Surfactant'
              // path='/services'
            />

          

             <CardItem
              src='images/fertiliser6.webp'
              text='High-Quality Agro-Technical Products for Modern Farming Needs
              Boost Crop Protection and Yield with Our Range of Insecticides, Herbicides, and Bio-Stimulants'

              label='Agro-Technical Products'

              // path='/products'

            />
            {/* <CardItem
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

export default Cards;
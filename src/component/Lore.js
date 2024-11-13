import React, { useState } from 'react';
import Atributes from './Atributes';
import Card from './Card';
import Carousel, { CarouselItem } from './Caroussel/Carrousel';

function Lore({ loreRef }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section>
      <div className='h-screen bg-gray-900'>
        <div className='flex flex-col w-full justify-center items-center pt-12 pb-2'>
          <h1
            className='text-6xl text-white font-cinzel font-bold'
            ref={loreRef}>
            Lore
          </h1>

          <hr className='w-full max-w-sm border-2 rounded-2xl bg-white h-1 mt-4' />
        </div>
        <Carousel activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
          <CarouselItem>
            <Card />
          </CarouselItem>
          <CarouselItem>
            <Atributes />
          </CarouselItem>
          <CarouselItem>
            <Atributes />
          </CarouselItem>
        </Carousel>
      </div>
    </section>
  );
}

export default Lore;

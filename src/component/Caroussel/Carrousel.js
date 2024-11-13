import React, { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

export const CarouselItem = ({ children, width }) => {
  return (
    <div className='inline-flex h-[600px]' style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children, activeIndex, setActiveIndex }) => {
  const updateIndex = newIndex => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <div {...handlers} className='overflow-hidden'>
      <div
        className='whitespace-nowrap transition delay-150 ease-in-out'
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: '100%' });
        })}
      </div>
      <div className='flex justify-center items-center mt-14'>
        {React.Children.map(children, (child, index) => {
          return (
            <div
              className={`rounded-full m-2 p-2 cursor-pointer  ${
                index === activeIndex
                  ? 'bg-white opacity-100'
                  : 'bg-gray-400 opacity-40'
              }`}
              onClick={() => {
                updateIndex(index);
              }}></div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;

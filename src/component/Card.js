import React from 'react';
import { AiFillFire } from 'react-icons/ai';
import { MdWaterDrop } from 'react-icons/md';

function Card() {
  return (
    <div className=' w-full h-full flex flex-col items -center'>
      <div className='h-full w-9/12 grid grid-cols-2 mx-auto'>
        <div className='mx-auto'>
          <div className='rounded-xl h-[550px] w-[350px] bg-gray-200 flex justify-center items-center'>
            <div
              className={`flex flex-col h-[92%] w-[92%] bg-cover bg-center opacity-90 bg-[url('../public/pexels-oleg-magni.jpeg')]`}>
              <div className='mx-4 my-1 w-[92%] flex justify-between'>
                <p className='text-gray-100 font-sm font-bold'>The Explorer</p>
                <div className='flex space-x-1 items-center'>
                  <div className='bg-white p-[0.1rem] rounded-full text-red-500'>
                    <AiFillFire />
                  </div>
                  <div className='bg-white p-[0.1rem] rounded-full text-blue-500'>
                    <MdWaterDrop />
                  </div>
                </div>
              </div>
              <div className='mx-3 my-1 w-[92%] h-[55%] p-2 bg-gradient-to-r from-violet-400 to-purple-600 '>
                <img
                  className='object-fill h-full w-full rounded-xs'
                  src='https://i.pinimg.com/originals/df/a1/5e/dfa15eb0130cc762c3fb02b18e9425fe.jpg'
                  alt='Profile'
                  loading='lazy'
                />
              </div>

              <div className='mx-4 my-1 w-[92%]'>
                <p className='text-gray-100 font-sm font-semibold'>
                  {' '}
                  Developer - Full Stack
                </p>
              </div>
              <div className='mx-3 my-1 w-[92%] h-[25%] bg-purple-300 opacity-80 flex justify-center items-center rounded-md shadow '>
                <p className='font-semibold text-md text-white whitespace-normal px-2 pt-1'>
                  Play this card and get your App developed <br />
                  <span className='italic text-gray-700 text-xs py-1 text-center'>
                    {' '}
                    ... This card will respaw on your deck after the project is
                    done. Needs to rest 2 turns before plyaing this card
                    again...
                  </span>
                </p>
              </div>
              <p className='text-center w-full text-xs text-white'>
                {' '}
                <span className='font-bold'>TM</span> - Apollo Surfer 2022
              </p>
            </div>
          </div>
        </div>

        <div className='space-y-8'>
          <div className='whitespace-normal text-lg text-white font-cinzelDecorative font-semibold'>
            <span className='text-5xl font-bold '>T</span>
            he Hero journey starts after graduating from the Pharmacy school.
            Unsatisfied with his role in this world our hero decides to go in an
            adventure and explore new places in an attempt to feed the hunger
            that burns deep in his soul.
          </div>
          <div className='whitespace-normal text-lg text-white font-cinzelDecorative font-semibold'>
            <span className='text-4xl font-bold font-cinzelDecorative'>A</span>
            fter working in Portugal, in Africa (Angola) and in Ireland, after
            playing diferent roles, managing people and businesses and after
            almost giving up to despair he found the light. It was when he first
            read the sacred writtings of MDN Docs that he first saw the light.
            Is upon witnessing the mighty power of coding that our hero decides
            to leave the healthcare path and follow the{' '}
            <span className='font-extrabold'>Full Stack Developer</span> Path.
          </div>
          <div className='whitespace-normal text-lg text-white font-cinzelDecorative font-semibold'>
            <span className='text-4xl font-bold font-cinzelDecorative'>O</span>
            ur Hero trained in multiple dojos at Udemy, done multiple
            turtorials, joined a developer community (Papafam) and done multiple
            Apps. Our Hero is ready to the final Boss: <br />
            <span className='font-bold underline underline-offset-4'>
              land his first Developer Job
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

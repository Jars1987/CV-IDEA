import React from 'react';
import Header from './Header';
import { FaDiscord, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const styles = {
  sectionContainer: `relative h-screen`,
  sectionBG: `absolute -z-10 top-0 left-0 right-0 bottom-0 bg-cover bg-center opacity-90 bg-[url('../public/jr_korpa.jpeg')]`,
  contentContainer: `flex flex-col h-full justify-around`,

  icon: `text-white text-4xl rounded-full m-2 p-3 bg-gradient-to-r from-blue-600 to-red-600 over:p-2 hover:border-4 border-gray-200 cursor-pointer`,
};

function LandinPage({ loreRef }) {
  return (
    <div>
      <section className={styles.sectionContainer}>
        <div className='absolute z-20 bg-transparent w-full'>
          <Header loreRef={loreRef} />
        </div>

        <div className={styles.sectionBG} />
        <div className={styles.contentContainer}>
          <div className='w-full mt-28'>
            <div className='ml-28'>
              <div>
                <div className='relative'>
                  <div className='relative'>
                    <p className='text-white text-8xl py-4 font-bold font-cinzel text-center max-w-4xl '>
                      José Santos
                    </p>
                  </div>

                  <p className='text-xl text-white py-2 font-light max-w-4xl text-center'>
                    This is the story of a healer that had a vision of the
                    future and then decided to learn the ways of{' '}
                    <span className='font-bold'>Coding</span>.
                  </p>

                  <p className='text-xl text-white py-2 font-light max-w-4xl text-center'>
                    In order to become a Knight of the{' '}
                    <span className='font-bold'>Web Developement</span> he
                    followed the path of the{' '}
                    <span className='font-bold'>Full Stack</span>.
                  </p>

                  <p className='text-xl text-white py-2 font-light max-w-4xl text-center'>
                    He has amored him self with{' '}
                    <span className='font-bold'>React</span>,{' '}
                    <span className='font-bold'>NextJS</span>,{' '}
                    <span className='font-bold'>Firebase</span>,{' '}
                    <span className='font-bold'>MongoDB</span> and much more.{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center mb-10'>
            <div className='flex space-x-16'>
              <div className='text-white text-4xl rounded-full m-2 p-3 bg-gradient-to-r from-blue-600 to-red-600 hover:p-2 hover:border-4 border-gray-200 cursor-pointer'>
                <FaLinkedinIn />
              </div>
              <div className='text-white text-4xl rounded-full m-2 p-3 bg-gradient-to-r from-blue-600 to-red-600 hover:p-2 hover:border-4 border-gray-200 cursor-pointer'>
                <FaGithub />
              </div>
              <div className='text-white text-4xl rounded-full m-2 p-3 bg-gradient-to-r from-blue-600 to-red-600 hover:p-2 hover:border-4 border-gray-200 cursor-pointer'>
                <FaDiscord />
              </div>
            </div>
          </div>
        </div>

        <div className='absolute w-full z-10 bottom-0 h-10 bg-gradient-to-b from-transparent to-gray-900'></div>
      </section>
    </div>
  );
}

export default LandinPage;

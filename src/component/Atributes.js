import React from 'react';

function Atributes() {
  return (
    <div className=' w-full h-full flex justify-center'>
      <div className='h-full w-9/12 grid grid-cols-2'>
        <div className='mx-auto my-auto'>
          <div className='flex flex-col justify-center items-center border-yellow-600 border-4 rounded-md w-[400px] bg-violet-200  '>
            <div className='w-full'>
              <div className='w-full bg-white flex justify-between items-center py-2 border-2 border-b-black'>
                <p className='text-md mx-4 font-bold'>Jose Santos </p>
                <p className=' mx-4 font-semibold text-sm'>Level 7</p>{' '}
              </div>
              <div className='flex items-center justify-between border-2 border-b-black'>
                <img
                  className='h-20 w-20 p-2 rounded-xl '
                  src='https://i.pinimg.com/originals/df/a1/5e/dfa15eb0130cc762c3fb02b18e9425fe.jpg'
                  alt='Hero'
                />
                <div className='flex flex-col items-end flex-end mx-4'>
                  <div className='flex justify-between'>
                    <p className='text-sm mx-4'>Experience</p>
                    <p className='font-semibold text-sm'> 7850xp</p>
                  </div>
                  <div className='flex justify-between w-full'>
                    <p className='text-sm mx-4'>Level Up</p>
                    <p className='font-semibold text-sm'> 10000xp</p>
                  </div>
                  <div className='flex justify-between w-full'>
                    <p className='text-sm mx-4'>HP</p>
                    <p className='font-semibold text-sm'>345/400</p>
                  </div>
                </div>
              </div>
              <div>//atributes talve</div>
            </div>
          </div>
        </div>

        <div className='mx-auto my-auto'>
          <div className='flex justify-center items-center relative'>
            <img
              className=' w-[400px] opacity-75'
              src='./dwarf.png'
              alt='Jose Santos Hero'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Atributes;

/*

*/

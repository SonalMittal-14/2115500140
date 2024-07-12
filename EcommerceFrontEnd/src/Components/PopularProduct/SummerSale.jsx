import React from 'react';
import laptop from '../../Images/laptop.png'

const SummerSale = () => {
  return (
    <div className='relative flex'>
        <img src={laptop} alt="sale.png" className='w-full h-100' />
        <div className='absolute top-32 left-24'>
          <h1 className='text-9xl font-semibold tracking-widest mb-2'>Summer Sale </h1>
          <h1 className='text-6xl font-semibold tracking-wider mb-6'>MacBook </h1>
          <a href="#" className='bg-black text-white text-xl   px-6 py-2 rounded-full mt-6'>Go To Store</a>
        </div>
    </div>
  )
}

export default SummerSale
import React from 'react'
import '../../../index.css'

const ServiceBox = [
  {
    icon: 'Dashboard',
    header: '#',
    paragraph: true
  },
  {
    icon: 'Team',
    header: '#',
    paragraph: false
  },
  {
    icon: 'Projects',
    header: '#',
    paragraph: false
  }
];

const Services = () => {
  return (
    <div className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-3xl">Breef for Talents & Creatives</h2>
      <p className="mt-3 text-base text-gray-200 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
        Get Detailed Briefings and Seamless payments for the work you love
      </p>

      <div className="mx-auto mt-10 max-w-7xl px-0 sm:flex sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className='glassmorphic-div w-full mx-auto mt-4 max-w-7xl px-4 py-10 sm:w-[30%] sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
          <h1 className='text-xl mx-2font-light text-teal-400'>Get Paid Globally</h1>
          <p className='text-gray-50 font-light'>With Breef, you would be able to take on jobs from foreigners without the payment barriers</p>
        </div>

        <div className='glassmorphic-div w-full mx-auto mt-4 max-w-7xl px-4 py-10 sm:w-[30%] sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
          <h1 className='text-xl mx-2font-light text-teal-400'>Get Paid Globally</h1>
          <p className='text-gray-50 font-light'>With Breef, you would be able to take on jobs from foreigners without the payment barriers</p>
        </div>

        <div className='glassmorphic-div w-full mx-auto mt-4 max-w-7xl px-4 py-10 sm:w-[30%] sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
          <h1 className='text-xl mx-2font-light text-teal-400'>Get Paid Globally</h1>
          <p className='text-gray-50 font-light'>With Breef, you would be able to take on jobs from foreigners without the payment barriers</p>
        </div>
      </div>
    </div>
  )
}

export default Services
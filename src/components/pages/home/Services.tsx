import React from 'react'
import '../../../index.css'
import { TbSettingsAutomation } from 'react-icons/tb'
import { GiReceiveMoney, GiTakeMyMoney } from 'react-icons/gi'

const ServiceBox = [
  {
    icon: 'Dashboard',
    header: 'Get Paid Globally',
    paragraph: 'With Breef, you would be able to take on jobs from foreigners without the payment barriers'
  },
  {
    icon: 'Team',
    header: 'Access Funds Without Hassles',
    paragraph: 'With Breef, you would be able to take on jobs from foreigners without the payment barriers'
  },
  {
    icon: 'Projects',
    header: 'Automate your Payroll Systems',
    paragraph: 'With Breef, you would be able to take on jobs from foreigners without the payment barriers'
  }
];

const Icons = [
  <TbSettingsAutomation />,
  <GiReceiveMoney />,
  <GiTakeMyMoney />
]

const Services = () => {
  return (
    <div className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8">
      <div className="sm:text-center lg:text-left">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-3xl md:text-5xl">Breef for Talents & Creatives</h2>
        <p className=" mt-3 text-base text-gray-200 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
          Get Detailed Briefings and Seamless payments for the work you love
        </p>
      </div>


      <div className="my-auto mt-5 max-w-7xl sm:flex sm:mt-12 md:mt-16 lg:mt-20 xl:mt-5">
        <div className='glassmorphic-div w-full px-8 mx-auto mt-4 max-w-7xl px-4 py-10 sm:w-[31%] sm:px-6'>

        </div>
        <div className='glassmorphic-div w-full px-8 mx-auto mt-4 max-w-7xl px-4 py-10 sm:w-[31%] sm:px-6'>
          <GiReceiveMoney className='text-5xl my-2 font-medium text-teal-400' />
          <h1 className='text-xl my-2 font-medium text-teal-400'> Get Paid Globally</h1>
          <p className='text-gray-50 font-light'>With Breef, you would be able to take on jobs from foreigners without the payment barriers</p>
        </div>

        <div className='glassmorphic-div w-full px-8 mx-auto mt-4 max-w-7xl px-4 py-10 sm:w-[31%] sm:px-6'>
          <GiTakeMyMoney className='text-5xl my-2 font-medium text-teal-400' />
          <h1 className='text-xl my-2 font-medium text-teal-400'>Access Funds Without Hassles</h1>
          <p className='text-gray-50 font-light'>With Breef, you would be able to take on jobs from foreigners without the payment barriers</p>
        </div>

        <div className='glassmorphic-div w-full px-8 mx-auto mt-4 max-w-7xl px-4 py-10 sm:w-[31%] sm:px-6'>
          <TbSettingsAutomation className='text-5xl my-2 font-medium text-teal-400' />
          <h1 className='text-xl my-2 font-medium text-teal-400'>Automate your Payroll Systems</h1>
          <p className='text-gray-50 font-light'>With Breef, you would be able to take on jobs from foreigners without the payment barriers</p>
        </div>
      </div>
    </div>
  )
}

export default Services
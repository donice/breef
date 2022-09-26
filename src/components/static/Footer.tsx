import React from 'react'
// import '../index.css'
import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className=" mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <hr />
      <div className='text-teal-50 mt-10 pb-10 text-xs'>
        <div className='w-full'>
          <a href="#">
            <span className="sr-only">Your Company</span>
            <h1
              className="logo h-8 w-auto sm:h-10 text-yellow-400"
            > Breef. </h1>
          </a>
        </div>

        <div className='mb-2'>
          <p>Building this from the Trenches of Ekosodin, Benin City, Ngeria</p>
        </div>

        <div className='mb-2'>
          <p>doniceubaru@Breef.com</p>
        </div>

        <div className='flex w-[30px] space-x-4 text-2xl text-teal-400 mb-2'>
          <a href="https://www.instagram.com/drdonice"><BsInstagram /></a>
          <a href="https://www.twitter.com/drdonice"><BsTwitter /></a>
          <a href="https://www.linkedin.com/in/doniceubaru"><BsLinkedin /></a>
        </div>

        <p className='mb-2 text-gray-'>Copyright: <span>{new Date().getFullYear()}</span> </p>
      </div>
    </div>
  )
}

export default Footer
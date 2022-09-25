import React from 'react'
// import '../index.css'

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

        <div className=''>
          <a href="https://www.instagram.com/drdonice">Instagram  </a>
          <a href="https://www.twitter.com/drdonice">Twitter  </a>
          <a href="https://www.linkedin.com/in/doniceubaru">LinkedIn</a>
        </div>

      </div>
    </div>
  )
}

export default Footer
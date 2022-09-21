import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className="relative overflow-hidden ">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-1 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <svg
              className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            {/* LandingPage Page */}
            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 ">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-50 sm:text-6xl md:text-6xl">
                  <span className="block xl:inline sm:text-">Briefing & Payment System</span>{' '}
                  <span className="block text-teal-400 xl:inline">for creatives</span>
                </h1>
                <p className="mt-3 text-base text-gray-200 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  Every creative that would need to appear serious before clients, would always need a
                  professional billing and receipting system, and <b>BREEF</b> helps that
                </p>

                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  {/* <Button /> */}
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-teal-400 px-8 py-3 text-base font-bold text-teal-900 hover:bg-teal-700 md:py-4 md:px-10 md:text-lg"
                    >
                      Get started
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-3 text-base font-bold text-gray-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                    >
                      Create Account
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full "
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt=""
          />
        </div>
      </div>

    </div>
  )
}

export default Hero
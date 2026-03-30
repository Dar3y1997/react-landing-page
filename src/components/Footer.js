import React from 'react'

function Footer() {
  return (
    <>
    <footer className="bg-[#0b1523] pt-49 md:pt-45 pb-16 px-4 md:px-5">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <svg
            width="45px"
            height="45px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 8L12 4L20 8L12 12L4 8Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 12L12 16L20 12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 16L12 20L20 16"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-3xl font-bold block">Fylo</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-sm text-gray-400">

          <div className="flex gap-4">
            <i className="fa-solid text-white fa-location-dot pt-1"></i>
            <p>
              Lorem ipsum dolor isit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>

          <div className="flex flex-col gap-3 items-center md:items-start">
            <p className="hover:text-white cursor-pointer">📞 +1-543-123-4567</p>
            <p className="hover:text-white cursor-pointer">✉️ example@fylo.com</p>
          </div>

          <div className="flex flex-col gap-3 items-center md:items-start">
            <a href="/" className="hover:text-white">About Us</a>
            <a href="/" className="hover:text-white">Jobs</a>
            <a href="/" className="hover:text-white">Press</a>
            <a href="/" className="hover:text-white">Blog</a>
          </div>

          <div className="flex flex-col gap-3 items-center md:items-start">
            <a href="/" className="hover:text-white">Contact Us</a>
            <a href="/" className="hover:text-white">Terms</a>
            <a href="/" className="hover:text-white">Privacy</a>
          </div>

          <div className="flex gap-3 mt-2 md:mt-0 justify-center md:justify-start">
            <a href="/"
            className="border border-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-white hover:text-[#1b2330]"
            ><i className="fa-brands fa-facebook-f"></i></a>
            <a href="/"
            className="border border-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-white hover:text-[#1b2330]"
            ><i className="fa-brands fa-x-twitter"></i></a>
            <a href="/"
            className="border border-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-white hover:text-[#1b2330]"
            ><i className="fa-brands fa-linkedin"></i></a>
          </div>

        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
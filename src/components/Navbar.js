import React from 'react'

function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center px-4 md:px-7 py-4 md:py-6 max-w-6xl mx-auto">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg
            className="w-8 h-8 md:w-[45px] md:h-[45px]"
            viewBox="0 0 24 24"
            fill="none"
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

          <span className="text-xl md:text-4xl font-bold">Fylo</span>
        </div>

        {/* Nav Links */}
        <ul className="flex items-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm md:text-base text-gray-300">
          <li className="hover:bg-gradient-to-r from-[#339ecc] to-[#65e2d9] text-white rounded-lg px-2 py-1">
            <a href="/">Features</a>
          </li>
          <li className="hover:bg-gradient-to-r from-[#339ecc] to-[#65e2d9] text-white rounded-lg px-2 py-1">
            <a href="/">Team</a>
          </li>
          <li className="hover:bg-gradient-to-r from-[#339ecc] to-[#65e2d9] text-white rounded-lg px-2 py-1">
            <a href="/">Sign In</a>
          </li>
        </ul>

      </nav>
    </>
  )
}

export default Navbar
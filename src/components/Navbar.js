import React from 'react'

function Navbar() {
  return (
    <>
    <nav className="flex justify-between items-center px-7 py-6 max-w-6xl mx-auto">
      <div className="flex items-center">
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
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4 12L12 16L20 12"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4 16L12 20L20 16"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span className="text-4xl font-bold">Fylo</span>
      </div>

      <ul className="flex gap-6 text-sm text-gray-300">
        <li
          className="hover:bg-gradient-to-r from-[#339ecc] to-[#65e2d9] text-white rounded-lg px-2 py-1"
        >
          <a href="/">Features</a>
        </li>
        <li
          className="hover:bg-gradient-to-r from-[#339ecc] to-[#65e2d9] text-white rounded-lg px-2 py-1"
        >
          <a href="/">Team</a>
        </li>
        <li
          className="hover:bg-gradient-to-r from-[#339ecc] to-[#65e2d9] text-white rounded-lg px-2 py-1"
        >
          <a href="/">Sign In</a>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar
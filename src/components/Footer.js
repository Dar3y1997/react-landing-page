import React from 'react'

function Footer() {
  return (
    <>
    <footer class="bg-[#0b1523] pt-45 pb-16 px-5">
      <div class="max-w-6xl mx-auto">
        <div class="flex items-center mb-8">
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
          <span class="text-3xl font-bold block">Fylo</span>
        </div>

        <div class="grid grid-cols-5 gap-10 text-sm text-gray-400">
          <div class="flex gap-4">
            <i
              class="fa-solid text-white fa-location-dot pt-1"
   
            ></i>
            <p>
              Lorem ipsum dolor isit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>

          <div class="flex flex-col gap-3">
            <p class="hover:text-white cursor-pointer">📞 +1-543-123-4567</p>
            <p class="hover:text-white cursor-pointer">✉️ example@fylo.com</p>
          </div>

          <div class="flex flex-col gap-3">
            <a href="#" class="hover:text-white">About Us</a>
            <a href="#" class="hover:text-white">Jobs</a>
            <a href="#" class="hover:text-white">Press</a>
            <a href="#" class="hover:text-white">Blog</a>
          </div>

          <div class="flex flex-col gap-3">
            <a href="#" class="hover:text-white">Contact Us</a>
            <a href="#" class="hover:text-white">Terms</a>
            <a href="#" class="hover:text-white">Privacy</a>
          </div>

          <div class="flex gap-3 mt-2">
            <a
              href="#"
              class="border border-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-white hover:text-[#1b2330]"
              ><i class="fa-brands fa-facebook-f"></i
            ></a>
            <a
              href="#"
              class="border border-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-white hover:text-[#1b2330]"
              ><i class="fa-brands fa-x-twitter"></i
            ></a>
            <a
              href="#"
              class="border border-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-white hover:text-[#1b2330]"
              ><i class="fa-brands fa-linkedin"></i
            ></a>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
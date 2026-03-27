import React from 'react'
import hero from '../images/gigabyte-hero-image.jpg'
import monitor from '../images/monitor-and-phone-svgrepo-com.svg'
import productivity from '../images/productivity-checklist2.jpg'
import quote from '../images/left-quote-svgrepo-com.svg'
import person1 from '../images/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg'
import person2 from '../images/danny-postma-zNxOw2JFNKs-unsplash.jpg'
import person3 from '../images/jurica-koletic-7YVZYZeITc8-unsplash.jpg'
function Content() {
  return (
    <>
    <section class="text-center py-16 px-6 max-w-2xl mx-auto">
      <div
        class="bg-gray-700 rounded-xl w-120 h-85 mx-auto mb-10 flex items-center justify-center text-gray-400 text-sm"
      >
        <img src={hero} alt="" class="h-85"/>
      </div>

      <h1 class="text-3xl font-bold leading-snug mb-4">
        All your files in one secure location, <br />accessible anywhere.
      </h1>

      <p class="text-gray-400 mb-8">
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends, family, and
        co-workers.
      </p>

      <button
        class="bg-gradient-to-r from-[#65e2d9] to-[#339ecc] text-white px-14 py-3 rounded-full font-bold hover:from-[#339ecc] hover:to-[#65e2d9] transition-colors duration-300 cursor-pointer"
      >
        Get Started
      </button>
    </section>

    <section class="bg-[#1b2330] py-20 px-6">
      <div class="grid grid-cols-2 gap-16 max-w-3xl mx-auto text-center">
        <div>
          <img src={monitor} alt="" class="mx-auto mb-4 w-14"/>
          <h3 class="font-bold mb-2">Access your files, anywhere</h3>
          <p class="text-gray-400 text-sm">
            Use a smartphone, tablet, or computer to access your account from
            anywhere.
          </p>
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#65e2d9"
            class="mx-auto mb-4 w-14"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
            />
          </svg>

          <h3 class="font-bold mb-2">Security you can trust</h3>
          <p class="text-gray-400 text-sm">
            2-factor authentication and user-controlled encryption to help
            secure your files.
          </p>
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#65e2d9"
            class="mx-auto mb-4 w-14"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
            />
          </svg>
          <h3 class="font-bold mb-2">Real-time collaboration</h3>
          <p class="text-gray-400 text-sm">
            Securely share files and folders with friends, family, and
            colleagues. No email attachments required.
          </p>
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#65e2d9"
            class="mx-auto mb-4 w-14"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"
            />
          </svg>
          <h3 class="font-bold mb-2">Store any type of file</h3>
          <p class="text-gray-400 text-sm">
            Photos, documents, anything - Fylo has you covered for all file
            types.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-[#181f2a] py-20 px-10">
      <div class="flex gap-16 items-center max-w-5xl mx-auto">
        <div
          class="bg-gray-600 rounded w-120 h-85 shrink-0 flex items-center justify-center text-gray-400 text-sm"
        >
          <img src={productivity} alt="" class="h-85" />
        </div>

        <div>
          <h2 class="text-3xl font-bold mb-4">
            Stay productive, <br/> wherever you are
          </h2>
          <p class="text-gray-400 mb-4">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p class="text-gray-400 mb-6">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <a href="#" class="text-[#65e2d9] border-b border-[#65e2d9] pb-1 hover:text-[#339ecc] hover:border-[#339ecc] transition-colors duration-300 cursor-pointer"
            >See how Fylo works →</a
          >
        </div>
      </div>
    </section>

    <section class="bg-[#181f2a] py-16 px-10">
      <img src={quote} alt="" class="-mb-4 ml-17"/>
      <div class="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div class="bg-[#202a3c] rounded-lg p-6">
          <p class="text-gray-300 text-sm mb-6">
            "Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine."
          </p>
          <div class="flex items-center gap-3">
            <img
              src={person1}
              alt="Satish Patel"
              class="w-10 h-10 rounded-full"
            />
            <div>
              <p class="font-bold text-xs">Satish Patel</p>
              <p class="text-gray-500 text-xs">Founder &amp; CEO, Huddle</p>
            </div>
          </div>
        </div>

        <div class="bg-[#202a3c] rounded-lg p-6">
          <p class="text-gray-300 text-sm mb-6">
            "Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine."
          </p>
          <div class="flex items-center gap-3">
            <img
              src={person2}
              alt="Bruce McKenzie"
              class="w-10 h-10 rounded-full"
            />
            <div>
              <p class="font-bold text-xs">Bruce McKenzie</p>
              <p class="text-gray-500 text-xs">Founder &amp; CEO, Huddle</p>
            </div>
          </div>
        </div>

        <div class="bg-[#202a3c] rounded-lg p-6">
          <p class="text-gray-300 text-sm mb-6">
            "Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine."
          </p>
          <div class="flex items-center gap-3">
            <img
              src={person3}
              alt="Iva Boyd"
              class="w-10 h-10 rounded-full"
            />
            <div>
              <p class="font-bold text-xs">Iva Boyd</p>
              <p class="text-gray-500 text-xs">Founder &amp; CEO, Huddle</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 px-6 relative z-10 bg-[#181f2a]">
      <div class="bg-[#1b2330] rounded-lg max-w-2xl mx-auto text-center p-12 -mb-50 relative z-20">
        <h2 class="text-2xl font-bold mb-4">Get early access today</h2>
        <p class="text-gray-400 text-sm mb-8">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>

        <div class="flex gap-4">
          <input
            type="email"
            placeholder="Enter your email address"
            class="flex-1 rounded-full px-6 py-3 text-sm text-black focus:ring-1 focus:ring-[#65e2d9] focus:ring-offset-1 focus:ring-offset-[#1b2330] bg-white border-none focus:outline-none"
          />
          <button
            class="bg-gradient-to-r from-[#65e2d9] to-[#339ecc] text-white px-6 py-3 rounded-full font-bold text-sm whitespace-nowrap hover:from-[#339ecc] hover:to-[#65e2d9] transition-colors duration-300 cursor-pointer"
          >
            Get Started For Free
          </button>
        </div>
      </div>
    </section>
    </>
  )
}

export default Content
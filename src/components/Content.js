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
      {/* HERO */}
      <section className="text-center py-12 md:py-16 px-4 md:px-6 max-w-2xl mx-auto">
        <div className="bg-gray-700 rounded-xl w-full max-w-md mx-auto mb-8 flex items-center justify-center">
          <img src={hero} alt="" className="w-full h-auto rounded-xl" />
        </div>

        <h1 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
          All your files in one secure location,{" "}
          <br className="hidden md:block" />
          accessible anywhere.
        </h1>

        <p className="text-gray-400 mb-6 md:mb-8 text-sm md:text-base">
          Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.
        </p>

        <button className="bg-gradient-to-r from-[#65e2d9] to-[#339ecc] text-white px-10 md:px-14 py-3 rounded-full font-bold text-sm md:text-base font-bold hover:from-[#339ecc] hover:to-[#65e2d9] transition-colors duration-300 cursor-pointer">
          Get Started
        </button>
      </section>

      {/* FEATURES GRID */}
      <section className="bg-[#1b2330] py-16 md:py-20 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-3xl mx-auto text-center">
          <div>
            <img src={monitor} alt="" className="mx-auto mb-4 w-12 md:w-14" />
            <h3 className="font-bold mb-2">Access your files, anywhere</h3>
            <p className="text-gray-400 text-sm">
              Use a smartphone, tablet, or computer to access your account from
              anywhere.
            </p>
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#65e2d9"
              className="mx-auto mb-4 w-12 md:w-14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
              />
            </svg>

            <h3 className="font-bold mb-2">Security you can trust</h3>
            <p className="text-gray-400 text-sm">
              2-factor authentication and user-controlled encryption to help
              secure your files.
            </p>
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#65e2d9"
              className="mx-auto mb-4 w-12 md:w-14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
              />
            </svg>

            <h3 className="font-bold mb-2">Real-time collaboration</h3>
            <p className="text-gray-400 text-sm">
              Securely share files and folders with friends, family, and
              colleagues.
            </p>
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#65e2d9"
              className="mx-auto mb-4 w-12 md:w-14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"
              />
            </svg>

            <h3 className="font-bold mb-2">Store any type of file</h3>
            <p className="text-gray-400 text-sm">
              Photos, documents, anything - Fylo has you covered for all file
              types.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTIVITY */}
      <section className="bg-[#181f2a] py-16 md:py-20 px-7 md:px-10">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center max-w-5xl mx-auto">
          <div className="w-full md:w-1/2">
            <img src={productivity} alt="" className="w-full h-auto md:h-85 rounded" />
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Stay productive, <br className="hidden md:block" /> wherever you
              are
            </h2>

            <p className="text-gray-400 mb-4 text-sm md:text-base">
              Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.
            </p>

            <p className="text-gray-400 mb-6 text-sm md:text-base">
              Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
            </p>

            <a
              href="/"
              className="text-sm md:text-lg text-[#65e2d9] border-b border-[#65e2d9] pb-1 hover:text-[#339ecc] hover:border-[#339ecc] transition-colors duration-300 cursor-pointer"
            >
              See how Fylo works →
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#181f2a] py-16 px-7 md:px-10">
        <img src={quote} alt="" className="-mb-4 ml-4 md:ml-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-[#202a3c] rounded-lg p-6">
            <p className="text-gray-300 text-sm mb-6">
              "Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine."
            </p>
            <div className="flex items-center gap-3">
              <img
                src={person1}
                alt="Satish Patel"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-bold text-xs">Satish Patel</p>
                <p className="text-gray-500 text-xs">
                  Founder &amp; CEO, Huddle
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#202a3c] rounded-lg p-6">
            <p className="text-gray-300 text-sm mb-6">
              "Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine."
            </p>
            <div className="flex items-center gap-3">
              <img
                src={person2}
                alt="Bruce McKenzie"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-bold text-xs">Bruce McKenzie</p>
                <p className="text-gray-500 text-xs">
                  Founder &amp; CEO, Huddle
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#202a3c] rounded-lg p-6">
            <p className="text-gray-300 text-sm mb-6">
              "Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine."
            </p>
            <div className="flex items-center gap-3">
              <img
                src={person3}
                alt="Iva Boyd"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-bold text-xs">Iva Boyd</p>
                <p className="text-gray-500 text-xs">
                  Founder &amp; CEO, Huddle
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-7 pb-13 px-7 relative z-10 bg-[#181f2a]">
        <div className="bg-[#1b2330] rounded-lg max-w-2xl mx-auto text-center p-6 md:p-12 -mb-45 relative z-20">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            Get early access today
          </h2>

          <p className="text-gray-400 text-sm mb-6 md:mb-8">
            It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 rounded-full px-6 py-3 text-sm text-black focus:ring-1 focus:ring-[#65e2d9] focus:ring-offset-1 focus:ring-offset-[#1b2330] bg-white border-none focus:outline-none"
            />

            <button className="w-full md:w-auto bg-gradient-to-r from-[#65e2d9] to-[#339ecc] text-white px-6 py-3 rounded-full font-bold text-sm whitespace-nowrap hover:from-[#339ecc] hover:to-[#65e2d9] transition-colors duration-300 cursor-pointer">
              Get Started For Free
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Content
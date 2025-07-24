import React from 'react';
import Maskg from '../assets/Maskg.png';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { GiNestedEclipses } from 'react-icons/gi';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='w-full h-full mt-25 bg-zinc-50 font-sans'>
      {/* Top Section: Newsletter/Subscription */}
      <div className='bg-[#7C4EE4] flex flex-col gap-4 md:gap-8 p-8 md:p-12 lg:p-20 items-center relative overflow-hidden text-white'>
        {/* Mask images - positioned absolutely and adjusted for responsiveness */}
        <img
          className='absolute top-0 left-0 w-40 md:w-64 lg:w-[35rem] opacity-30 sm:opacity-50 lg:opacity-100'
          src={Maskg}
          alt="decoration mask"
        />
        <img
          className='absolute bottom-0 right-0 w-40 md:w-64 lg:w-[35rem] rotate-180 opacity-30 sm:opacity-50 lg:opacity-100'
          src={Maskg}
          alt="decoration mask"
        />

        <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-center z-10'>
          Get our stories delivered From <br className="hidden sm:block" /> us to your inbox weekly.
        </h1>
        <form className="flex flex-col sm:flex-row gap-4 sm:gap-3 items-center w-full max-w-lg z-10">
          <input
            className='border p-3 w-full sm:w-65 bg-white rounded-lg text-start text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#5E2DB8]'
            type='email'
            placeholder='Your Email'
          />
          <button className='border-2 border-white text-white p-3 w-full sm:w-30 rounded-lg hover:bg-white hover:text-[#7C4EE4] transition-colors'>
            Get Started
          </button>
        </form>
        <p className='text-sm md:text-base lg:text-lg text-zinc-300 text-center z-10'>
          Get a response tomorrow if you submit by 9pm today. If we received after <br className="hidden md:block" /> 9pm will get a reponse the following day.
        </p>
      </div>

      {/* Bottom Section: Brand, Navigation, Socials, Copyright */}
      <div className='py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center'>
        <Link to={"/"} className='text-[1.6rem] font-bold text-gray-800 flex items-center gap-2'>
      <GiNestedEclipses className='text-[#7C4EE4]'/> TechNest</Link>
        <ul className='flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 my-2 font-semibold text-zinc-500 cursor-pointer'>
          <li className='hover:text-[#7C4EE4] transition-colors'><a href="/">Home</a></li>
          <li className='hover:text-[#7C4EE4] transition-colors'><a href="/blogs">Blog</a></li>
          <li className='hover:text-[#7C4EE4] transition-colors'><a href="/about">About</a></li>
          <li className='hover:text-[#7C4EE4] transition-colors'><a href="/contact">Contact Us</a></li>
        </ul>
        <ul className='flex gap-6 sm:gap-8 my-4 cursor-pointer'>
          <FaFacebook className='text-xl md:text-2xl hover:text-[#7C4EE4] transition-colors' />
          <FaInstagram className='text-xl md:text-2xl hover:text-[#7C4EE4] transition-colors' />
          <FaTwitter className='text-xl md:text-2xl hover:text-[#7C4EE4] transition-colors' />
          <FaLinkedin className='text-xl md:text-2xl hover:text-[#7C4EE4] transition-colors' />
        </ul>
        <hr className='bg-gray-300 h-px w-full max-w-lg my-4 border-0' /> {/* Adjusted hr styling */}
        <div className="text-gray-600 text-sm md:text-base text-center">
          {new Date().getFullYear()} <span className="text-[#7C4EE4] font-semibold">TechNest</span>. All rights reserved,
          Made with ❤️ by <span className="text-blue-800 underline font-medium"><a href="https://github.com/Hrushikeshj26" target="_blank" rel="noopener noreferrer">Hrushikeshj26</a></span>
        </div>
      </div>
    </div>
  );
}

export default Footer;

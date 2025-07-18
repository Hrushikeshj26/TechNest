import React from 'react'
import Maskg from '../assets/Maskg.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <div className='w-full h-full mt-25 bg-zinc-50'>
        <div className='bg-[#7C4EE4] flex gap-8 flex-col p-20 items-center relative'>
        <img 
            className='absolute top-0 left-0 w-[35rem]' 
            src={Maskg} 
            alt="decoration mask" 
        />
        <img 
            className='absolute bottom-0 right-0 w-[35rem] rotate-180' 
            src={Maskg} 
            alt="decoration mask" 
        />

            <h1 className='text-4xl font-semibold text-white text-center'>Get our stories delivered From <br /> us to your inbox weekly.</h1>
            <form action="">
                <input 
                className='border p-3 w-65 bg-white rounded-lg text-start mr-3'
                type='email'
                placeholder='Your Email'
                />
                <button className='border-2 text-white p-3 w-30 rounded-lg'>Get Started</button>
            </form>
            <p className='text-lg text-zinc-300 text-center'>Get a response tomorrow if you submit by 9pm today. If we received after <br /> 9pm will get a reponse the following day.</p>
        </div>
        <div className='py-8 flex flex-col items-center justify-center'>
            <h1 className='text-3xl font-bold mb-4'>TechNest</h1>
            <ul className='flex gap-8 my-2 font-semibold text-zinc-500 cursor-pointer'>
                <li className='hover:text-[#7C4EE4]'>Home</li>
                <li className='hover:text-[#7C4EE4]'>Blog</li>
                <li className='hover:text-[#7C4EE4]'>About</li>
                <li className='hover:text-[#7C4EE4]'>Contact Us</li>
            </ul>
            <ul className='flex gap-8 my-4 cursor-pointer'>
                <FaFacebook className='text-2xl hover:text-[#7C4EE4]'/>
                <FaInstagram className='text-2xl hover:text-[#7C4EE4]'/>
                <FaTwitter className='text-2xl hover:text-[#7C4EE4]'/>
                <FaLinkedin className='text-2xl hover:text-[#7C4EE4]'/>
            </ul>
            <hr className='bg-black w-2/3 my-4' />          
            <div className="text-gray-600 text-lg">
                {new Date().getFullYear()} <span className="text-[#7C4EE4] font-semibold">TechNest</span>. All rights reserved, 
                Made with ❤️ by <span className="text-blue-800 underline font-medium"><a href="https://github.com/Hrushikeshj26">Hrushikeshj26</a></span>
             </div>
        </div>
    </div>
  )
}

export default Footer
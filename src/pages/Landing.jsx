import React from 'react'
import HeroImg from '../assets/Hero.png'
import Maskg from '../assets/Maskg.png'
import HeroImg2 from '../assets/Hero2.png'
import RecentPost from '../components/RecentPost'
import PopularPost from '../components/PopularPost'
import HeroSlider from '../components/HeroSlider'

function Landing() {
  return (
    <div className='w-full h-full mt-10'>
        <HeroSlider/>

        <div className='w-full flex items-center justify-center my-20 relative'>
            <img 
            className='w-full max-h-[600px] mx-25 object-cover rounded-3xl shadow-2xl'
            src={HeroImg2} 
            alt="hero img" />

            <div className='flex gap-4 flex-col bg-zinc-50 shadow-2xl w-[900px] p-8 rounded-xl absolute right-25 top-80'>
                <p className='font-semibold text-sm'>DEVLOPMENT <span className='ml-12 text-gray-800'>18-July-2025</span></p>
                <h2 className='text-2xl font-bold'>How to make a Game look more attractive with <br /> New VR & AI Technology</h2>
                <p>Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.</p>
                <button className='border-2 border-[#7C4EE4] w-38 py-3 text-black rounded-lg mt-15 hover:bg-[#7C4EE4] hover:text-white'>
                    Read More
                </button>
            </div>
        </div>
            <RecentPost/>
            <PopularPost/>
    </div>
  )
}

export default Landing
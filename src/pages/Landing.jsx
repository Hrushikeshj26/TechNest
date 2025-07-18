import React from 'react'
import HeroImg from '../assets/Hero.png'
import Maskg from '../assets/Maskg.png'
import HeroImg2 from '../assets/Hero2.png'
import RecentPost from '../components/RecentPost'
import PopularPost from '../components/PopularPost'

function Landing() {
  return (
    <div className='w-full h-full'>
        <div className='bg-[#7C4EE4] flex flex-col lg:flex-row p-8 md:px-25 w-full h-screen justify-between items-center relative overflow-hidden'>
            {/* Mask images - positioned absolutely */}
            <img 
                className='absolute top-0 left-0 w-[35rem]' 
                src={Maskg} 
                alt="decoration mask" 
            />
            <img 
                className='absolute bottom-0 right-0  w-[35rem] rotate-180' 
                src={Maskg} 
                alt="decoration mask" 
            />

            {/* Content section */}
            <div className='flex w-[580px] h[474px] flex-col gap-6 md:gap-12 text-white my-auto lg:mr-10 xl:mr-20 z-10'>
                <p className='text-lg md:text-xl font-semibold'>Featured Post</p>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold'>
                    How AI will <br /> Change the Future
                </h1>
                <p className='text-base md:text-lg font-light'>
                    The future of AI will see home robots having enhanced intelligence, increased capabilities, and becoming more personal and possibly cute. For example, home robots will overcome navigation, direction
                </p>
                <button className='bg-white w-38 py-3 text-black rounded-lg mt-4 md:mt-0 hover:bg-[#ede6fc]'>
                    Read More
                </button>
            </div>

            {/* Image section */}
            <div className='w-fit my-auto z-10'>
                <img 
                    src={HeroImg} 
                    className='max-w-[608px] max-h-[576px] mx-auto lg:mx-0'
                    alt="AI future illustration" 
                />
            </div>
        </div>

        <div className='w-full flex items-center justify-center my-20 relative'>
            <img 
            className='w-full max-h-[600px] mx-25 object-cover rounded-3xl shadow-2xl'
            src={HeroImg2} 
            alt="hero img" />

            <div className='flex gap-4 flex-col bg-zinc-50 shadow-2xl w-[900px] p-8 rounded-xl absolute right-25 top-80'>
                <p className='font-semibold text-sm'>DEVLOPMENT <span className='ml-12 text-gray-800'>18-July-2025</span></p>
                <h2 className='text-2xl font-bold'>How to make a Game look more attractive with <br /> New VR & AI Technology</h2>
                <p>Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.</p>
                <button className='border-2 w-38 py-3 text-black rounded-lg mt-15 hover:bg-[#7C4EE4] hover:text-white'>
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
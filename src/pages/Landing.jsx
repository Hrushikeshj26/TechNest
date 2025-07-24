import React from 'react';
import HeroSlider from '../components/HeroSlider';
import HeroImg2 from '../assets/Hero2.png'
import RecentPost from '../components/RecentPost';
import PopularPost from '../components/PopularPost';

function Landing() {
  return (
    <div className='w-full h-full font-sans'>
      <HeroSlider/>

      {/* Second Section: Featured Post with Image and Overlapping Text Box */}
      <div className='w-full flex flex-col items-center justify-center my-20 relative px-4 sm:px-6 lg:px-8'>
        <img
          className='w-full max-w-7xl h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-3xl shadow-2xl'
          src={HeroImg2}
          alt="hero img"
        />

        {/* Overlapping Text Box - made responsive */}
        <div className='flex gap-4 flex-col bg-zinc-50 shadow-2xl w-[90%] md:w-[70%] lg:w-[60%] p-6 md:p-8 rounded-xl absolute left-1/2 -translate-x-1/2 -bottom-20 md:-bottom-0 lg:-bottom-0 transform translate-y-1/2'>
          <p className='font-semibold text-sm text-[#7C4EE4]'>DEVELOPMENT <span className='ml-4 text-gray-800'>18-July-2025</span></p>
          <h2 className='text-xl md:text-2xl font-bold'>How to make a Game look more attractive with <br className="hidden sm:block"/> New VR & AI Technology</h2>
          <p className='text-gray-700 text-sm md:text-base line-clamp-3'>Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.</p>
          <button className='border-2 border-[#7C4EE4] w-fit px-8 py-3 text-black rounded-lg mt-4 hover:bg-[#7C4EE4] hover:text-white transition-colors'>
            Read More
          </button>
        </div>
      </div>
      <div className="h-[50px] md:h-[10px] lg:h-[100px]"></div>
      <RecentPost/>
      <PopularPost/>
    </div>
  );
}

export default Landing;

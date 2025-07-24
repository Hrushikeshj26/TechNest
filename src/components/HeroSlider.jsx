import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import HeroImg from '../assets/Hero.png'; // Assuming this path is correct in your project
import Maskg from '../assets/Maskg.png'; // Assuming this path is correct in your project

SwiperCore.use([Autoplay, Pagination]);

const HeroSlider = () => {
  const slides = [
    {
      title: "How AI will Change the Future",
      description: "The future of AI will see home robots having enhanced intelligence, increased capabilities, and becoming more personal and possibly cute. For example, home robots will overcome navigation, direction",
      img: HeroImg
    },
    {
      title: "The Evolution of Web Development",
      description: "Modern web development continues to evolve with new frameworks and technologies that enable faster, more responsive applications. Developers now have unprecedented tools at their disposal.",
      img: "https://blog.zegocloud.com/wp-content/uploads/2024/03/types-of-web-development-services.jpg"
    },
    {
      title: "Blockchain Transforming Industries",
      description: "Blockchain technology is revolutionizing sectors from finance to supply chain management. Its decentralized nature provides unprecedented security and transparency for digital transactions.",
      img: "https://plus.unsplash.com/premium_photo-1733342554594-102b8e2d0623?q=80&w=1731&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      pagination={{ clickable: true }}
      className='w-full h-screen bg-[#7C4EE4] font-sans' // Added font-sans for consistency
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className='flex flex-col lg:flex-row p-8 md:px-12 lg:px-20 h-full justify-center items-center relative overflow-hidden text-center lg:text-left'>
            {/* Mask decorations - made responsive */}
            <img className='absolute top-0 left-0 w-40 md:w-64 lg:w-[30rem] opacity-30 sm:opacity-50 lg:opacity-100' src={Maskg} alt='Decorative Mask' />
            <img className='absolute bottom-0 right-0 w-40 md:w-64 lg:w-[30rem] rotate-180 opacity-30 sm:opacity-50 lg:opacity-100' src={Maskg} alt='Decorative Mask' />

            {/* Content - made responsive */}
            <div className='flex flex-col gap-4 md:gap-6 text-white z-10 max-w-xl mx-auto lg:mx-0 lg:mr-10 xl:mr-20 md:mt-0 mt-15'>
              <p className='text-base md:text-lg font-semibold'>Featured Post</p>
              <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold leading-tight'>
                {slide.title}
              </h1>
              <p className='text-sm md:text-base font-light'>{slide.description}</p>
              <button className='bg-white w-fit px-6 py-3 text-black rounded-lg hover:bg-[#ede6fc] transition-colors mx-auto lg:mx-0'>
                Read More
              </button>
            </div>

            {/* Image - made responsive */}
            <div className='w-full max-w-sm md:max-w-md lg:max-w-lg z-10 mt-8 lg:mt-0'>
              <img
                src={slide.img}
                className='w-full h-70 md:h-90 object-cover rounded-2xl shadow-lg mx-auto' // Changed fixed size to responsive
                alt='Hero Visual'
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HeroSlider;

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import HeroImg from '../assets/Hero.png'
import Maskg from '../assets/Maskg.png'

SwiperCore.use([Autoplay, Pagination])

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
      className='w-full h-screen bg-[#7C4EE4]'
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className='flex flex-col lg:flex-row p-8 md:px-20 h-full justify-between items-center relative overflow-hidden'>
            {/* Mask decorations */}
            <img className='absolute top-0 left-0 w-[30rem]' src={Maskg} alt='' />
            <img className='absolute bottom-0 right-0 w-[30rem] rotate-180' src={Maskg} alt='' />

            {/* Content */}
            <div className='flex flex-col gap-6 md:gap-10 text-white z-10 max-w-xl'>
              <p className='text-lg md:text-xl font-semibold'>Featured Post</p>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
                {slide.title}
              </h1>
              <p className='text-base md:text-lg font-light'>{slide.description}</p>
              <button className='bg-white w-fit px-6 py-3 text-black rounded-lg hover:bg-[#ede6fc]'>
                Read More
              </button>
            </div>

            {/* Image */}
            <div className='w-fit z-10 mt-10 lg:mt-0'>
              <img
                src={slide.img}
                className='w-[500px] h-[500px] mx-auto lg:mx-0 rounded-2xl'
                alt='Hero Visual'
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default HeroSlider

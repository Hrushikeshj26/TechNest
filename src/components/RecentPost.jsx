import React from 'react'
import  HeroImg2 from '../assets/Hero2.png'
import { blogData } from '../assets/BlogData';

function RecentPost() {

  const featuredBlogs = blogData.slice(0,3); 

  return (
    <div className='w-full h-full mt-45 px-25'>
      <div className='flex w-full items-center justify-between py-12'>
        <h1 className='text-4xl font-semibold '>Our Recent Post</h1>
        <button className='bg-[#7C4EE4] text-white w-40 py-3 rounded-xl text-lg hover:bg-[#5E2DB8]'>View All</button>
      </div>
      <div className='flex items-center justify-between my-5'>
        <img
        className='shadow-2xl rounded-2xl'
        src={HeroImg2} alt="" />
         <div className='flex gap-4 flex-col w-[900px] p-8 right-25 top-80'>
                <p className='font-semibold text-sm'>DEVLOPMENT <span className='ml-12 text-gray-800'>18-July-2025</span></p>
                <h2 className='text-3xl font-bold'>How to make a Game look more attractive with New VR & AI Technology</h2>
                <p>Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.</p>
                <button className='border-2 w-38 py-3 text-black rounded-lg mt-15 hover:bg-[#7C4EE4] hover:text-white'>
                    Read More
                </button>
            </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {featuredBlogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img 
              src={blog.blogImg} 
              alt={blog.title}
              className="w-full h-80 object-cover"
            />
            
            <div className="p-6">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-[#7C4EE4] bg-[#F3F0FF] rounded-full mb-2">
                {blog.category}
              </span>
              
              <h3 className="text-xl font-bold mb-2 line-clamp-2">{blog.title}</h3>
              
              <p className="text-gray-600 mb-4 line-clamp-3">
                {blog.content}
              </p>
              
              <button className="text-[#7C4EE4] font-medium hover:text-[#5a3bb3] transition-colors">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentPost
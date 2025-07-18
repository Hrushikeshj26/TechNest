import React from 'react'
import {blogData} from '../assets/BlogData'

function PopularPost() {

  const popularPost = blogData.slice(0,6);

  return (
    <div className='w-full h-full px-25 mt-12'>
      <div className='flex w-full items-center justify-between py-12'>
        <h1 className='text-4xl font-semibold '>Our Recent Post</h1>
        <button className='bg-[#7C4EE4] text-white w-40 py-3 rounded-xl text-lg hover:bg-[#5E2DB8]'>View All</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {popularPost.map((blog) => (
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

export default PopularPost
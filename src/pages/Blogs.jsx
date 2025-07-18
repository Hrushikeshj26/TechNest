import React from 'react'
import {blogData} from '../assets/BlogData'

function Blogs() {

    const featuredBlogs = blogData; 

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className='w-full text-center text-xl mb-8'>OUR BLOGS</p>
      <h2 className="text-4xl font-bold mb-8 w-full text-center">Find our all blogs from here</h2>
      <p className='w-full text-lg text-gray-700 text-center mb-8'>our blogs are written from very research research and well known writers writers so that  we can provide <br /> you the best blogs and articles articles for you to read them all along</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredBlogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img 
              src={blog.blogImg} 
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            
            <div className="p-6">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-[#7C4EE4] bg-[#F3F0FF] rounded-full mb-2">
                {blog.category}
              </span>
              
              <h3 className="text-xl font-bold mb-2 line-clamp-2">{blog.title}</h3>
              
              <p className="text-gray-600 mb-4 line-clamp-3">
                {blog.content.split('\n')[0]} {/* Show first paragraph */}
              </p>
              
              <button className="text-[#7C4EE4] font-medium hover:text-[#5a3bb3] transition-colors">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs
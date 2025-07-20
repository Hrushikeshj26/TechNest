import React from 'react';
import HeroImg2 from '../assets/Hero2.png';
import { blogData } from '../assets/BlogData';
import { Link } from 'react-router-dom';

function RecentPost() {
  const featuredBlogs = blogData.slice(0, 3); 

  return (
    <div className='w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mt-30 font-sans'>
      <div className='flex flex-col md:flex-row w-full items-center justify-between py-8 md:py-8'>
        <h1 className='text-3xl md:text-4xl font-semibold md:mb-0'>Our Recent Blogs</h1>
        <Link to="/blogs" 
              className='bg-[#7C4EE4] text-white w-40 py-3 rounded-xl text-lg hover:bg-[#5E2DB8] text-center transition-colors'>
          View All
        </Link>
      </div>
      
      <div className='flex flex-col lg:flex-row items-center gap-8 my-2'>
        <div className='w-full lg:w-1/2'>
          <img
            className='w-full h-auto rounded-2xl shadow-xl'
            src={HeroImg2} 
            alt="Featured blog" 
          />
        </div>
        
        <div className='w-full lg:w-1/2 flex flex-col gap-4 p-4 md:p-8'>
          <div className='flex items-center gap-4'>
            <span className='font-semibold text-sm text-[#7C4EE4]'>DEVELOPMENT</span>
            <span className='text-gray-500'>18-July-2025</span>
          </div>
          
          <h2 className='text-2xl md:text-3xl font-bold'>
            How to make a Game look more attractive with New VR & AI Technology
          </h2>
          
          <p className='text-gray-700'>
            Google has been investing in AI for many years and bringing its benefits to individuals, 
            businesses and communities. Whether it's publishing state-of-the-art research, building 
            helpful products or developing tools and resources that enable others, we're committed 
            to making AI accessible to everyone.
          </p>
          
          <Link to="/blog/featured" 
                className='border-2 border-[#7C4EE4] w-40 py-3 text-black rounded-lg mt-4 hover:bg-[#7C4EE4] hover:text-white transition-colors text-center'>
            Read More
          </Link>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {featuredBlogs.map((blog) => (
          <Link to={`/blog/${blog.id}`} key={blog.id} className="block">
            {/* Added 'group' class to the card container and hover styles */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full p-0 hover:bg-[#7C4EE4] group">
              <img 
                src={blog.blogImg} 
                alt={blog.title}
                className="w-full h-48 md:h-56 object-cover"
              />
              
              <div className="p-6">
                {/* Category text color changes on group hover */}
                <span className="inline-block px-3 py-1 text-sm font-semibold text-[#7C4EE4] bg-[#F3F0FF] rounded-full mb-2 transition-colors">
                  {blog.category}
                </span>
                
                {/* Title text color changes on group hover */}
                <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-white transition-colors">{blog.title}</h3>
                
                {/* Content text color changes on group hover */}
                <p className="text-gray-600 mb-4 line-clamp-3 group-hover:text-white transition-colors">
                  {blog.content.split('\n')[0]}
                </p>
                
                {/* Read More text color changes on group hover */}
                <span className="text-[#7C4EE4] font-medium group-hover:text-white transition-colors">
                  Read More →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RecentPost;

import React, { useState, useEffect } from 'react';
import { blogData } from '../assets/BlogData';
import { Link } from 'react-router-dom';

function PopularPost() {
  const [popularPosts, setPopularPosts] = useState([]);

  useEffect(() => {
    const getRandomBlogs = () => {
      const shuffled = [...blogData];
    
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      
      return shuffled.slice(0, 6);
    };

    setPopularPosts(getRandomBlogs());
  }, []);

  return (
    <div className='w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mt-12 font-sans'>
      <div className='flex flex-col md:flex-row w-full items-center justify-between py-2 md:pt-8'>
        <h1 className='text-3xl md:text-4xl font-semibold md:mb-0'>Popular Blogs</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {popularPosts.map((blog) => (
          <Link to={`/blog/${blog.id}`} key={blog.id} className="block">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full p-0 hover:bg-[#7C4EE4] group">
              <img 
                src={blog.blogImg} 
                alt={blog.title}
                className="w-full h-48 md:h-56 object-cover"
              />
              
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-[#7C4EE4] bg-[#F3F0FF] rounded-full mb-2 transition-colors">
                  {blog.category}
                </span>
                <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-white transition-colors">{blog.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3 group-hover:text-white transition-colors">
                  {blog.content.split('\n')[0]}
                </p>
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

export default PopularPost;

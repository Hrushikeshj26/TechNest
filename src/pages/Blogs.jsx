import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { blogData } from '../assets/BlogData';

function Blogs() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleBlogClick = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-sans">
      <p className='w-full text-center text-xl mb-8'>OUR BLOGS</p>
      <h2 className="text-4xl font-bold mb-8 w-full text-center">Find our all blogs from here</h2>
      <p className='w-full text-lg text-gray-700 text-center mb-8'>
        our blogs are written from very research research and well known writers writers so that we can provide <br /> 
        you the best blogs and articles articles for you to read them all along
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogData.map((blog) => (
          <div 
            key={blog.id} 
            onClick={() => handleBlogClick(blog.id)}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:bg-[#7C4EE4] group"
          >
            <img 
              src={blog.blogImg} 
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            
            <div className="p-6">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-[#7C4EE4] bg-[#F3F0FF] rounded-full mb-2 transition-colors">
                {blog.category}
              </span>
              
              <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-white transition-colors">{blog.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-3 group-hover:text-white transition-colors">
                {blog.content.split('\n')[0]}
              </p>
              <button 
                className="text-[#7C4EE4] font-medium hover:text-[#5a3bb3] transition-colors group-hover:text-white"
                onClick={(e) => {
                  e.stopPropagation(); // Prevents the card's onClick from firing again
                  handleBlogClick(blog.id);
                }}
              >
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;

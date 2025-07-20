import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogData } from '../assets/BlogData';

function SingleBlog() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogData.find(blog => blog.id === parseInt(id));

  if (!blog) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold">Blog not found</h2>
        <button 
          onClick={() => navigate('/blogs')}
          className="mt-4 px-4 py-2 bg-[#7C4EE4] text-white rounded-lg"
        >
          Back to Blogs
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-20 px-4 py-12 relative top-[-1px]">
      <button 
        onClick={() => navigate('/blogs')}
        className="flex items-center text-[#7C4EE4] hover:text-[#5a3bb3] mb-8 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Blogs
      </button>

      <img 
        src={blog.blogImg} 
        alt={blog.title} 
        className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
      />

      <div className="mb-6">
        <span className="inline-block px-3 py-1 text-sm font-semibold text-[#7C4EE4] bg-[#F3F0FF] rounded-full">
          {blog.category}
        </span>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-6">{blog.title}</h1>

      <div className="prose max-w-none">
        {blog.content.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4 text-gray-700">{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

export default SingleBlog
import React, { useEffect } from 'react'

function About() {

 useEffect(()=>{
  window.scrollTo({to:0})
 },[])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20">
      <div className='flex flex-col gap-8 items-center'>

        <p className='font-semibold text-lg text-gray-600'>About Us</p>

        <h1 className='text-4xl font-bold text-center'>Creative Blog Writting and publishing site</h1>

        <p className='text-lg font-semibold text-gray-700 text-center'>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>

        <img
        className='w-full h-64 md:h-96 object-cover rounded-lg mb-8' 
        src="https://images.unsplash.com/photo-1681949287382-052ea3954a51?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="about-img" />

      </div>

      <div className='flex flex-col gap-8 items-start justify-center'>

      <p className='font-semibold text-xl text-gray-800'>HOW WE WORK</p>

      <h2 className='text-4xl font-bold'>I will show you how our team works</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
        
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-full p-4 hover:bg-[#7C4EE4] group max-w-sm">
        <h1 className='text-gray-400 text-8xl font-semibold my-4 group-hover:text-white transition-colors'>01</h1>
        <h3 className="text-[#7C4EE4] text-xl font-bold mb-2 group-hover:text-white transition-colors">Content Creation</h3>
        <p className="text-gray-600 mb-4 group-hover:text-white transition-colors">
          Dive into the art of crafting compelling stories and informative articles. From ideation to the final draft, explore techniques for engaging your readers and expressing your unique voice.
        </p>
        <button className="text-[#7C4EE4] font-medium transition-colors group-hover:text-white">
          Read More →
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-full p-4 hover:bg-[#7C4EE4] group max-w-sm">
        <h1 className='text-gray-400 text-8xl font-semibold my-4 group-hover:text-white transition-colors'>02</h1>
        <h3 className="text-[#7C4EE4] text-xl font-bold mb-2 group-hover:text-white transition-colors">Audience Engagement</h3>
        <p className="text-gray-600 mb-4 group-hover:text-white transition-colors">
          Discover strategies to connect with your readers, build a loyal community, and foster meaningful discussions. Learn how to respond to comments and grow your online presence.
        </p>
        <button className="text-[#7C4EE4] font-medium transition-colors group-hover:text-white">
          Connect →
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-full p-4 hover:bg-[#7C4EE4] group max-w-sm">
        <h1 className='text-gray-400 text-8xl font-semibold my-4 group-hover:text-white transition-colors'>03</h1>
        <h3 className="text-[#7C4EE4] text-xl font-bold mb-2 group-hover:text-white transition-colors">Growth & Analytics</h3>
        <p className="text-gray-600 mb-4 group-hover:text-white transition-colors">
          Understand how to expand your blog's reach and analyze its performance. Explore tools and tips for tracking your progress and optimizing your content for wider readership.
        </p>
        <button className="text-[#7C4EE4] font-medium transition-colors group-hover:text-white">
          Explore Insights →
        </button>
      </div>
      </div>

      

      </div>
    </div>
  )
}

export default About
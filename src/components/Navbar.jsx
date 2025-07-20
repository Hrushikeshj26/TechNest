import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import { blogData } from '../assets/BlogData'; // Assuming blogData is available here

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Effect to filter blogData based on searchQuery
  useEffect(() => {
    if (searchQuery.length > 1) { // Only search if query has at least 2 characters
      const filtered = blogData.filter(blog =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]); // Clear results if query is too short
    }
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchQuery(''); // Clear search query when closing
    setSearchResults([]); // Clear search results when closing
  };

  return (
    <div className='bg-zinc-50 flex w-full h-20 px-4 sm:px-8 md:px-12 lg:px-25 items-center justify-between fixed top-0 left-0 z-50 shadow-md font-sans'>
      <Link to={"/"} className='text-[1.6rem] font-bold'>TechNest</Link>
      <div className='flex w-full justify-end items-center gap-4 relative'> {/* Added relative for search dropdown positioning */}
        <ul className='flex mr-6 gap-6 sm:gap-8 md:gap-12 font-semibold text-lg'>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border-b-3 border-[#7C4EE4]"
                : "hover:text-[#5E2DB8]"
            }
            to={"/blogs"}
          >Blogs</NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border-b-3 border-[#7C4EE4]"
                : "hover:text-[#5E2DB8]"
            }
            to={"/about"}
          >About</NavLink>
        </ul>

        {/* Search Input and Icon */}
        <div className="relative flex items-center">
          {isSearchOpen && (
            <input
              type="text"
              placeholder="Search blogs..."
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C4EE4] w-48 sm:w-64 mr-2 transition-all duration-300"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          )}
          <FiSearch
            className='text-2xl cursor-pointer hover:text-[#5E2DB8] transition-colors'
            onClick={toggleSearch}
          />

          {/* Search Results Dropdown */}
          {isSearchOpen && searchResults.length > 0 && (
            <div className="absolute top-full right-0 mt-2 w-full sm:w-80 bg-white shadow-lg rounded-md border border-gray-200 max-h-60 overflow-y-auto z-20">
              {searchResults.map(blog => (
                <Link
                  to={`/blog/${blog.id}`}
                  key={blog.id}
                  className="block p-3 hover:bg-gray-100 transition-colors border-b border-gray-100 last:border-b-0"
                  onClick={() => {
                    setIsSearchOpen(false); // Close search on click
                    setSearchQuery(''); // Clear query
                    setSearchResults([]); // Clear results
                  }}
                >
                  <h4 className="font-semibold text-gray-800 line-clamp-1">{blog.title}</h4>
                  <p className="text-sm text-gray-500 line-clamp-1">{blog.category}</p>
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link to={"/contact"} className='bg-[#7C4EE4] text-white px-6 sm:px-10 py-2 rounded-xl text-lg hover:bg-[#5E2DB8] transition-colors ml-4'>Contact Us</Link>
      </div>
    </div>
  );
}

export default Navbar;

import React, { useState, useEffect } from 'react';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi'; // Import FiMenu and FiX for mobile menu icons
import { Link, NavLink } from 'react-router-dom';
import { blogData } from '../assets/BlogData'; // Assuming blogData is available here
import { FaBlog } from 'react-icons/fa';
import { GiNestedEclipses } from 'react-icons/gi';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

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

  // Modified to clear search query and results when the icon is clicked
  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className='bg-zinc-50 flex w-full h-20 px-4 sm:px-8 md:px-12 lg:px-25 items-center justify-between fixed top-0 left-0 z-50 shadow-md font-sans'>
      <Link to={"/"} className='text-[1.6rem] font-bold text-gray-800 flex items-center gap-2'>
      <GiNestedEclipses className='text-[#7C4EE4]'/> TechNest</Link>

      {/* Desktop Navigation and Search */}
      <div className='hidden md:flex w-full justify-end items-center gap-4 relative'>
        <ul className='flex mr-6 gap-6 sm:gap-8 md:gap-12 font-semibold text-lg'>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border-b-3 border-[#7C4EE4] text-[#7C4EE4]"
                : "text-gray-800 hover:text-[#5E2DB8]"
            }
            to={"/blogs"}
          >Blogs</NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border-b-3 border-[#7C4EE4] text-[#7C4EE4]"
                : "text-gray-800 hover:text-[#5E2DB8]"
            }
            to={"/about"}
          >About</NavLink>
        </ul>

        {/* Search Input and Icon for Desktop - Always visible */}
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search blogs..."
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C4EE4] w-48 sm:w-64 mr-2 transition-all duration-300"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          {/* FiSearch now acts as a clear button or just a visual cue */}
          <FiSearch
            className='text-2xl cursor-pointer text-gray-800 hover:text-[#5E2DB8] transition-colors'
            onClick={clearSearch} // Changed to clearSearch
          />

          {/* Search Results Dropdown for Desktop */}
          {searchQuery.length > 0 && searchResults.length > 0 && ( // Only show dropdown if there's a query and results
            <div className="absolute top-full right-0 mt-2 w-full sm:w-80 bg-white shadow-lg rounded-md border border-gray-200 max-h-60 overflow-y-auto z-20">
              {searchResults.map(blog => (
                <Link
                  to={`/blog/${blog.id}`}
                  key={blog.id}
                  className="block p-3 hover:bg-gray-100 transition-colors border-b border-gray-100 last:border-b-0"
                  onClick={() => {
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

      {/* Mobile Navigation (Logo, Search, Menu Toggle) */}
      <div className="md:hidden flex items-center justify-end w-full gap-4 relative">
        {/* Mobile Search Input and Icon - Always visible */}
        <div className="relative flex items-center flex-grow justify-end"> {/* Use flex-grow and justify-end to push it to the right */}
          <input
            type="text"
            placeholder="Search blogs..."
            className="py-2 px-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C4EE4] w-full sm:w-auto ml-2 transition-all duration-300 text-xs md:text-xl"
            value={searchQuery}
            onChange={handleSearchChange}
          /> 

          {/* Search Results Dropdown for Mobile */}
          {searchQuery.length > 0 && searchResults.length > 0 && ( // Only show dropdown if there's a query and results
            <div className="absolute top-full right-0 mt-2 w-full bg-white shadow-lg rounded-md border border-gray-200 max-h-60 overflow-y-auto z-20">
              {searchResults.map(blog => (
                <Link
                  to={`/blog/${blog.id}`}
                  key={blog.id}
                  className="block p-3 hover:bg-gray-100 transition-colors border-b border-gray-100 last:border-b-0"
                  onClick={() => {
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

        {/* Mobile Menu Toggle (Hamburger Icon) */}
        <FiMenu
          className='md:text-3xl text-4xl font-extrabold cursor-pointer text-gray-800 hover:text-[#5E2DB8] transition-colors'
          onClick={toggleMobileMenu}
        />
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMobileMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-85 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-[#7C4EE4]">Menu</h2>
          <FiX
            className='text-3xl cursor-pointer text-gray-800 hover:text-[#5E2DB8] transition-colors'
            onClick={toggleMobileMenu}
          />
        </div>
        <ul className='flex flex-col p-4 gap-4 font-semibold text-lg'>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#7C4EE4] border-b-2 border-[#7C4EE4] pb-1"
                : "text-gray-800 hover:text-[#5E2DB8]"
            }
            to={"/blogs"}
            onClick={closeMobileMenu}
          >Blogs</NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#7C4EE4] border-b-2 border-[#7C4EE4] pb-1"
                : "text-gray-800 hover:text-[#5E2DB8]"
            }
            to={"/about"}
            onClick={closeMobileMenu}
          >About</NavLink>
          <Link
            to={"/contact"}
            className='bg-[#7C4EE4] text-white px-6 py-2 rounded-xl text-lg hover:bg-[#5E2DB8] transition-colors text-center mt-2'
            onClick={closeMobileMenu}
          >Contact Us</Link>
        </ul>
        {/* Removed redundant mobile search from inside the menu */}
      </div>
    </div>
  );
}

export default Navbar;

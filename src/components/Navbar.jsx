import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-zinc-50 flex w-full h-20 px-25 items-center justify-between'>
        <Link to={"/"} className='text-[1.6rem] font-bold'>TechNest</Link>
        <div className='flex w-full justify-end items-center gap-4'>
            <ul className='flex gap-12 font-semibold text-lg'>
                <NavLink 
                 className={({ isActive }) =>
                            isActive
                                ? "border-b-3 border-[#7C4EE4]"
                                : "hover:text-[#5E2DB8]"
                        }
                to={"/blogs"}
                >Blog</NavLink>
                <NavLink 
                 className={({ isActive }) =>
                            isActive
                                ? "border-b-3 border-[#7C4EE4]"
                                : "hover:text-[#5E2DB8]"
                        }
                to={"/about"}
                >About</NavLink>
            </ul>
        <FiSearch className='text-2xl mx-8 cursor-pointer'/>
        <Link to={"/contact"} className='bg-[#7C4EE4] text-white px-10 py-2 rounded-xl text-lg hover:bg-[#5E2DB8]'>Contact Us</Link>
        </div>
    </div>
  )
}

export default Navbar
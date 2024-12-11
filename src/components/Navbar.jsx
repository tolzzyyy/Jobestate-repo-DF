import React, { useState } from 'react'
import logo from '../components/img/logo.png'
import {FaTimes, FaBars} from "react-icons/fa"
import {Link, NavLink} from "react-router-dom"

const Navbar = () => {
const [show, setShow] = useState(false)

const HandleShow  = () => {
setShow(!show)
}

  return (
    <nav className='flex px-[20px] fixed h-[80px] z-50  w-full md:flex md:justify-between md:px-[50px] md:py-[60px] xl:flex justify-between xl:py-7 xl:px-[135px] xl:h-[130px] items-center bg-white'>
        <div>
            <img src={logo} alt="logo" className='w-[120px] md:w-[150px] lg:w-[170px]'/> 
        </div>
        <div className='hidden md:hidden xl:flex gap-[60px] text-[15px]'>
            <NavLink
            to='/'
            className={({isActive}) =>
            isActive ? 'text-[#013A8A] font-semibold' : 'text-[#2b2b2b] font-normal'}
            
            >Home</NavLink>
            <NavLink
            to='/findjobs'
            className={({isActive}) =>
            isActive ? 'text-[#013A8A] font-semibold' : 'text-[#2b2b2b] font-normal'}
            
            >Find Jobs</NavLink>
            <NavLink
            to='/blog'
            className={({isActive}) =>
            isActive ? 'text-[#013A8A] font-semibold' : 'text-[#2b2b2b] font-normal'}
            
            >Blog</NavLink>
            <NavLink
            to='/Employersignup'
            className={({isActive}) =>
            isActive ? 'text-[#013A8A] font-semibold' : 'text-[#2b2b2b] font-normal'}
            
            >For Employers</NavLink>
        </div>
        {show ? <div className='lg:hidden flex flex-col absolute top-20 md:top-24 left-0 gap-[40px] py-7 md:py-10 px-7 md:px-14 bg-white w-full h-screen transition-all duration-500 font-medium text-[15px] md:text-[20px] text-[#2b2b2b] '>
            <NavLink
            to='/'
            className={({isActive}) =>
            isActive ? 'text-[#013A8A] font-semibold' : 'text-[#2b2b2b] font-normal'}
            
            >Home</NavLink>
            <NavLink
            to='/findjobs'
            className={({isActive}) =>
            isActive ? 'text-[#013A8A] font-semibold' : 'text-[#2b2b2b] font-normal'}
            
            >Find Jobs</NavLink>
            <NavLink
            to='/blog'
            className={({isActive}) =>
            isActive ? 'text-[#013A8A] font-semibold' : 'text-[#2b2b2b] font-normal'}
            
            >Blog</NavLink>
            <NavLink
            to='/Employersignup'
            className={({isActive}) =>
            isActive ? 'text-[#013A8A] font-semibold' : 'text-[#2b2b2b] font-normal'}
            
            >For Employers</NavLink>
            <NavLink
            to='/signin'
            className={({isActive}) =>
            isActive ? 'text-[#013A8A] font-semibold' : 'text-[#2b2b2b] font-normal'}
            
            >Login</NavLink>
            <NavLink
            to='/signup'
            className={({isActive}) =>
            isActive ? 'text-[#013A8A] font-semibold' : 'text-[#2b2b2b] font-normal'}
            
            >Sign Up</NavLink>
        </div> : ""}
        <div className="flex items-center relative gap-6 xl:hidden">
          <div onClick={HandleShow} className="flex items-center">
            {show ? <FaTimes size={26} className="z-50 left-0 md:left-[70px]" /> : <FaBars size={26} />}
          </div>
        </div>
        <div className='hidden md:hidden xl:flex gap-[40px] items-center font-semibold'>
            <Link to='/signin'>
                Login
            </Link>
            <Link to='/signup' className='xl: border-2 border-[#013A8A] transition-all duration-500 py-3 px-8 rounded-xl text-[#013A8A] font-semibold hover:text-white hover:border-2 hover:border-[#0149AD] hover:bg-[#0149AD] '>
                Register Now
            </Link>
        </div>
    </nav>
  )
}



export default Navbar
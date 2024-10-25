import React, { useState } from 'react'
import logo from '../components/img/logo.png'
import {FaTimes, FaBars} from "react-icons/fa"
// import {NavLink} from "react-router-dom"

const Navbar = () => {
const [show, setShow] = useState(false)

const HandleShow  = () => {
setShow(!show)
}

  return (
    <nav className='flex px-[20px] h-[80px] md:flex md:justify-between md:px-[50px] md:py-[60px] xl:flex justify-between xl:py-7 xl:px-[150px] xl:h-[130px] items-center bg-white'>
        <div>
            <img src={logo} alt="logo" className='w-[120px] md:w-[150px] lg:w-[170px]'/> 
        </div>
        <div className='hidden md:hidden xl:flex gap-[60px] font-medium text-[15px] text-[#2b2b2b]'>
            <div>Home</div>
            <div>Find Jobs</div>
            <div>Blog</div>
            <div>For Employers</div>
        </div>
        {show ?   <div className=' md:hidden flex flex-col absolute top-0 gap-[60px] font-medium text-[15px] text-[#2b2b2b]'>
            <div>Home</div>
            <div>Find Jobs</div>
            <div>Blog</div>
            <div>For Employers</div>
        </div> : ""}
        <div className="flex items-center relative gap-6 xl:hidden">
          <div onClick={HandleShow} className="flex items-center">
            {show ? <FaTimes size={26} className="z-50 left-0 md:left-[70px]" /> : <FaBars size={26} />}
          </div>
        </div>
        <div className='hidden md:hidden xl:flex gap-[40px] font-semibold'>
            <button>
                Login
            </button>
            <button className='xl: border-2 border-[#013A8A] transition-all duration-500 py-3 px-8 rounded-xl text-[#013A8A] font-semibold hover:text-white hover:border-2 hover:border-[#0149AD] hover:bg-[#0149AD] '>
                Register Now
            </button>
        </div>
    </nav>
  )
}



export default Navbar
import React from 'react'
import logo from '../components/img/logo.png'
import { NavLink } from 'react-router-dom'
import { MdFacebook } from "react-icons/md";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='flex flex-col gap-10 px-[20px] py-5 w-full md:flex md:justify-between md:px-[50px] md:py-[60px] xl:flex justify-between xl:py-16 xl:px-[135px] xl:h-full items-center bg-white'>
        <div className='flex flex-col gap-5 md:gap-0 md:flex-row justify-between w-full items-center'>
            <div className='flex flex-col items-center md:items-start'>
                <h2 className='font-bold md:text-[20px] lg:text-[23px]'>Join Our Newsletter</h2>
                <p className='md:w-[270px] lg:w-[300px] text-gray-500 text-sm'>Get all the latest blog news delivered to your inbox.</p>
            </div>
            <div className='flex flex-col w-full md:w-auto md:flex-row gap-2'>
                <div className='py-3 px-3 w-full md:w-[200px] lg:w-[300px] md:px-6 md:py-4 bg-white border rounded'>
                    <input
                    type="text"
                    placeholder='Email Address'
                    className="outline-none w-full text-gray-700 placeholder-gray-400"
                    />
                </div>
                <button className="px-2 py-4 md:px-8 md:py-4 rounded text-white bg-[#0149AD] font-semibold">
                    Subscribe
                </button>
            </div>
        </div> 
        <div className='border border-gray-200 w-full opacity-40'></div>
        <div className='flex flex-col md:flex-row gap-10 md:gap-o justify-between w-full justify-items-start'>
            <div className='flex flex-col gap-4 lg:gap-5 text-gray-500'>
                <div>
                    <img src={logo} alt="logo" className='w-[120px] md:w-[120px] lg:w-[140px]'/> 
                </div>
                <p className='text-gray-900 md:text-[12px] lg:text-[17px]'>© 2024 Jobestate. All rights reserved.</p>
                <p className='md:w-[240px] md:text-[12px] lg:text-[15px] lg:w-[340px]'>All trademarks, logos and brand names are the property of their respective owners.</p>
                <div className='flex gap-4 lg:gap-6 font-medium text-gray-600 md:text-[12px] lg:text-[15px]'>
                    <button>Terms of Service</button>
                    <button>Privacy Policy</button>
                </div>
            </div>
            <div className='flex flex-col gap-4 md:gap-9 lg:gap-7 w-auto'>
                <p className='text-gray-500 md:text-[17px]'>Quick Links</p>
                <div className='flex flex-col gap-3 md:gap-4'>
                    <NavLink
                    to='/findjobs'
                    className={({isActive}) =>
                    isActive ? 'text-gray-900 font-normal md:text-[14px] lg:text-[17px]' : 'text-gray-900 font-normal md:text-[14px] lg:text-[17px]'}
                    
                    >Find Jobs</NavLink>
                    <NavLink
                    to='/blog'
                    className={({isActive}) =>
                    isActive ? 'text-gray-900 font-normal md:text-[14px] lg:text-[17px]' : 'text-gray-900 font-normal md:text-[14px] lg:text-[17px]'}
                    
                    >Blog</NavLink>
                    <NavLink
                    to='/foremployers'
                    className={({isActive}) =>
                    isActive ? 'text-gray-900 font-normal md:text-[14px] lg:text-[17px]' : 'text-gray-900 font-normal md:text-[14px] lg:text-[17px]'}
                    
                    >For Employers</NavLink>
                </div>
            </div>
            <div className='flex flex-col gap-4 md:gap-9 lg:gap-7'>
                <p className='text-gray-500 md:text-[17px]'>For Employers</p>
                <div className='flex flex-col gap-3 md:gap-4'>
                    <NavLink
                    to='/employers'
                    className={({isActive}) =>
                    isActive ? 'text-gray-900 font-normal md:text-[14px] lg:text-[17px]' : 'text-gray-900 font-normal md:text-[14px] lg:text-[17px]'}
                    
                    >Create An Employer Account</NavLink>
                    <NavLink
                    to='/talent'
                    className={({isActive}) =>
                    isActive ? 'text-gray-900 font-normal md:text-[14px] lg:text-[17px]' : 'text-gray-900 font-normal md:text-[14px] lg:text-[17px]'}
                    
                    >Find Talent</NavLink>
                </div>
            </div>
            <div className='flex flex-row md:flex-col lg:flex-row gap-3'>
                <div className='w-9 h-9 rounded-full bg-[#013A8A] flex items-center justify-center text-white'>
                    <MdFacebook size={23}/>
                </div>
                <div className='w-9 h-9 rounded-full bg-[#013A8A] flex items-center justify-center text-white'>
                    <FaTwitter size={20}/>
                </div>
                <div className='w-9 h-9 rounded-full bg-[#013A8A] flex items-center justify-center text-white'>
                    <FaInstagram size={20}/>
                </div>
                <div className='w-9 h-9 rounded-full bg-[#013A8A] flex items-center justify-center text-white'>
                    <FaLinkedinIn size={20}/>
                </div>
            </div>
        </div>
    </footer>
  )
}



export default Footer
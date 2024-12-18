import React, { useState } from 'react'
import { FaBars, FaBell, FaTimes } from 'react-icons/fa';
// import { FaAmazon } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logo from '../components/img/logo.png'
import { RiDashboardFill } from 'react-icons/ri';
import { BiSolidBriefcase } from 'react-icons/bi';
import { GrStatusGood } from 'react-icons/gr';
import { BsFillBookmarkCheckFill } from 'react-icons/bs';
import { TfiWrite } from 'react-icons/tfi';
import { IoPersonCircle } from 'react-icons/io5';
import { IoIosSettings } from 'react-icons/io';
import { MdOutlineArrowOutward } from 'react-icons/md';
// import { CiBookmark } from "react-icons/ci";

const UserNotification = () => {

  const [show, setShow] = useState(false)

  const HandleShow  = () => {
  setShow(!show)
  }

  return (
    <div className='bg-[#EEF0F2] w-full h-screen lg:h-[1000px] lg:ml-72 '>
      <div className='bg-white w-auto h-auto px-10 py-9 flex items-center justify-between shadow-sm'>
      {show ? <div className='lg:hidden overflow-auto flex flex-col absolute top-16 md:top-16 left-0 gap-[40px] py-7 md:py-10 px-7 md:px-14 bg-white w-full h-auto md:h-screen transition-all duration-500 font-medium text-[15px] md:text-[20px] text-[#2b2b2b] '>
          <div className='flex flex-col gap-10'>
            <div className='pl-2'>
              <img src={logo} alt="logo" className='w-[120px] md:w-[150px] lg:w-[150px]'/> 
            </div>
            <div className='w-full h-auto flex flex-col gap-4'>
              <NavLink
              to='/userdashboard'
              className={({isActive}) =>
              isActive ? 'bg-[#E8F1FD] text-[#1366D9] text-sm font-medium px-4 py-6 flex items-center gap-3 rounded-md' : 'bg-white text-[#5D6679] text-sm font-medium px-4 py-6 flex items-center gap-3 rounded-md'}
              
              ><RiDashboardFill size={23}/> Dashboard</NavLink>
              <NavLink
              to='/userjobs'
              className={({isActive}) =>
              isActive ? 'bg-[#E8F1FD] text-[#1366D9] text-sm  font-medium px-4 py-6 flex items-center gap-3 rounded-md' : 'bg-white text-[#5D6679] text-sm font-medium px-4 py-6 flex items-center gap-3 rounded-md'}
              
              ><BiSolidBriefcase size={23}/> Jobs</NavLink>
              <NavLink
              to='/userapplicationstatus'
              className={({isActive}) =>
              isActive ? 'bg-[#E8F1FD] text-[#1366D9] text-sm  font-medium px-4 py-6 flex items-center gap-3 rounded-md' : 'bg-white text-[#5D6679] text-sm font-medium px-4 py-6 flex items-center gap-3 rounded-md'}
              
              ><GrStatusGood size={23}/> Application Status</NavLink>
              <NavLink
              to='/usersavedjobs'
              className={({isActive}) =>
              isActive ? 'bg-[#E8F1FD] text-[#1366D9] text-sm  font-medium px-4 py-6 flex items-center gap-3 rounded-md' : 'bg-white text-[#5D6679] text-sm font-medium px-4 py-6 flex items-center gap-3 rounded-md'}
              
              ><BsFillBookmarkCheckFill size={23}/> Saved Jobs</NavLink>
              <NavLink
              to='/userblog'
              className={({isActive}) =>
              isActive ? 'bg-[#E8F1FD] text-[#1366D9] text-sm  font-medium px-4 py-6 flex items-center gap-3 rounded-md' : 'bg-white text-[#5D6679] text-sm font-medium px-4 py-6 flex items-center gap-3 rounded-md'}
              
              ><TfiWrite size={23}/> Blog</NavLink>
              <NavLink
              to='/usernotification'
              className={({isActive}) =>
              isActive ? 'bg-[#E8F1FD] text-[#1366D9] text-sm  font-medium px-4 py-6 flex items-center gap-3 rounded-md' : 'bg-white text-[#5D6679] text-sm font-medium px-4 py-6 flex items-center gap-3 rounded-md'}
              
              ><FaBell size={23}/> Notification</NavLink>
            </div>
          </div>
          <div className='w-full h-auto flex flex-col gap-4 border-t-[1px] border-black pt-4'>
              <NavLink
              to='/userprofile'
              className={({isActive}) =>
              isActive ? 'bg-[#E8F1FD] text-[#1366D9] text-sm  font-medium px-4 py-6 flex items-center gap-3 rounded-md' : 'bg-white text-[#5D6679] text-sm font-medium px-4 py-6 flex items-center gap-3 rounded-md'}
              
              ><IoPersonCircle size={30}/> Profile</NavLink>
              <NavLink
              to='/usersettings'
              className={({isActive}) =>
              isActive ? 'bg-[#E8F1FD] text-[#1366D9] text-sm  font-medium px-4 py-6 flex items-center gap-3 rounded-md' : 'bg-white text-[#5D6679] text-sm font-medium px-4 py-6 flex items-center gap-3 rounded-md'}
              
              ><IoIosSettings size={30}/> Settings</NavLink>
          </div>
        </div> : ""}
        <div className="flex items-center relative gap-6 xl:hidden">
          <div onClick={HandleShow} className="flex items-center">
            {show ? <FaTimes size={26} className="z-50 left-0 md:left-[70px]" /> : <FaBars size={26} />}
          </div>
        </div>
        <h4 className='font-semibold '>Welcome Back, User</h4>
        <div className='hidden lg:flex items-center gap-5'>
          <h4 className='text-[#323232] font-normal hidden md:flex'>Latest Updates!</h4>
          {/* <div className='hidden md:flex items-center gap-4 bg-[#E8F1FD] px-4 py-3 rounded-lg'>
            Complete Your Profile
            <div className='w-auto h-auto px-3 py-4 text-sm rounded-full bg-white border-2 border-[#1366D9] flex items-center'>
              60%
            </div>
          </div> */}
        </div>
      </div>

      <div className='p-10 h-[2000px] md:h-[1000px] lg:h-[800px] overflow-y-auto'>
        <div className='bg-white w-auto h-auto px-6 md:px-10 py-9 flex items-center justify-between shadow-sm rounded-lg'>
          <div className='flex items-center gap-5 md:gap-10'>
            <div className='flex flex-col gap-2'>
              <input type="checkbox" name="" id="" />
              <p className='text-[10px] hidden md:flex'>Mark As Read</p>
            </div>
            <div className='flex flex-col gap-1 md:gap-2'>
              <h4 className='font-semibold '>Notification</h4>
              <p>Breif Info</p>
            </div>
          </div>
          <div className='flex items-center gap-5'>
            <button className='flex items-center justify-center'>
              <MdOutlineArrowOutward size={24}/>
            </button>
            {/* <h4 className='text-[#323232] font-normal hidden md:flex'>Latest Updates!</h4> */}
            {/* <div className='hidden md:flex items-center gap-4 bg-[#E8F1FD] px-4 py-3 rounded-lg'>
              Complete Your Profile
              <div className='w-auto h-auto px-3 py-4 text-sm rounded-full bg-white border-2 border-[#1366D9] flex items-center'>
                60%
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserNotification
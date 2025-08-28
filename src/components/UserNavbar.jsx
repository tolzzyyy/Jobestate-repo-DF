import React from 'react'
import logo from '../Assets/img/logo.png'
import {NavLink} from "react-router-dom"
import { RiDashboardFill } from "react-icons/ri";
import { BiSolidBriefcase } from "react-icons/bi";
// import { GrStatusGood } from "react-icons/gr";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import { FaBell } from "react-icons/fa";
import { IoLogOut, IoPersonCircle } from "react-icons/io5";
// import { IoIosSettings } from "react-icons/io";

const UserNavbar = () => {

  return (
    <div className='hidden lg:flex overflow-hidden fixed top-0 left-0 h-full  bg-white text-black w-2/12 px-4 py-7'>
        <div className='w-full h-full flex flex-col justify-between'>
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
              {/* <NavLink
              to='/userapplicationstatus'
              className={({isActive}) =>
              isActive ? 'bg-[#E8F1FD] text-[#1366D9] text-sm  font-medium px-4 py-6 flex items-center gap-3 rounded-md' : 'bg-white text-[#5D6679] text-sm font-medium px-4 py-6 flex items-center gap-3 rounded-md'}
              
              ><GrStatusGood size={23}/> Application Status</NavLink> */}
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
              to='/'
              className={({isActive}) =>
              isActive ? 'bg-[#E8F1FD] text-[#1366D9] text-sm  font-medium px-4 py-6 flex items-center gap-3 rounded-md' : 'bg-white text-[#5D6679] text-sm font-medium px-4 py-6 flex items-center gap-3 rounded-md'}
              
              ><IoLogOut size={30}/> Logout</NavLink>
          </div>
        </div>
    </div>
  )
}

export default UserNavbar
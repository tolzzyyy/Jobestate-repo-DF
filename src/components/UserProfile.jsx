import React, { useState } from 'react'
import { FaBars, FaBell, FaTimes } from 'react-icons/fa';
// import { FaAmazon } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logo from '../Assets/img/logo.png'
import { RiDashboardFill } from 'react-icons/ri';
import { BiSolidBriefcase } from 'react-icons/bi';
// import { GrStatusGood } from 'react-icons/gr';
import { BsFillBookmarkCheckFill } from 'react-icons/bs';
import { TfiWrite } from 'react-icons/tfi';
import { IoPersonCircle } from 'react-icons/io5';
import { IoIosSettings } from 'react-icons/io';
import profileface from '../Assets/img/profile-JB.png'
import { CiEdit } from "react-icons/ci";
// import { MdOutlineArrowOutward } from 'react-icons/md';
// import { CiBookmark } from "react-icons/ci";

const UserProfile = () => {

  const [show, setShow] = useState(false)

  const HandleShow  = () => {
  setShow(!show)
  }

  return (
    <div className='bg-[#EEF0F2] w-full h-auto md:h-full lg:ml-72 '>
      <div className='bg-white w-auto h-auto px-10 py-9 flex items-center justify-between shadow-sm'>
      {show ? <div className='lg:hidden overflow-auto flex flex-col absolute top-20 md:top-16 left-0 gap-[40px] py-7 md:py-10 px-7 md:px-14 bg-white w-full h-auto md:h-screen transition-all duration-500 font-medium text-[15px] md:text-[20px] text-[#2b2b2b] '>
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
        <h4 className='font-semibold '>My Profile</h4>
        <button className='flex border border-gray-400 py-2 px-5 rounded-md gap-2 items-center'>Edit <CiEdit size={20}/></button>
      </div>
      <div className='p-10 h-[2000px] md:h-[1000px] lg:h-full flex flex-col gap-6 overflow-y-auto'>
        <div className='border-[1px] border-[#d4d4d4] w-full h-auto rounded-md p-10 flex justify-between items-center'>
          <div className='flex gap-4 items-center'>
            <div className='w-20 h-20 md:w-32 md:h-32'>
              <img src={profileface} alt="" className='w-auto h-auto rounded-full'/>
            </div>
            <div className='flex flex-col gap-1'>
              <h2 className='font-semibold text-xl md:text-2xl'>Emmanuella Johanson</h2>
              <p className='font-medium text-md md:text-lg'>Product Designer</p>
              {/* <span className='font-light opacity-55 text-black text-sm md:text-md'>Leeds, United Kingdom</span> */}
            </div>
          </div>
          {/* <button className='flex border border-gray-400 py-3 px-5 rounded-md gap-2 items-center'>Edit <CiEdit size={20}/></button> */}
        </div>
        <div className='border-[1px] border-[#d4d4d4] w-full h-auto rounded-md p-10 flex flex-col justify-between gap-7'>
          <div className='flex items-center justify-between w-full'>
            <h2 className='font-medium text-xl'>Personal Information</h2>
            {/* <button className='flex border border-gray-400 py-3 px-5 rounded-md gap-2 items-center'>Edit <CiEdit size={20}/></button> */}
          </div>
          <div className='w-auto flex flex-col md:flex-row gap-10 items-start'>
            <div className='flex flex-col gap-8'>
              <div>
                <p className='text-gray-500'>First Name</p>
                <h3 className='font-medium text-xl'>Emmanuella</h3>
              </div>
              <div>
                <p className='text-gray-500'>Email Address</p>
                <h3 className='font-medium text-lg'>emmanuellajhson25@gmail.com</h3>
              </div>
              <div>
                <p className='text-gray-500'>Role</p>
                <h3 className='font-medium text-xl'>Product Designer</h3>
              </div>
            </div>
            <div className='flex flex-col gap-8'>
              <div>
                <p className='text-gray-500'>Last Name</p>
                <h3 className='font-medium text-xl'>Johanson</h3>
              </div>
              <div>
                <p className='text-gray-500'>Phone Number</p>
                <h3 className='font-medium text-xl'>+09 345 346 46</h3>
              </div>
              <div>
                <p className='text-gray-500'>DOB</p>
                <h3 className='font-medium text-xl'>04/09/1997</h3>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row gap-5'>
          <div className='border-[1px] border-[#d4d4d4] w-full h-auto rounded-md p-10 flex flex-col justify-between gap-7'>
          <div className='flex items-center justify-between w-full'>
            <h2 className='font-medium text-xl'>Work Experience</h2>
            {/* <button className='flex border border-gray-400 py-3 px-5 rounded-md gap-2 items-center'>Edit <CiEdit size={20}/></button> */}
          </div>
          <div className='w-auto flex flex-col md:flex-row gap-10 items-start'>
            <div className='flex flex-col gap-8'>
              <div>
                <p className='text-gray-500'>Job Role</p>
                <h3 className='font-medium text-xl'>Product Designer</h3>
              </div>
              <div>
                <p className='text-gray-500'>Company Name</p>
                <h3 className='font-medium text-xl'>Zedcorp Inc.</h3>
              </div>
              <div>
                <p className='text-gray-500'>Duration</p>
                <h3 className='font-medium text-xl'>Jan 6, 2023 - Jan 6, 2024</h3>
              </div>
            </div>
            <div className='flex flex-col gap-8'>
              <div>
                <p className='text-gray-500'>Job Description</p>
                <h3 className='font-medium text-sm md:text-base w-60 md:w-80'>
                  Lorem ipsum dolor sit amet consectetur. 
                  Porta et enim mus auctor nunc diam. 
                  Dignissim viverra et viverra leo feugiat pulvinar adipiscing.
                </h3>
              </div>
            </div>
          </div>
          </div>
          <div className='border-[1px] border-[#d4d4d4] w-full h-auto rounded-md p-10 flex flex-col justify-between gap-7'>
          <div className='flex items-center justify-between w-full'>
            <h2 className='font-medium text-xl'>Education</h2>
            {/* <button className='flex border border-gray-400 py-3 px-5 rounded-md gap-2 items-center'>Edit <CiEdit size={20}/></button> */}
          </div>
          <div className='w-auto flex flex-col md:flex-row gap-10 items-start'>
            <div className='flex flex-col gap-8'>
              <div>
                <p className='text-gray-500'>Degree</p>
                <h3 className='font-medium text-xl'>B.Sc Computer Science</h3>
              </div>
              <div>
                <p className='text-gray-500'>Institution Name</p>
                <h3 className='font-medium text-xl'>University Of Leeds</h3>
              </div>
              <div>
                <p className='text-gray-500'>Duration</p>
                <h3 className='font-medium text-xl'>Jan 6, 2023 - Jan 6, 2024</h3>
              </div>
            </div>
            <div className='flex flex-col gap-8'>
              <div>
                <p className='text-gray-500'>Job Description</p>
                <h3 className='font-medium text-sm md:text-base w-60 md:w-80'>
                  Lorem ipsum dolor sit amet consectetur. 
                  Porta et enim mus auctor nunc diam. 
                  Dignissim viverra et viverra leo feugiat pulvinar adipiscing.
                </h3>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
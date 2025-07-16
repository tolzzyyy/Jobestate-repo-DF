import React from 'react'
// import { FaBars, FaBell, FaTimes } from 'react-icons/fa';
// import { FaAmazon } from 'react-icons/fa';
// import { NavLink } from 'react-router-dom';
// import logo from '../components/img/logo.png'
// import { RiDashboardFill } from 'react-icons/ri';
// import { BiSolidBriefcase } from 'react-icons/bi';
// import { GrStatusGood } from 'react-icons/gr';
// import { BsFillBookmarkCheckFill } from 'react-icons/bs';
// import { TfiWrite } from 'react-icons/tfi';
// import { IoPersonCircle } from 'react-icons/io5';
// import { IoIosSettings } from 'react-icons/io';
import profileface from '../components/img/profile-JB.png'
// import { CiEdit } from "react-icons/ci";
// import { MdOutlineArrowOutward } from 'react-icons/md';
// import { CiBookmark } from "react-icons/ci";

const EmployerDashboard = () => {
  return (
    <div className='py-10 lg:px-36 md:px-14 px-6 mt-20 lg:mt-32 w-full h-full'>
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
            <h2 className='font-medium text-xl'>Company Information</h2>
            {/* <button className='flex border border-gray-400 py-3 px-5 rounded-md gap-2 items-center'>Edit <CiEdit size={20}/></button> */}
          </div>
          <div className='w-auto flex flex-col md:flex-row gap-10 items-start'>
            <div className='flex flex-col gap-8'>
              {/* <div>
                <p className='text-gray-500'>Company Name</p>
                <h3 className='font-medium text-xl'>Emmanuella</h3>
              </div> */}
              <div>
                <p className='text-gray-500'>Location</p>
                <h3 className='font-medium text-xl'>Product Designer</h3>
              </div>
              <div>
                <p className='text-gray-500'>Job Description</p>
                <h3 className='font-medium text-lg'>emmanuellajhson25@gmail.com</h3>
              </div>
            </div>
            <div className='flex flex-col gap-8'>
              <div>
                <p className='text-gray-500'>Industry</p>
                <h3 className='font-medium text-xl'>Johanson</h3>
              </div>
              <div>
                <p className='text-gray-500'>Company Website</p>
                <h3 className='font-medium text-xl'>+09 345 346 46</h3>
              </div>
              {/* <div>
                <p className='text-gray-500'>DOB</p>
                <h3 className='font-medium text-xl'>04/09/1997</h3>
              </div> */}
            </div>
          </div>
        </div>
        {/* <div className='flex flex-col lg:flex-row gap-5'>
          <div className='border-[1px] border-[#d4d4d4] w-full h-auto rounded-md p-10 flex flex-col justify-between gap-7'>
          <div className='flex items-center justify-between w-full'>
            <h2 className='font-medium text-xl'>Work Experience</h2>
            <button className='flex border border-gray-400 py-3 px-5 rounded-md gap-2 items-center'>Edit <CiEdit size={20}/></button>
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
            <button className='flex border border-gray-400 py-3 px-5 rounded-md gap-2 items-center'>Edit <CiEdit size={20}/></button>
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
        </div> */}
      </div>
    </div>
  )
}

export default EmployerDashboard
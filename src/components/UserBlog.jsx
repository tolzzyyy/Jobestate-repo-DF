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
import { IoIosSearch, IoIosSettings } from 'react-icons/io';
// import { CiBookmark } from 'react-icons/ci';
import { IoFilterCircleOutline } from "react-icons/io5";
import { MdOutlineArrowOutward } from 'react-icons/md';
// import nawa from './img/bg.png'
// import damn from './img/techtalkbg.jpg'
import blogimg1 from './img/blogimg1.jpg'
import blogimg2 from './img/blogimg2.jpg'
import blogimg3 from './img/blogimg3.jpg'
import blogimg4 from './img/blogimg4.jpg'
import blogimg5 from './img/blogimg5.jpg'
import face1 from '../components/img/face1.png'
import face2 from '../components/img/face2.png'
import face3 from '../components/img/face3.png'

// const bgImage = {
//     backgroundImage: `url(${nawa})`,
//     backgroundPosition: 'center',
//     backgroundSize: 'cover'
// }

// const bgImageBlog = {
//     backgroundImage: `url(${damn})`,
//     backgroundPosition: 'center',
//     backgroundSize: 'cover'
// }

const blogPosts = [
  {
    id: 1,
    title: 'How AI is Revolutionizing Industries and Shaping Our World',
    image: blogimg5,
    author: 'John Doe',
    date: '13 October, 2024',
    description: 'Lorem ipsum dolor sit amet consectetur. Porta et enim mus auctor nunc diam...',
    authorImage: face1,
  },
  {
    id: 1,
    title: 'How AI is Revolutionizing Industries and Shaping Our World',
    image: blogimg3,
    author: 'Samuel Giggs',
    date: '13 October, 2024',
    description: 'Lorem ipsum dolor sit amet consectetur. Porta et enim mus auctor nunc diam...',
    authorImage: face2,
  },
  {
    id: 1,
    title: 'How AI is Revolutionizing Industries and Shaping Our World',
    image: blogimg4,
    author: 'John Doe',
    date: '13 October, 2024',
    description: 'Lorem ipsum dolor sit amet consectetur. Porta et enim mus auctor nunc diam...',
    authorImage: face1,
  },
  {
    id: 1,
    title: 'How AI is Revolutionizing Industries and Shaping Our World',
    image: blogimg2,
    author: 'Elizabeth Williams',
    date: '13 October, 2024',
    description: 'Lorem ipsum dolor sit amet consectetur. Porta et enim mus auctor nunc diam...',
    authorImage: face3,
  },
  {
    id: 1,
    title: 'How AI is Revolutionizing Industries and Shaping Our World',
    image: blogimg1,
    author: 'Samuel Giggs',
    date: '13 October, 2024',
    description: 'Lorem ipsum dolor sit amet consectetur. Porta et enim mus auctor nunc diam...',
    authorImage: face2,
  },
];



const UserBlog = () => {


  const [show, setShow] = useState(false)

  const HandleShow  = () => {
  setShow(!show)
  }

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  return (
    <div className='bg-[#EEF0F2] w-full h-auto lg:ml-72'>

      <div className='bg-white w-auto h-auto px-10 py-6 flex items-center justify-between shadow-sm'>
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
        <h4 className='font-semibold hidden lg:flex'>Tech Trends</h4>
        <div className='flex items-center gap-5'>
          {/* <h4 className='text-[#323232] font-normal hidden md:flex'>Let's Find You A New Job!</h4> */}
          <div className="flex items-center justify-between space-x-4 flex-1 border-2 border-gray-800 py-2 px-2 md:px-5 rounded-xl">
            <div className='flex items-center gap-2'>
              <IoIosSearch size={30} className='hidden md:flex'/>
              <input
              type="text"
              placeholder="Articles, blog posts"
              className="outline-none w-full text-gray-700 placeholder-gray-500 text-sm"
              />
            </div>
            <button onClick={toggleDropdown} className='relative flex items-center justify-center'>
              <IoFilterCircleOutline size={23}/>
            </button>
            {isDropdownOpen && (
              <div className="absolute top-16 md:top-20 md:right-44 mt-2 w-auto bg-white rounded-lg shadow-lg border border-gray-200">
                <div className="flex flex-col items-start w-full py-2">
                  <button className="px-4 py-2 w-full text-left flex gap-2 items-center hover:bg-gray-100 cursor-pointer">
                    <input type="checkbox" name="" id="" />
                    Filter by Date
                  </button>
                  <button className="px-4 py-2 w-full text-left flex gap-2 items-center hover:bg-gray-100 cursor-pointer">
                    <input type="checkbox" name="" id="" />
                    Filter by Category
                  </button>
                  <button className="px-4 py-2 w-full text-left flex gap-2 items-center hover:bg-gray-100 cursor-pointer">
                    <input type="checkbox" name="" id="" />
                    Filter by Status
                  </button>
                </div>
              </div>
            )}
          </div>
          <button className='hidden md:flex border-2 border-[#013A8A] transition-all duration-500 py-3 px-8 rounded-xl text-[#013A8A] font-semibold hover:text-white hover:border-2 hover:border-[#0149AD] hover:bg-[#0149AD] '>
            Search
          </button>
        </div>
      </div>

      <div className='h-auto flex flex-col gap-7 md:flex md:h-full items-center lg:items-start p-4 md:p-10 lg:flex lg:h-full'>
          <div className='flex flex-col gap-7 md:gap-0 md:flex-row w-full justify-between items-center'>
            {/* <div className='flex flex-col gap-1 items-center md:items-start'>
              <h1 className='font-semibold text-[17px] md:text-[22px] lg:text-[30px]'>Tech Trends</h1>
            </div> */}
            <button className='hidden w-[70px] h-[70px] rounded-full border border-black items-center justify-center hover:w-[80px] hover:h-[80px] transition-all duration-500'>
              <MdOutlineArrowOutward size={24}/>
            </button>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-7 md:p-0 ">
                {blogPosts.map((post) => (
                  <NavLink to='/blog'>
                  <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
                    <div className="p-6 flex flex-col gap-1">
                      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                      <p className="text-gray-600 mb-4">{post.description}</p>
                      <div className="flex items-center">
                        <img src={post.authorImage} alt={post.author} className="w-10 h-10 rounded-full mr-3" />
                        <div>
                          <p className="font-medium">{post.author}</p>
                          <p className="text-gray-500 text-sm">{post.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                   </NavLink>
                ))}
            </div>
      </div>

    </div>
  )
}

export default UserBlog
import React from 'react'
// import { FaBars, FaBell, FaTimes } from 'react-icons/fa';
// import { FaAmazon } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
// import logo from '../components/img/logo.png'
// import { RiDashboardFill } from 'react-icons/ri';
// import { BiSolidBriefcase } from 'react-icons/bi';
// import { GrStatusGood } from 'react-icons/gr';
// import { BsFillBookmarkCheckFill } from 'react-icons/bs';
// import { TfiWrite } from 'react-icons/tfi';
// import { IoPersonCircle } from 'react-icons/io5';
// import { IoIosSearch, IoIosSettings } from 'react-icons/io';
import { CiBookmark } from 'react-icons/ci';
// import { IoFilterCircleOutline } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
// import { GoShareAndroid } from "react-icons/go";

const jobCards = [
    {
      id: 1,
      date: '20th May, 2024',
      company: 'Amazon',
      title: 'Senior UI/UX Designer',
      jobTypes: ['Part-Time', 'Remote', 'Senior Level'],
      salary: '$5,000',
      currencyType: 'Annually',
      logoUrl: 'path/to/logo', // Replace with your logo path or URL
      isActive: false,
    },
    {
      id: 2,
      date: '20th May, 2024',
      company: 'Google',
      title: 'Senior Product Manager',
      jobTypes: ['Part-Time', 'Remote', 'Senior Level'],
      salary: '$5,000',
      currencyType: 'Annually',
      logoUrl: 'path/to/logo',
      isActive: false, // Mark this card as active for the highlighted background
    },
];

const jobCardsDetails = [
  {
    id: 1,
    date: '20th May, 2024',
    company: 'Amazon',
    title: 'Senior UI/UX Designer',
    jobTypes: ['Part-Time', 'Remote', 'Senior Level'],
    salary: '$5,000',
    currencyType: 'Annually',
    location: 'Washington, DC',
    logoUrl: 'path/to/logo', // Replace with your logo path or URL
    isActive: false,
  },
];


const AdminJobDetails = () => {
  return (
    <div className='w-full h-full lg:px-[100px] mt-24 md:mt-32'>
      <div className='p-10 h-[1000px] flex justify-center lg:h-[900px] overflow-y-auto'>
        <div className='lg:w-9/12 h-auto lg:mr-11 flex flex-col gap-14 mb-10'>
          <div className='flex flex-col gap-8'>
            <div className='w-16 '>
                <NavLink
                to='/admindashboard'
                className='text-black text-md flex items-center gap-2 w-auto'>
                    <FaArrowLeftLong />
                    Back
                </NavLink>
            </div>
            <div className='flex w-full h-auto'> 

                  {jobCardsDetails.map((job) => (
                    <div
                    key={job.id}
                    className='flex md:flex-row flex-col gap-11 justify-between md:gap-2 w-full'>
                      <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-1'>
                          <span className='text-xs font-normal'>{job.date}</span>
                          <h2 className='text-3xl font-semibold'>{job.title}</h2>
                        </div>
                        <div className='flex flex-col gap-2'>
                          <div className='flex items-center gap-2'>
                            <span className='text-lg font-medium'>{job.company}</span>
                            <div className='text-5xl flex items-center w-1 h-1 bg-black rounded-full'></div>
                            <span className='text-md font-normal'>{job.location}</span>
                          </div>
                          <div className="flex gap-2">
                            {job.jobTypes.map((type, index) => (
                            <span
                            key={index}
                            className="px-3 py-2 flex items-center text-xs border-2 border-gray-400 rounded-lg text-gray-900"
                            >
                            {type}
                            </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className='flex flex-col gap-0 md:gap-4 items-start md:items-end'>
                        <div className='flex flex-col gap-1 items-start md:items-end'>
                          <span className='text-xs font-normal'>{job.currencyType}</span>
                          <h2 className='text-3xl font-semibold'>{job.salary}</h2>
                        </div>
                        <div className='flex items-center gap-2 mt-5'>
                          <button className='flex border-2 border-[#013A8A] transition-all duration-500 py-3 px-8 rounded-xl text-[#013A8A] font-semibold hover:text-white hover:border-2 hover:border-[#0149AD] hover:bg-[#0149AD] '>
                            Approve
                          </button>
                          <button className='flex border-2 border-[#013A8A] transition-all duration-500 py-3 px-8 rounded-xl text-[#013A8A] font-semibold hover:text-white hover:border-2 hover:border-[#0149AD] hover:bg-[#0149AD] '>
                            Decline
                          </button>
                          {/* <button className='flex items-center px-3 py-3 border-[1px] border-gray-400 rounded-lg'>
                            <CiBookmark size={22}/>
                          </button>
                          <button className='flex items-center px-3 py-3 border-[1px] border-gray-400 rounded-lg'>
                            <GoShareAndroid size={22}/>
                          </button> */}
                        </div>
                      </div>
                    </div>
                  ))}

            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <h3 className='font-semibold'>About This Role</h3>
            <p className='text-sm text-gray-500 leading-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ex exercitationem nisi accusantium alias ducimus molestias, dolorum praesentium temporibus veniam tempora voluptates nostrum qui, vel a nesciunt sint officiis est.
              Earum odio quae sed explicabo praesentium, iste suscipit repudiandae recusandae tempore modi cum ea. Consequuntur esse dolore cumque. Doloremque excepturi soluta corporis ea error, non rerum corrupti maxime velit explicabo.
              Delectus quisquam rerum culpa explicabo voluptate optio eius ipsum ipsam obcaecati nihil, dignissimos facere sequi. Similique repellat sint omnis animi laborum sapiente in labore! Odio accusantium laborum ab quaerat suscipit!
            </p>
          </div>
          <div className='flex flex-col gap-2'>
            <h3 className='font-semibold'>Qualifications</h3>
            <p className='text-sm text-gray-500 leading-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ex exercitationem nisi accusantium alias ducimus molestias, dolorum praesentium temporibus veniam tempora voluptates nostrum qui, vel a nesciunt sint officiis est.
              Earum odio quae sed explicabo praesentium, iste suscipit repudiandae recusandae tempore modi cum ea. Consequuntur esse dolore cumque. Doloremque excepturi soluta corporis ea error, non rerum corrupti maxime velit explicabo.
              Delectus quisquam rerum culpa explicabo voluptate optio eius ipsum ipsam obcaecati nihil, dignissimos facere sequi. Similique repellat sint omnis animi laborum sapiente in labore! Odio accusantium laborum ab quaerat suscipit!
            </p>
          </div>
          <div className='flex flex-col gap-2'>
            <h3 className='font-semibold'>Responsibility</h3>
            <p className='text-sm text-gray-500 leading-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ex exercitationem nisi accusantium alias ducimus molestias, dolorum praesentium temporibus veniam tempora voluptates nostrum qui, vel a nesciunt sint officiis est.
              Earum odio quae sed explicabo praesentium, iste suscipit repudiandae recusandae tempore modi cum ea. Consequuntur esse dolore cumque. Doloremque excepturi soluta corporis ea error, non rerum corrupti maxime velit explicabo.
              Delectus quisquam rerum culpa explicabo voluptate optio eius ipsum ipsam obcaecati nihil, dignissimos facere sequi. Similique repellat sint omnis animi laborum sapiente in labore! Odio accusantium laborum ab quaerat suscipit!
            </p>
          </div>
        </div>

        <div className='w-3/12 h-auto overflow-hidden hidden lg:block'>

            <h1 className='font-semibold text-[10px] mb-5 md:text-[20px]'>Recommended Jobs</h1>
            
            <div className="hidden lg:grid w-full h-auto items-center gap-y-6 lg:items-start lg:grid-cols-1  lg:gap-x-8 lg:gap-y-6">
            {jobCards.map((job) => (
                <div
                key={job.id}
                className={`pt-8 pb-11 px-5 flex flex-col gap-6 border border-gray-800 rounded-[20px] w-auto shadow-sm ${
                    job.isActive ? 'bg-green-100' : 'bg-white'
                }`}
                >
                <div className='flex flex-col gap-2 border-b py-4 px-1'>
                    <div className="flex justify-between items-center mb-2">
                    <div className='w-full flex justify-between'>
                        <span className="text-gray-500 text-sm">{job.date}</span>
                        <button>
                        <CiBookmark size={23}/>
                        </button>
                    </div>
                    {/* <svg
                        className="w-5 h-5 text-gray-400 cursor-pointer"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                        ></path>
                    </svg> */}
                    </div>
                    <div className='flex justify-between items-center'>
                    <div className='flex flex-col'>
                        <h2 className="text-sm font-medium mb-1">{job.company}</h2>
                        <h3 className="text-xl font-semibold mb-2 text-[31px] leading-9 w-56">{job.title}</h3>
                    </div>
                    {/* <FaAmazon size={34}/> */}
                    </div>
                    <div className="flex gap-2 mb-2">
                    {job.jobTypes.map((type, index) => (
                        <span
                        key={index}
                        className="px-2 py-1 flex items-center text-xs border rounded-full text-gray-900"
                        >
                        {type}
                        </span>
                    ))}
                    </div>
                </div>
                <div className="flex justify-between items-center px-4">
                    <div>
                    <p className="text-xl font-bold">{job.salary}</p>
                    <p className="text-sm text-gray-500">{job.currencyType}</p>
                    </div>
                    <NavLink to='/userjobs/details' className="px-2 py-2 md:border-2 border-[#013A8A] md:text-[12px] md:px-6 md:py-3 md:rounded-full text-[#013A8A] font-semibold xl:hover:text-white xl:hover:border-2 xl:hover:border-[#0149AD] xl:hover:bg-[#0149AD] xl:transition-all xl:duration-200">
                    Details
                    </NavLink>
                </div>
                </div>
            ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default AdminJobDetails
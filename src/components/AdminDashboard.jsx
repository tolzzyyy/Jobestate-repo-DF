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
// import { IoIosSettings } from 'react-icons/io';
import { CiBookmark } from "react-icons/ci";


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
  {
    id: 3,
    date: '20th May, 2024',
    company: 'Google',
    title: 'Front-End Development',
    jobTypes: ['Part-Time', 'Remote', 'Senior Level'],
    salary: '$5,000',
    currencyType: 'Annually',
    logoUrl: 'path/to/logo',
    isActive: false, // Mark this card as active for the highlighted background
  },
  {
    id: 4,
    date: '20th May, 2024',
    company: 'Google',
    title: 'Senior Product Manager',
    jobTypes: ['Part-Time', 'Remote', 'Senior Level'],
    salary: '$5,000',
    currencyType: 'Annually',
    logoUrl: 'path/to/logo',
    isActive: false, // Mark this card as active for the highlighted background
  },
  {
    id: 5,
    date: '20th May, 2024',
    company: 'Google',
    title: 'Senior Product Manager',
    jobTypes: ['Part-Time', 'Remote', 'Senior Level'],
    salary: '$5,000',
    currencyType: 'Annually',
    logoUrl: 'path/to/logo',
    isActive: false, // Mark this card as active for the highlighted background
  },
  {
    id: 6,
    date: '20th May, 2024',
    company: 'Google',
    title: 'Senior Product Manager',
    jobTypes: ['Part-Time', 'Remote', 'Senior Level'],
    salary: '$5,000',
    currencyType: 'Annually',
    logoUrl: 'path/to/logo',
    isActive: false, // Mark this card as active for the highlighted background
  },
  {
    id: 6,
    date: '20th May, 2024',
    company: 'Google',
    title: 'Senior Product Manager',
    jobTypes: ['Part-Time', 'Remote', 'Senior Level'],
    salary: '$5,000',
    currencyType: 'Annually',
    logoUrl: 'path/to/logo',
    isActive: false, // Mark this card as active for the highlighted background
  },
  {
    id: 6,
    date: '20th May, 2024',
    company: 'Google',
    title: 'Senior Product Manager',
    jobTypes: ['Part-Time', 'Remote', 'Senior Level'],
    salary: '$5,000',
    currencyType: 'Annually',
    logoUrl: 'path/to/logo',
    isActive: false, // Mark this card as active for the highlighted background
  },
  {
    id: 6,
    date: '20th May, 2024',
    company: 'Google',
    title: 'Senior Product Manager',
    jobTypes: ['Part-Time', 'Remote', 'Senior Level'],
    salary: '$5,000',
    currencyType: 'Annually',
    logoUrl: 'path/to/logo',
    isActive: false, // Mark this card as active for the highlighted background
  },
  {
    id: 6,
    date: '20th May, 2024',
    company: 'Google',
    title: 'Senior Product Manager',
    jobTypes: ['Part-Time', 'Remote', 'Senior Level'],
    salary: '$5,000',
    currencyType: 'Annually',
    logoUrl: 'path/to/logo',
    isActive: false, // Mark this card as active for the highlighted background
  },
  {
    id: 6,
    date: '20th May, 2024',
    company: 'Google',
    title: 'Senior Product Manager',
    jobTypes: ['Part-Time', 'Remote', 'Senior Level'],
    salary: '$5,000',
    currencyType: 'Annually',
    logoUrl: 'path/to/logo',
    isActive: false, // Mark this card as active for the highlighted background
  },
  {
    id: 6,
    date: '20th May, 2024',
    company: 'Google',
    title: 'Senior Product Manager',
    jobTypes: ['Part-Time', 'Remote', 'Senior Level'],
    salary: '$5,000',
    currencyType: 'Annually',
    logoUrl: 'path/to/logo',
    isActive: false, // Mark this card as active for the highlighted background
  },
  {
    id: 6,
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


const AdminDashboard = () => {
  return (
    <div className='w-full h-full lg:px-[100px] mt-24 md:mt-32'>
        <div className='p-10 h-[2000px] md:h-[1000px] lg:h-auto overflow-y-auto'>
        <h1 className='font-semibold text-[20px] mb-5 md:text-[30px]'>All Jobs</h1>

        <div className="grid w-full h-auto items-center gap-y-6 lg:items-start md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-20 md:gap-y-10  lg:gap-x-8 lg:gap-y-6">
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
                <NavLink to='/adminjobdetails' className="px-2 py-2 md:border-2 border-[#013A8A] md:text-[12px] md:px-6 md:py-3 md:rounded-full text-[#013A8A] font-semibold xl:hover:text-white xl:hover:border-2 xl:hover:border-[#0149AD] xl:hover:bg-[#0149AD] xl:transition-all xl:duration-200">
                  See More
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
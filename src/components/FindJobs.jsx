import React from 'react'
import { BiSolidStar } from "react-icons/bi";
import {IoIosSearch} from "react-icons/io"
import { FaLocationDot, FaAmazon } from "react-icons/fa6";
// import { GoArrowDownRight } from "react-icons/go";
// import { IoIosStarHalf, IoIosPaperPlane } from "react-icons/io";
// import { IoPerson, IoCloudUploadSharp } from "react-icons/io5";
import omo from './img/bg.png'
import Footer from './Footer';
// import happyPeople from "../components/img/happyPeople.png"
// import manwithlaptop from "../components/img/manwithlaptop.png"


const bgImage = {
  backgroundImage: `url(${omo})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover'
}

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
];



const FindJobs = () => {
  return (
    <div style={bgImage} className='mt-[130px] overflow-hidden'>
        <section className='flex flex-col gap-5 h-[300px] items-center md:flex md:h-[400px] md:items-center xl:flex xl:items-center xl:h-[700px] justify-center'>
            {/* <img src={bg1} alt="background1" className='h-[1000px] bg-cover bg-center lg:h-[100px]'/> */}
            <div className='flex md:flex xl:flex flex-col justify-center items-center gap-4'>
                <span className='py-2 font-semibold w-[200px] px-1 text-[9px] md:text-[13px] md:w-[300px] md:py-2 xl:py-3 xl:px-6 rounded-full bg-[#D7E8FF] text-[#2C69BD] border-[#2C69BD] border-2 flex items-center gap-4 justify-center xl:w-[350px] xl:text-[15px]'>
                    <BiSolidStar />
                    Discover Your Next Opportunity
                </span>
                <div className='flex gap-1 md:flex md:gap-2 xl:flex flex-col items-center justify-center'>
                    <h1 className='flex text-[15px] w-[350px] font-bold text-center md:text-[33px] md:w-[700px] md:items-center lg:w-[1200px] xl:text-[38px] xl:font-semibold'>Explore Thousands of Opportunities Tailored to Your Skills and Ambitions</h1>
                    <p className='text-[11px] text-center opacity-70 md:hidden'>Discover Your Ideal Job Match and Accelerate Your Career</p>
                    <p className='hidden text-[15px] text-center opacity-70 md:block md:text-[13px] xl:font-medium text-black xl:opacity-60 xl:text-[15px]'>Discover Your Ideal Job Match and Accelerate Your Career with Tailored Opportunities from Leading Companies.</p>
                </div>
            </div>
            <div className="flex py-2 px-3 border-2 border-gray-100 w-[350px] md:flex md:py-5 md:px-7 md:w-full xl:flex items-center justify-between bg-white xl:shadow-xl shadow-[#a8a8a8] rounded-full xl:w-full xl:py-6 xl:px-10 max-w-3xl mx-auto">
                <div className="flex md:flex items-center space-x-4 flex-1 px-1">
                    <IoIosSearch size={30}/>
                    <input
                    type="text"
                    placeholder="Job title, keywords"
                    className="outline-none w-full text-gray-700 placeholder-gray-500"
                    />
                </div>
                <div className="hidden md:h-10 w-px md:block bg-gray-800 mx-4"></div>
                <div className="hidden md:flex items-center space-x-4 flex-1 px-1">
                    <FaLocationDot size={22} className='hidden md:block'/>
                    <input
                    type="text"
                    placeholder='City, State, "remote"'
                    className="hidden md:block outline-none w-full text-gray-700 placeholder-gray-500"
                    />
                </div>
                <button className="px-2 py-2  md:border-2 border-[#013A8A] md:px-10 md:py-4 md:rounded-full text-[#013A8A] font-semibold xl:hover:text-white xl:hover:border-2 xl:hover:border-[#0149AD] xl:hover:bg-[#0149AD] xl:transition-all xl:duration-200">
                    Search
                </button>
            </div>
        </section>

        <section className='h-auto flex flex-col gap-7 py-10 lg:py-16 md:px-[40px] lg:px-[135px] md:flex md:h-auto xl:flex items-center lg:items-start xl:h-auto justify-center'>

          <h1 className='font-semibold text-[20px] md:text-[30px]'>Featured Jobs</h1>

          <div className="grid items-center gap-y-6 lg:items-start md:grid-cols-2 lg:grid-cols-4 md:gap-x-20 md:gap-y-10  lg:gap-x-8 lg:gap-y-6">
            {jobCards.map((job) => (
              <div
                key={job.id}
                className={`pt-6 pb-9 px-5 flex flex-col gap-6 border border-gray-800 rounded-[20px] w-[320px] shadow-sm ${
                  job.isActive ? 'bg-green-100' : 'bg-white'
                }`}
              >
                <div className='flex flex-col gap-2 border-b py-4 px-1'>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-500 text-sm">{job.date}</span>
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
                    <FaAmazon size={34}/>
                  </div>
                  <div className="flex gap-2 mb-2">
                    {job.jobTypes.map((type, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs border rounded-full text-gray-900"
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
                  <button className="px-2 py-2 md:border-2 border-[#013A8A] md:text-[12px] md:px-6 md:py-3 md:rounded-full text-[#013A8A] font-semibold xl:hover:text-white xl:hover:border-2 xl:hover:border-[#0149AD] xl:hover:bg-[#0149AD] xl:transition-all xl:duration-200">
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Footer/>
    </div>
  )
}



export default FindJobs
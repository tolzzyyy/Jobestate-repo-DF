import React from 'react'
import Navbar from './Navbar';
// import bg1 from '../components/img/bg.png'
import face1 from '../components/img/face1.png'
import face2 from '../components/img/face2.png'
import face3 from '../components/img/face3.png'
import { BiSolidStar } from "react-icons/bi";
import {IoIosSearch} from "react-icons/io"
import { FaLocationDot } from "react-icons/fa6";
import { GoArrowDownRight } from "react-icons/go";
import { IoIosStarHalf } from "react-icons/io";
import happyPeople from "../components/img/happyPeople.png"

const jobCategories = [
    'Engineering',
    'Design',
    'Marketing',
    'Customer Support',
    'Product Management',
    'Human Resources',
    'IT & Software',
    'Project Management',
  ];


const Home = () => {
  return (
    <div className='overflow-hidden'>
        <Navbar/>

        <section className='flex flex-col gap-7 h-[400px]  items-center  md:flex md:h-[500px] md:items-center xl:flex xl:items-center xl:h-[800px] justify-center'>
            {/* <img src={bg1} alt="background1" className='h-[1000px] bg-cover bg-center lg:h-[100px]'/> */}
            <div className='flex md:flex xl:flex flex-col justify-center items-center gap-4'>
                <span className='py-2 font-semibold w-[200px] px-1 text-[9px] md:text-[13px] md:w-[300px] md:py-2 xl:py-3 xl:px-6 rounded-full bg-[#D7E8FF] text-[#2C69BD] border-[#2C69BD] border-2 flex items-center gap-4 justify-center xl:w-[350px] xl:text-[15px]'>
                    <BiSolidStar />
                    Discover Your Next Opportunity
                </span>
                <div className='flex gap-1 md:flex md:gap-2 xl:flex flex-col items-center justify-center'>
                    <h1 className='flex text-[15px] font-bold text-center md:text-[33px] md:items-center xl:text-[45px] xl:font-semibold'>Supporting Job Seekers Every Step Of The Way</h1>
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
            <div className='flex items-center gap-1 md:gap-3 mt-5 md:mt-8 xl:mt-24'>
                <div className="flex -space-x-5">
                    <img
                        src={face1}
                        alt="face1"
                        className="w-10 md:w-12 xl:w-16 xl:h-16 rounded-full border-2 border-white"
                    />
                    <img
                        src={face2}
                        alt="face2"
                        className="w-10 md:w-12 xl:w-16 xl:h-16 rounded-full border-2 border-white"
                    />
                    <img
                        src={face3}
                        alt="face3"
                        className="w-10 md:w-12 xl:w-16 xl:h-16 rounded-full border-2 border-white"
                    />
                </div>
                <div className='flex flex-col gap-1 md:gap-2'>
                    <div className='flex'>
                        <BiSolidStar className='text-[#FFBB33] text-[15px] md:text-[20px]'/>
                        <BiSolidStar className='text-[#FFBB33] text-[15px] md:text-[20px]'/>
                        <BiSolidStar className='text-[#FFBB33] text-[15px] md:text-[20px]'/>
                        <BiSolidStar className='text-[#FFBB33] text-[15px] md:text-[20px]'/>
                        <IoIosStarHalf className='text-[#FFBB33] text-[15px] md:text-[20px]'/>
                    </div>
                    <div className='flex items-center gap-1 text-[12px] md:text-[15px] md:flex md:items-center'>
                        Reviews
                        <GoArrowDownRight  className='text-[15px] md:text-[20px]'/>
                    </div>
                </div>
            </div>
        </section>

        <section className='flex flex-col gap-7 h-auto items-center md:mt-10 lg:mt-0  md:flex md:h-auto md:items-center xl:flex xl:items-center xl:h-auto xl:py-28 justify-center'>
            <div className='flex flex-col items-center gap-1 md:gap-3'>
                <h1 className='flex text-[15px] font-bold text-center md:text-[25px] md:items-center xl:text-[35px] xl:font-semibold'>Choose Your Desired Job Category</h1>
                <div className="p-6 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 md:gap-4 md:justify-center lg:grid-cols-4 lg:gap-9">
                    {jobCategories.map((category, index) => (
                    <div
                        key={index}
                        className="px-16 bg-blue-50 rounded-lg shadow-sm py-7 md:px-6 lg:px-8 font-medium text-[20px] flex gap-3 items-center justify-center text-center hover:bg-[#D7E8FF] hover:border-2 hover:border-[#013A8A] transition duration-200"
                    >
                        <div className='flex flex-col items-center'>
                            {category}
                            <p className='text-[10px] md:text-[12px] lg:text-[8px] text-gray-500'>View All Available Job Openings</p>
                        </div>
                    </div>
                    ))}
                </div>
                {/* <button className="px-6 py-2 rounded-full border-2 border-[#013A8A] md:px-10 md:py-4 md:rounded-full text-[#013A8A] font-semibold xl:hover:text-white xl:hover:border-2 xl:hover:border-[#0149AD] xl:hover:bg-[#0149AD] xl:transition-all xl:duration-200">
                    See More
                </button> */}
            </div>
        </section>

        <section className='h-auto flex flex-col gap-7 py-9 md:mt-8 lg:mt-0 md:px-[70px] lg:px-[135px] md:flex md:h-auto xl:flex  xl:h-[800px] justify-center'>
            <div className='flex flex-col gap-8 items-center md:flex md:flex-col lg:flex-row md:gap-10 lg:gap-0 lg:flex justify-between'>
                <div>
                    <img src={happyPeople} alt="" className='hidden md:hidden lg:flex lg:w-[550px]' />
                </div>
                <div className='flex flex-col gap-8 md:flex md:flex-col lg:flex lg:flex-col lg:items-end justify-center lg:gap-8'>
                    <div className='items-center md:items-center flex flex-col lg:items-end gap-2'>
                        <h2 className='font-bold text-[20px] md:text-[25px]'>Why Choose Us?</h2>
                        <p className='flex text-[12px] w-[350px] text-center md:text-center md:text-[15px] lg:text-right lg:text-[13px] md:w-[550px] text-gray-500'>
                            With personalized job recommendations, 
                            trusted employers, and tools to simplify your application process, 
                            we make finding your next career move easier than ever.
                        </p>
                    </div>
                    <div className='md:grid grid-cols-1 gap-y-3 flex flex-col items-center md:grid-cols-2 md:gap-y-6 gap-x-6'>
                        <div className='items-center md:items-center md:px-10 lg:items-start shadow-md shadow-gray-300 px-6 py-8 bg-white flex flex-col gap-1 rounded-md justify-center'>
                            <h3 className='text-[#0149AD] font-bold'>Tailored Job Matches</h3>
                            <p className='w-[300px] text-center md:w-[250px] md:text-center lg:text-left text-[10px] lg:w-[300px] text-gray-700'>
                                We connect users with jobs that align perfectly with their skills, 
                                location, and career goals using advanced filtering and recommendation algorithms.
                            </p>
                        </div>
                        <div className='items-center md:items-center md:px-10 lg:items-start shadow-md shadow-gray-300 px-6 py-8 bg-white flex flex-col gap-1 rounded-md justify-center'>
                            <h3 className='text-[#0149AD] font-bold'>Verified Employers</h3>
                            <p className='w-[300px] text-center md:w-[250px] md:text-center lg:text-left text-[10px] lg:w-[300px] text-gray-700'>
                                All employers on our platform are thoroughly vetted, 
                                ensuring that job seekers only connect with trusted, high-quality companies.
                            </p>
                        </div>
                        <div className='items-center md:items-center md:px-10 lg:items-start shadow-md shadow-gray-300 px-6 py-8 bg-white flex flex-col gap-1 rounded-md justify-center'>
                            <h3 className='text-[#0149AD] font-bold'>One-Click Applications</h3>
                            <p className='w-[300px] text-center md:w-[250px] md:text-center lg:text-left text-[10px] lg:w-[300px] text-gray-700'>
                                Our platform allows users to apply to jobs quickly and efficiently, 
                                reducing the hassle of filling out multiple forms.
                            </p>
                        </div>
                        <div className='items-center md:items-center md:px-10 lg:items-start shadow-md shadow-gray-300 px-6 py-8 bg-white flex flex-col gap-1 rounded-md justify-center'>
                            <h3 className='text-[#0149AD] font-bold'>Real-Time Alerts</h3>
                            <p className='w-[300px] text-center md:w-[250px] md:text-center lg:text-left text-[10px] lg:w-[300px] text-gray-700'>
                                Job seekers receive instant notifications when new positions match their profiles, 
                                ensuring they never miss an opportunity.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='lg:hidden'>
                    <img src={happyPeople} alt="" className='h-[350px] flex items-center justify-center md:w-full md:h-[800px] lg:hidden lg:w-[550px]' />
                </div>
            </div>
        </section>

        <section className='flex flex-col gap-7 h-auto items-center md:mt-10 lg:mt-0  md:flex md:h-auto md:items-center xl:flex xl:items-center xl:h-auto xl:py-28 justify-center'>
            <div>
                <h1>Your Path To Financial Freedom In Just Few Steps!</h1>
            </div>
        </section>

         


    </div>
  );
};



export default Home;
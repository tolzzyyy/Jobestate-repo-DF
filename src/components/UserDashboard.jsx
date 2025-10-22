import React, { useState, useEffect } from 'react'
import { FaBars, FaBell, FaTimes } from 'react-icons/fa';
// import { FaAmazon } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../Assets/img/logo.png'
import { RiDashboardFill } from 'react-icons/ri';
import { BiSolidBriefcase } from 'react-icons/bi';
import { GrStatusGood } from 'react-icons/gr';
import { BsFillBookmarkCheckFill } from 'react-icons/bs';
import { TfiWrite } from 'react-icons/tfi';
import { IoPersonCircle } from 'react-icons/io5';
import { IoIosSettings } from 'react-icons/io';
// import { IoBookmarkOutline, IoBookmark } from "react-icons/io5"; // Import Save icon
// import { fetchJobs } from "../jobService";
import axios from "axios"
import { CiBookmark } from 'react-icons/ci';



// const jobCards = [
//   {
//     id: 1,
//     date: '20th May, 2024',
//     company: 'Amazon',
//     title: 'Senior UI/UX Designer',
//     jobTypes: ['Part-Time', 'Remote', 'Senior Level'],
//     salary: '$5,000',
//     currencyType: 'Annually',
//     logoUrl: 'path/to/logo', // Replace with your logo path or URL
//     isActive: false,
//   },
//   {
//     id: 2,
//     date: '20th May, 2024',
//     company: 'Google',
//     title: 'Senior Product Manager',
//     jobTypes: ['Part-Time', 'Remote', 'Senior Level'],
//     salary: '$5,000',
//     currencyType: 'Annually',
//     logoUrl: 'path/to/logo',
//     isActive: false, // Mark this card as active for the highlighted background
//   },
//   {
//     id: 3,
//     date: '20th May, 2024',
//     company: 'Google',
//     title: 'Front-End Development',
//     jobTypes: ['Part-Time', 'Remote', 'Senior Level'],
//     salary: '$5,000',
//     currencyType: 'Annually',
//     logoUrl: 'path/to/logo',
//     isActive: false, // Mark this card as active for the highlighted background
//   },
//   {
//     id: 4,
//     date: '20th May, 2024',
//     company: 'Google',
//     title: 'Senior Product Manager',
//     jobTypes: ['Part-Time', 'Remote', 'Senior Level'],
//     salary: '$5,000',
//     currencyType: 'Annually',
//     logoUrl: 'path/to/logo',
//     isActive: false, // Mark this card as active for the highlighted background
//   },
//   {
//     id: 5,
//     date: '20th May, 2024',
//     company: 'Google',
//     title: 'Senior Product Manager',
//     jobTypes: ['Part-Time', 'Remote', 'Senior Level'],
//     salary: '$5,000',
//     currencyType: 'Annually',
//     logoUrl: 'path/to/logo',
//     isActive: false, // Mark this card as active for the highlighted background
//   },
//   {
//     id: 6,
//     date: '20th May, 2024',
//     company: 'Google',
//     title: 'Senior Product Manager',
//     jobTypes: ['Part-Time', 'Remote', 'Senior Level'],
//     salary: '$5,000',
//     currencyType: 'Annually',
//     logoUrl: 'path/to/logo',
//     isActive: false, // Mark this card as active for the highlighted background
//   },
//   {
//     id: 6,
//     date: '20th May, 2024',
//     company: 'Google',
//     title: 'Senior Product Manager',
//     jobTypes: ['Part-Time', 'Remote', 'Senior Level'],
//     salary: '$5,000',
//     currencyType: 'Annually',
//     logoUrl: 'path/to/logo',
//     isActive: false, // Mark this card as active for the highlighted background
//   },
//   {
//     id: 6,
//     date: '20th May, 2024',
//     company: 'Google',
//     title: 'Senior Product Manager',
//     jobTypes: ['Part-Time', 'Remote', 'Senior Level'],
//     salary: '$5,000',
//     currencyType: 'Annually',
//     logoUrl: 'path/to/logo',
//     isActive: false, // Mark this card as active for the highlighted background
//   },
//   {
//     id: 6,
//     date: '20th May, 2024',
//     company: 'Google',
//     title: 'Senior Product Manager',
//     jobTypes: ['Part-Time', 'Remote', 'Senior Level'],
//     salary: '$5,000',
//     currencyType: 'Annually',
//     logoUrl: 'path/to/logo',
//     isActive: false, // Mark this card as active for the highlighted background
//   },
//   {
//     id: 6,
//     date: '20th May, 2024',
//     company: 'Google',
//     title: 'Senior Product Manager',
//     jobTypes: ['Part-Time', 'Remote', 'Senior Level'],
//     salary: '$5,000',
//     currencyType: 'Annually',
//     logoUrl: 'path/to/logo',
//     isActive: false, // Mark this card as active for the highlighted background
//   },
//   {
//     id: 6,
//     date: '20th May, 2024',
//     company: 'Google',
//     title: 'Senior Product Manager',
//     jobTypes: ['Part-Time', 'Remote', 'Senior Level'],
//     salary: '$5,000',
//     currencyType: 'Annually',
//     logoUrl: 'path/to/logo',
//     isActive: false, // Mark this card as active for the highlighted background
//   },
//   {
//     id: 6,
//     date: '20th May, 2024',
//     company: 'Google',
//     title: 'Senior Product Manager',
//     jobTypes: ['Part-Time', 'Remote', 'Senior Level'],
//     salary: '$5,000',
//     currencyType: 'Annually',
//     logoUrl: 'path/to/logo',
//     isActive: false, // Mark this card as active for the highlighted background
//   },
//   {
//     id: 6,
//     date: '20th May, 2024',
//     company: 'Google',
//     title: 'Senior Product Manager',
//     jobTypes: ['Part-Time', 'Remote', 'Senior Level'],
//     salary: '$5,000',
//     currencyType: 'Annually',
//     logoUrl: 'path/to/logo',
//     isActive: false, // Mark this card as active for the highlighted background
//   },
// ];

const UserDashboard = ({ job }) => {


  const [savedJobs, setSavedJobs] = useState([]);
  const [show, setShow] = useState(false)

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("https://jobestate-backend-repo-df.onrender.com/api/jobs"); // Axios will automatically proxy this
        console.log(response.data.data)
        setJobs(response.data.data);
      } catch (error) {
        setError("Failed to fetch jobs. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
    setSavedJobs(storedJobs);
  }, []);

  // Check if job is already saved
  const isSaved = savedJobs.some((savedJob) => savedJob?.id === job?.id);


  // Handle Save Job
  // const handleSaveJob = () => {
  //   let updatedJobs;
  //   if (isSaved) {
  //     // Remove job if already saved
  //     updatedJobs = savedJobs.filter((savedJob) => savedJob.id !== job.id);
  //   } else {
  //     // Add job to saved list
  //     updatedJobs = [...savedJobs, job];
  //   }

  //   setSavedJobs(updatedJobs);
  //   localStorage.setItem("savedJobs", JSON.stringify(updatedJobs)); // Persist to localStorage
  // };


  if (loading) return <p className='ml-72 text-blue-500'>Loading jobs...</p>;
  if (error) return <p className='ml-72 text-red-500'>{error}</p>;

  const HandleShow = () => {
    setShow(!show)
  }


  return (
    <div className='bg-[#EEF0F2] w-full h-[930px] overflow-y-hidden lg:ml-72 '>
      <div className='bg-white w-auto h-auto px-10 py-9 flex items-center justify-between shadow-sm'>
        {show ? <div className='lg:hidden overflow-auto flex flex-col absolute top-16 md:top-16 left-0 gap-[40px] py-7 md:py-10 px-7 md:px-14 bg-white w-full h-auto md:h-screen transition-all duration-500 font-medium text-[15px] md:text-[20px] text-[#2b2b2b] '>
          <div className='flex flex-col gap-10'>
            <div className='pl-2'>
              <img src={logo} alt="logo" className='w-[120px] md:w-[150px] lg:w-[150px]' />
            </div>
            <div className='w-full h-auto flex flex-col gap-4'>
              <NavLink
                to='/userdashboard'
                className={({ isActive }) =>
                  isActive ? 'bg-[#E8F1FD] text-[#1366D9] text-sm font-medium px-4 py-6 flex items-center gap-3 rounded-md' : 'bg-white text-[#5D6679] text-sm font-medium px-4 py-6 flex items-center gap-3 rounded-md'}

              ><RiDashboardFill size={23} /> Dashboard</NavLink>
              <NavLink
                to='/userjobs'
                className={({ isActive }) =>
                  isActive ? 'bg-[#E8F1FD] text-[#1366D9] text-sm  font-medium px-4 py-6 flex items-center gap-3 rounded-md' : 'bg-white text-[#5D6679] text-sm font-medium px-4 py-6 flex items-center gap-3 rounded-md'}

              ><BiSolidBriefcase size={23} /> Jobs</NavLink>
              <NavLink
                to='/userapplicationstatus'
                className={({ isActive }) =>
                  isActive ? 'bg-[#E8F1FD] text-[#1366D9] text-sm  font-medium px-4 py-6 flex items-center gap-3 rounded-md' : 'bg-white text-[#5D6679] text-sm font-medium px-4 py-6 flex items-center gap-3 rounded-md'}

              ><GrStatusGood size={23} /> Application Status</NavLink>
              <NavLink
                to='/usersavedjobs'
                className={({ isActive }) =>
                  isActive ? 'bg-[#E8F1FD] text-[#1366D9] text-sm  font-medium px-4 py-6 flex items-center gap-3 rounded-md' : 'bg-white text-[#5D6679] text-sm font-medium px-4 py-6 flex items-center gap-3 rounded-md'}

              ><BsFillBookmarkCheckFill size={23} /> Saved Jobs</NavLink>
              <NavLink
                to='/userblog'
                className={({ isActive }) =>
                  isActive ? 'bg-[#E8F1FD] text-[#1366D9] text-sm  font-medium px-4 py-6 flex items-center gap-3 rounded-md' : 'bg-white text-[#5D6679] text-sm font-medium px-4 py-6 flex items-center gap-3 rounded-md'}

              ><TfiWrite size={23} /> Blog</NavLink>
              <NavLink
                to='/usernotification'
                className={({ isActive }) =>
                  isActive ? 'bg-[#E8F1FD] text-[#1366D9] text-sm  font-medium px-4 py-6 flex items-center gap-3 rounded-md' : 'bg-white text-[#5D6679] text-sm font-medium px-4 py-6 flex items-center gap-3 rounded-md'}

              ><FaBell size={23} /> Notification</NavLink>
            </div>
          </div>
          <div className='w-full h-auto flex flex-col gap-4 border-t-[1px] border-black pt-4'>
            <NavLink
              to='/userprofile'
              className={({ isActive }) =>
                isActive ? 'bg-[#E8F1FD] text-[#1366D9] text-sm  font-medium px-4 py-6 flex items-center gap-3 rounded-md' : 'bg-white text-[#5D6679] text-sm font-medium px-4 py-6 flex items-center gap-3 rounded-md'}

            ><IoPersonCircle size={30} /> Profile</NavLink>
            <NavLink
              to='/usersettings'
              className={({ isActive }) =>
                isActive ? 'bg-[#E8F1FD] text-[#1366D9] text-sm  font-medium px-4 py-6 flex items-center gap-3 rounded-md' : 'bg-white text-[#5D6679] text-sm font-medium px-4 py-6 flex items-center gap-3 rounded-md'}

            ><IoIosSettings size={30} /> Settings</NavLink>
          </div>
        </div> : ""}
        <div className="flex items-center relative gap-6 xl:hidden">
          <div onClick={HandleShow} className="flex items-center">
            {show ? <FaTimes size={26} className="z-50 left-0 md:left-[70px]" /> : <FaBars size={26} />}
          </div>
        </div>
        <h4 className='font-semibold '>Welcome Back, User</h4>
        <div className='hidden lg:flex items-center gap-5'>
          <h4 className='text-[#323232] font-normal hidden md:flex'>Let's Find You A New Job!</h4>
          {/* <div className='hidden md:flex items-center gap-4 bg-[#E8F1FD] px-4 py-3 rounded-lg'>
            Complete Your Profile
            <div className='w-auto h-auto px-3 py-4 text-sm rounded-full bg-white border-2 border-[#1366D9] flex items-center'>
              60%
            </div>
          </div> */}
        </div>
      </div>


      <div className='p-10 h-full lg:h-screen'>
        <h1 className='font-semibold text-[20px] mb-5 md:text-[30px]'>Recommended Jobs</h1>

        <div className=" w-full h-auto items-center gap-y-6 lg:items-start md:grid-cols-2 lg:grid-cols-4 md:gap-x-20 md:gap-y-10  lg:gap-x-8 lg:gap-y-6">
          {jobs.length === 0 ? (
            <p className='ml-60 text-red-500'>No jobs available.</p>
          ) : (
            <div className='grid grid-cols-4 gap-x-4 gap-y-4 w-full h-auto'>
       {jobs.map((job) => (
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
               </div>
               <div className='flex justify-between items-center'>
                 <div className='flex flex-col'>
                   <h2 className="text-sm font-medium mb-1">{job.company_name}</h2>
                   <h3 className="text-xl font-semibold mb-2 text-[31px] leading-9 w-56">{job.title}</h3>
                 </div>
               </div>
               {/* Render job type directly */}
               <div className="flex gap-2 mb-2">
                 <span
                   key={job.id} // Use a unique key for the job type
                   className='px-2 py-1 flex items-center text-xs border rounded-full text-gray-900'>
                   {job.job_type}
                 </span>
               </div>
             </div>
             <div className="flex justify-between items-center px-4">
               <div>
                 <p className="text-xl font-bold">{job.maximum_salary}k</p>
                 <p className="text-sm text-gray-500">{job.salary_period}</p>
               </div>
               <Link to={`/userjobsdetails/${job.id_}`} className="px-2 py-2 md:border-2 border-[#013A8A] md:text-[12px] md:px-6 md:py-3 md:rounded-full text-[#013A8A] font-semibold xl:hover:text-white xl:hover:border-2 xl:hover:border-[#0149AD] xl:hover:bg-[#0149AD] xl:transition-all xl:duration-200">
                 Details
               </Link>
             </div>
           </div>
         ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default UserDashboard 
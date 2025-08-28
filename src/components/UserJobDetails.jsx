import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaBars, FaTimes, FaArrowCircleLeft, FaBell } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { RiDashboardFill } from 'react-icons/ri';
import { BiSolidBriefcase } from 'react-icons/bi';
import { GrStatusGood } from 'react-icons/gr';
import { BsFillBookmarkCheckFill } from 'react-icons/bs';
import { TfiWrite } from 'react-icons/tfi';
import { IoPersonCircle } from 'react-icons/io5';
import { IoIosSearch, IoIosSettings } from 'react-icons/io';
import { CiBookmark } from 'react-icons/ci';
import { IoFilterCircleOutline } from "react-icons/io5";
import { GoShareAndroid } from 'react-icons/go';
import axios from 'axios';
import logo from '../Assets/img/logo.png'

const UserJobDetails = () => {
  const { id } = useParams(); // Get the job ID from the URL
  const [job, setJob] = useState(null); // Initialize as null
  const [jobs, setJobs] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(`https://jobestate-backend-repo-df.onrender.com/api/jobs/${id}`);
        if (!response.ok) throw new Error("Job not found");
        const data = await response.json();
        console.log("API Response:", data); // Log the API response
        setJob(data.data || data); // Set the job object
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchRecommendedJobs = async () => {
      try {
        const response = await axios.get("https://jobestate-backend-repo-df.onrender.com/api/jobs"); // Axios will automatically proxy this
        console.log(response.data.data);
        setJobs(response.data.data);
      } catch (error) {
        setError("Failed to fetch jobs. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
    fetchRecommendedJobs(); // Fetch recommended jobs
  }, [id]);

  // Log the job state whenever it changes
  useEffect(() => {
    console.log("Job state updated:", job);
  }, [job]);

  if (loading) return <p className='ml-72 text-blue-500'>Loading job details...</p>;
  if (error) return <p className='ml-72 text-red-500'>{error}</p>;
  if (!job) return <p className='ml-72 text-red-500'>Job not found.</p>; // Handle case where job is null

  const HandleShow = () => {
    setShow(!show);
  };

  return (
    <div className='bg-[#EEF0F2] w-full h-screen overflow-y-auto md:overflow-hidden lg:ml-72'>
      <div className='bg-white w-auto h-auto px-10 py-10 flex items-center justify-between shadow-sm'>
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
        <h4 className='font-semibold '>Welcome Back, User</h4>
        <div className='hidden lg:flex items-center gap-5'>
          <h4 className='text-[#323232] font-normal hidden md:flex'>Let's Find You A New Job!</h4>
        </div>
      </div>

      {/* Main Content */}
      <div className='p-10 h-[calc(100vh-120px)] mt-[50px] flex justify-center md:overflow-hidden'>
        <div className='lg:w-9/12 h-auto lg:mr-11 flex flex-col gap-14 mb-10'>
          {/* Job Details */}
          <div className='flex flex-col gap-8'>
            <div className='w-16'>
              <NavLink to='/userjobs' className='text-black text-md flex items-center gap-2 w-auto'>
                <FaArrowCircleLeft />
                Back
              </NavLink>
            </div>
            <div className='flex w-full h-auto'>
              <div key={job.id} className='flex md:flex-row flex-col gap-11 justify-between md:gap-2 w-full'>
                <div className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-1'>
                    <h2 className='text-3xl font-semibold'>{job.title || "No title available"}</h2>
                    <span className='text-lg font-medium'>{job.company_name || "No company available"}</span>
                    <span className='text-md font-normal'>{job.job_type || "No job type available"}</span>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <p className='text-sm text-gray-500'>
                      Salary: ${job.minimum_salary || "N/A"} - ${job.maximum_salary || "N/A"} {job.salary_period || ""}
                    </p>
                  </div>
                </div>
                <div className='flex flex-col gap-0 md:gap-4 items-start md:items-end'>
                  <div className='flex items-center gap-2 mt-5'>
                    <button className='flex border-2 border-[#013A8A] transition-all duration-500 py-3 px-8 rounded-xl text-[#013A8A] font-semibold hover:text-white hover:border-2 hover:border-[#0149AD] hover:bg-[#0149AD]'>
                      Apply
                    </button>
                    <button className='flex items-center px-3 py-3 border-[1px] border-gray-400 rounded-lg'>
                      <CiBookmark size={22} />
                    </button>
                    <button className='flex items-center px-3 py-3 border-[1px] border-gray-400 rounded-lg'>
                      <GoShareAndroid size={22} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <h3 className='font-semibold'>About This Role</h3>
            <p className='text-sm text-gray-500 leading-6'>{job?.description || 'No description available.'}</p>
          </div>
          <div className='flex flex-col gap-2'>
            <h3 className='font-semibold'>Qualifications</h3>
            <p className='text-sm text-gray-500 leading-6'>{job?.description || 'No description available.'}</p>
          </div>
          <div className='flex flex-col gap-2'>
            <h3 className='font-semibold'>Responsibilities</h3>
            <p className='text-sm text-gray-500 leading-6'>{job?.responsibility || 'No responsibilities available.'}</p>
          </div>
          <div className='flex flex-col gap-2'>
            <h3 className='font-semibold'>Job Categories</h3>
            <ul className='text-sm text-gray-500 leading-6'>
              {job?.job_category_ids?.map((categoryId, index) => (
                <li key={index}>Category ID: {categoryId}</li>
              ))}
              {!job?.job_category_ids?.length && <li>No job categories available.</li>}
            </ul>
          </div>
        </div>

        {/* Recommended Jobs */}
        <div className='w-3/12 hidden lg:block h-full'>
  <h1 className='font-semibold text-[10px] md:text-[20px] sticky top-0 bg-[#EEF0F2] py-2'>Recommended Jobs</h1>
  <div className="grid w-full items-center h-[calc(100vh-260px)] mt-2 overflow-y-auto gap-y-6 lg:items-start grid-cols-1 pr-2">
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
        </div>
      </div>
    </div>
  );
};

export default UserJobDetails;
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
// import { IoIosSearch, IoIosSettings } from 'react-icons/io';
// import { CiBookmark } from 'react-icons/ci';
// import { IoFilterCircleOutline } from "react-icons/io5";
// import { FaArrowLeftLong } from "react-icons/fa6";
// import { GoShareAndroid } from "react-icons/go";
import donut from '../Assets/img/Donut and Shadow.png'


const candidates = [
  { name: "John Doe", role: "Software Engineer", appliedFor: "Frontend Developer", email: "johndoe@gmail.com", status: "Active" },
  { name: "Jane Smith", role: "Data Analyst", appliedFor: "Business Analyst", email: "janedoe@gmail.com", status: "Inactive" },
  { name: "John Doe", role: "Software Engineer", appliedFor: "Frontend Developer", email: "johndoe@gmail.com", status: "Active" },
  { name: "Jane Smith", role: "Data Analyst", appliedFor: "Business Analyst", email: "janedoe@gmail.com", status: "Inactive" },
  { name: "John Doe", role: "Software Engineer", appliedFor: "Frontend Developer", email: "johndoe@gmail.com", status: "Active" },
  { name: "Jane Smith", role: "Data Analyst", appliedFor: "Business Analyst", email: "janedoe@gmail.com", status: "Inactive" },
  // Add more candidates
];

const AdminJobSeekers = () => {
  return (
        <div className='mt-20 md:mt-32 w-full py-7 px-[20px] md:px-[50px] lg:px-[135px]'>
          <div className='flex justify-between w-full items-center bg-white'>
            <h1 className='text-5xl font-semibold'>View All Job Seekers</h1>
            <img src={donut} alt="" className='hidden md:flex'/>
          </div>
          <div className="overflow-x-auto mt-14 rounded-md shadow-lg">
            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead className="bg-white">
                <tr>
                  <th className="border border-gray-300 px-4 py-4 text-left">Candidate Name</th>
                  <th className="border border-gray-300 px-4 py-4 text-left">Role</th>
                  <th className="border border-gray-300 px-4 py-4 text-left">Email Address</th>
                  {/* <th className="border border-gray-300 px-4 py-4 text-left">Role Applied For</th> */}
                  <th className="border border-gray-300 px-4 py-4 text-left">View CV</th>
                  <th className="border border-gray-300 px-4 py-4 text-left">Status</th>
                  <th className="border border-gray-300 px-4 py-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {candidates.map((candidate, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2">{candidate.name}</td>
                    <td className="border border-gray-300 px-4 py-2">{candidate.role}</td>
                    <td className="border border-gray-300 px-4 py-2">{candidate.email}</td>
                    {/* <td className="border border-gray-300 px-4 py-2">{candidate.appliedFor}</td> */}
                    <td className="border border-gray-300 px-4 py-2">
                      <button className="text-blue-600 hover:underline">View CV</button>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {candidate.status}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 flex gap-3">
                      <input type="checkbox" name="" id="" />
                      <p>Delete</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
  )
}

export default AdminJobSeekers
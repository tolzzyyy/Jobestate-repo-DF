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

const candidates = [
  { name: "John Doe", role: "Software Engineer", appliedFor: "Frontend Developer" },
  { name: "Jane Smith", role: "Data Analyst", appliedFor: "Business Analyst" },
  { name: "John Doe", role: "Software Engineer", appliedFor: "Frontend Developer" },
  { name: "Jane Smith", role: "Data Analyst", appliedFor: "Business Analyst" },
  { name: "John Doe", role: "Software Engineer", appliedFor: "Frontend Developer" },
  { name: "Jane Smith", role: "Data Analyst", appliedFor: "Business Analyst" },
  // Add more candidates
];


const EmployerApplicants = () => {
  return (
    <div className='w-full h-full lg:px-[130px] mt-24 md:mt-36'>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">Candidate Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Role</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Role Applied For</th>
              <th className="border border-gray-300 px-4 py-2 text-left">View CV</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Accept</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Decline</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">{candidate.name}</td>
                <td className="border border-gray-300 px-4 py-2">{candidate.role}</td>
                <td className="border border-gray-300 px-4 py-2">{candidate.appliedFor}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button className="text-blue-600 hover:underline">View CV</button>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <input type="checkbox" name="" id="" />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <input type="checkbox" name="" id="" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default EmployerApplicants
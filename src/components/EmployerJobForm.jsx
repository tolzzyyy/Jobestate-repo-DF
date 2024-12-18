import React from "react";
// import RegistrationProgress from "./RegistrationProgress";
// import bg from "../Assets/bg.png";
// import logo from "../Assets/Logo - Horizontal.png";
// import { FaPlus } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";


const EmployerJobForm = () => {
//   const bgimage = {
//     backgroundImage: `url(${bg})`,
//     backgroundPosition: "center",
//     backgroundSize: "cover",

//   };
  const handleSubmit = (e) => {
    e.preventDefault();

      navigate("/employerjobs");
    }
 
  const navigate = useNavigate();

  
  return (
    <div
      className="w-full flex justify-center h-screen mt-24 md:mt-32 md:h-screen p-6 bg-white shadow-lg rounded-lg"
    //   style={bgimage}
    >
      {/* <div className="flex justify-between items-center mb-8">
        <div className="flex-1">
          <img src={logo} className="w-[150px] md:w-[200px]" alt="Logo" />
        </div>

        <div className="xl:flex-1 hidden xl:flex justify-center">
          <RegistrationProgress currentStep={2} />
        </div>

        <div className="flex-1 flex justify-end">
          <button
            type="button"
            onClick={() => navigate("/employerjobs")}
            className="text-blue-600 hover:underline"
          >
            Skip
          </button>
        </div>
      </div> */}

      <form
        onSubmit={handleSubmit}
        className="max-w-[674px] md:h-full overflow-auto flex-col gap-5 mt-6 md:mt-[70px] w-full"
      >
        <div className="w-full flex overflow-auto scrollbar-hide  flex-col gap-5 ">
        <h1 className="text-2xl font-bold mb-4">Post a New Job</h1>
          {/* First Name */}
          <div className="w-full flex flex-col gap-1">
            <h1 className="text-[14px] text-[#012C68]">JOB TITLE</h1>
            <input
              type="text"
              //   name="fullName"
              //   value={formData.fullName}
              //   onChange={handleChange}
              placeholder="Enter Job Title"
              className={`
                w-full outline-none rounded-[6px] border-[1px] text-[14px] p-3 text-[#98A2B3] font-[300] border-[#E1E1E1] h-[50px]
           
              `}
            />
          </div>

          {/* Last Name */}
          <div className="w-full flex flex-col gap-1">
            <h1 className="text-[14px] text-[#012C68]">Job Description</h1>
            <input
              type="text"
              //   name="fullName"
              //   value={formData.fullName}
              //   onChange={handleChange}
              placeholder="Enter Job Description"
              className={`
                w-full outline-none rounded-[6px] border-[1px] text-[14px] p-3 text-[#98A2B3] font-[300] border-[#E1E1E1] h-[150px]
          
              `}
            />
          </div>


            {/* Job Category */}
            <div className="w-full flex flex-col gap-1">
                <h1 className="text-[14px] text-[#012C68]">Job Description</h1>
                <select className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 mb-4">
                    <option>Select a category</option>
                    <option>IT</option>
                    <option>Healthcare</option>
                    <option>Education</option>
                </select>
            </div>

            {/* Salary */}
            <div className="flex gap-4 mb-4">
                <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Salary</label>
                <input 
                    type="number" 
                    placeholder="e.g. 50,000" 
                    className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
                />
                </div>
                <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Maximum Salary</label>
                <input 
                    type="number" 
                    placeholder="e.g. 80,000" 
                    className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
                />
                </div>
            </div>

            {/* Submit */}
            <Link to='/employerjobs'  className="w-full flex justify-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                Publish Job
            </Link >

        </div>




      </form>
    </div>
  );
};

export default EmployerJobForm;

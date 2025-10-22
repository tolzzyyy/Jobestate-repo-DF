import React from "react";
import RegistrationProgress from "./RegistrationProgress";
import bg from "../Assets/img/bg.png";
import logo from "../Assets/img/Logo - Horizontal.png";
import { FaPlus } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const Experience = () => {
  const bgimage = {
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",

  };
  const handleSubmit = (e) => {
    e.preventDefault();

      navigate("/register/education");
    }
 
  const navigate = useNavigate();

  
  return (
    <div
      className="lg:mx-auto w-full h-full md:h-screen p-6 bg-white shadow-lg rounded-lg"
      style={bgimage}
    >
      <div className="flex justify-between items-center mb-8">
        <div className="flex-1">
          <img src={logo} className="w-[150px] md:w-[200px]" alt="Logo" />
        </div>

        <div className="xl:flex-1 hidden xl:flex justify-center">
          <RegistrationProgress currentStep={2} />
        </div>

        <div className="flex-1 flex justify-end">
          <button
            type="button"
            onClick={() => navigate("/register/education")}
            className="text-blue-600 hover:underline"
          >
            Skip
          </button>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-[674px] md:h-[600px] overflow-auto  flex flex-col gap-5 mt-6 md:mt-[70px] lg:mx-auto"
      >
        <div className="w-full flex overflow-auto scrollbar-hide  flex-col gap-5 ">
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
            <h1 className="text-[14px] text-[#012C68]">COMPANY NAME</h1>
            <input
              type="text"
              //   name="fullName"
              //   value={formData.fullName}
              //   onChange={handleChange}
              placeholder="Enter Company Name"
              className={`
                w-full outline-none rounded-[6px] border-[1px] text-[14px] p-3 text-[#98A2B3] font-[300] border-[#E1E1E1] h-[50px]
          
              `}
            />
          </div>

          {/* Location */}
          <div className="w-full flex flex-col gap-1">
            <div className="flex flex-col gap-1">
              <h1 className="text-[14px] text-[#012C68]">DURATION</h1>
              <input
                type="text"
                placeholder="Start Date"
                className={`
                w-full outline-none rounded-[6px] border-[1px] text-[14px] p-3 text-[#98A2B3] font-[300] border-[#E1E1E1] h-[50px]
      
              `}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="End Date"
                className={`
                w-full outline-none rounded-[6px] border-[1px] text-[14px] p-3 text-[#98A2B3] font-[300] border-[#E1E1E1] h-[50px]
      
              `}
              />
            </div>
          </div>

          {/* Date */}
          <div className="w-full flex flex-col gap-1">
            <h1 className="text-[14px] text-[#012C68]">JOB DESCRIPTION</h1>

            <textarea
              placeholder="Enter Description and Role"
              className={`
    w-full 
    outline-none 
    rounded-[6px] 
    border-[1px] 
    text-[14px] 
    p-3 
    text-[#98A2B3] 
    font-[300] 
    border-[#E1E1E1] 
    h-[140px] 
    resize-none 
    align-top
  `}
            />

            <div className="w-full mt-2 border-[#E1E1E1] border-[1px] p-2 rounded-[6px] flex items-center gap-3 h-[70px] bg-white">
                <FaPlus/> <p className="text-[#98A2B3] text-[14px]">Add another Experience</p>
            </div>
          </div>
          <div className="flex items-center justify-center w-full gap-[30px]">
            <Link to='/register/personal' className=" w-[162px] rounded-[20px] text-[#013A8A] border-[#013A8A] border-[2px]  h-[64px]  flex items-center justify-center hover:bg-blue-600 transition-colors">
              Back
            </Link>
            <button
              type="submit"
              className="w-[162px] flex items-center justify-center h-[64px] rounded-[20px] text-[#013A8A] border-[#013A8A] border-[2px]"
            >
              Continue
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Experience;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createJob } from "../jobService";

const EmployerJobForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    minimum_salary: "",
    maximum_salary: "",
    company_name: "",
    job_type: "Full-time", // Default value
    salary_period: "Monthly", // Default value
    job_category_ids: [], // Example: [1, 3]
  });

  const [categories] = useState([ // Example categories
    { id: 1, name: "Engineering" },
    { id: 2, name: "Marketing" },
    { id: 3, name: "Finance" },
  ]);

  const [statusMessage, setStatusMessage] = useState(""); // To store the success/error message
  const [statusType, setStatusType] = useState(""); // To track the status type (success, failure, error)

  const navigate = useNavigate(); // for redirecting

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCategoryChange = (e) => {
    const value = parseInt(e.target.value, 10);
    const selectedCategories = [...formData.job_category_ids];

    if (selectedCategories.includes(value)) {
      setFormData({
        ...formData,
        job_category_ids: selectedCategories.filter((id) => id !== value),
      });
    } else {
      setFormData({
        ...formData,
        job_category_ids: [...selectedCategories, value],
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData); // Debug log

    try {
      const jobData = {
        ...formData,
        minimum_salary: Number(formData.minimum_salary),
        maximum_salary: Number(formData.maximum_salary),
      };
      const newJob = await createJob(jobData);
      console.log("Job created successfully:", newJob); // Debug log

      setStatusMessage("Job created successfully!");
      setStatusType("success");

      // Redirect after 3 seconds
      setTimeout(() => {
        // Redirect to EmployerJobs page (or AdminDashboard, depending on user role)
        navigate("/employerjobs", {
          state: { job: newJob }, // passing job data as state to the next page
        });
      }, 3000);

    } catch (error) {
      console.error("Failed to create job:", error); // Debug log
      setStatusMessage("Failed to create job. Please try again.");
      setStatusType("error");
    }
  };


  
  return (
    <div
      className="w-full flex justify-center h-full mt-24 md:mt-32 md:h-full p-6 bg-white shadow-lg rounded-lg"
    //   style={bgimage}
    >

      <form
        onSubmit={handleSubmit}
        className="max-w-[674px] md:h-screen overflow-auto flex-col gap-5 mt-6 md:mt-[70px] w-full"
      >
        <div className="w-full flex overflow-auto scrollbar-hide  flex-col gap-5 ">

          {/* Status Message */}
          {statusMessage && (
            <div
              className={`mb-4 p-3 rounded-md text-center ${
                statusType === "success"
                  ? "bg-green-200 text-green-800"
                  : statusType === "error"
                  ? "bg-red-200 text-red-800"
                  : "bg-yellow-200 text-yellow-800"
              }`}
            >
              {statusMessage}
            </div>
          )}

        <h1 className="text-2xl font-bold mb-4">Post a New Job</h1>

          <div className="w-full flex flex-col gap-1">
            <h1 className="text-[14px] text-[#012C68]">COMPANY NAME</h1>
            <input
         type="text"
         name="company_name"
         value={formData.company_name}
         onChange={handleChange}
              placeholder="Enter Company Name"
              className={`
                w-full outline-none rounded-[6px] border-[1px] text-[14px] p-3 text-black font-[300] border-[#E1E1E1] h-[50px]
           
              `}
            />
          </div>

          
          <div className="w-full flex flex-col gap-1">
            <h1 className="text-[14px] text-[#012C68]">JOB TITLE</h1>
            <input
              type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
              placeholder="Enter Job Title"
              className={`
                w-full outline-none rounded-[6px] border-[1px] text-[14px] p-3 text-black font-[300] border-[#E1E1E1] h-[50px]
           
              `}
            />
          </div>

         
          <div className="w-full flex flex-col gap-1">
            <h1 className="text-[14px] text-[#012C68]">Job Description</h1>
            <textarea type="text" id=""
                name="description"
                value={formData.description}
                onChange={handleChange}
             placeholder="Enter Job Description" 
                          className={`
                            w-full outline-none rounded-[6px] border-[1px] text-[14px] p-3 text-black font-[300] border-[#E1E1E1] h-[100px]
                      
                          `}></textarea>
            {/* <input
              type="text"
              //   name="fullName"
              //   value={formData.fullName}
              //   onChange={handleChange}
              placeholder="Enter Job Description"
              className={`
                w-full outline-none rounded-[6px] border-[1px] text-[14px] p-3 text-[#98A2B3] font-[300] border-[#E1E1E1] h-[100px]
          
              `}
            /> */}
          </div>



      {/* Job Categories */}
      <div className="mb-4">
      <h1 className="text-[14px] text-[#012C68]">Job Category</h1>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <label key={category.id} className="flex items-center gap-2">
              <input
                type="checkbox"
                value={category.id}
                checked={formData.job_category_ids.includes(category.id)}
                onChange={handleCategoryChange}
              />
                  {category.name}
            </label>
          ))}
        </div>
      </div>

            {/* Salary */}
            <div className="flex gap-4 mb-4">
                <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Salary</label>
                <input 
                    type="number"
                    name="minimum_salary"
                    value={formData.minimum_salary}
                    onChange={handleChange}
                    placeholder="e.g. 50,000" 
                    className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
                />
                </div>
                <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Maximum Salary</label>
                <input 
               type="number"
               name="maximum_salary"
               value={formData.maximum_salary}
               onChange={handleChange}
                    placeholder="e.g. 80,000" 
                    className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
                />
                </div>
            </div>


                  {/* Salary Period */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Salary Period</label>
        <select
          name="salary_period"
          value={formData.salary_period}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        >
          <option value="Annual">Annual</option>
          <option value="Monthly">Monthly</option>
        </select>
      </div>


      {/* Job Type */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Job Type</label>
        <select
          name="job_type"
          value={formData.job_type}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        >
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
          <option value="On-Site">On-Site</option>
        </select>
      </div>



            {/* Submit
            <Link to='/employerjobs'>
                Publish Job
            </Link > */}

        <button
        type="submit"
        className="w-full flex justify-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"      
        >
                Publish Job

            {/* <Link to='/employerjobs'>
                Publish Job
            </Link >  */}
      </button>

        </div>




      </form>
    </div>
  );
};

export default EmployerJobForm;

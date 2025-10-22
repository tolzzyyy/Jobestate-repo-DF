import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EmployerJobForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    responsibility: "", // Added
    qualifications: [], // Added
    minimum_salary: "",
    maximum_salary: "",
    company_name: "",
    job_type: "Full-time",
    salary_period: "Monthly",
    job_category_ids: [],
  });

  const [categories] = useState([
    { id: 1, name: "Engineering" },
    { id: 2, name: "Marketing" },
    { id: 3, name: "Finance" },
  ]);

  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");
  const navigate = useNavigate();

  const createJob = async (jobData) => {
    const token = localStorage.getItem('authToken');
    if (!token) throw new Error('No authentication token found');

    try {
      const response = await axios.post(
        "https://jobestate-backend-repo-df.onrender.com/api/jobs",
        jobData,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          }
        }
      );
      return response.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      throw new Error(message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCategoryChange = (e) => {
    const value = parseInt(e.target.value, 10);
    const selectedCategories = [...formData.job_category_ids];
    setFormData({
      ...formData,
      job_category_ids: selectedCategories.includes(value)
        ? selectedCategories.filter((id) => id !== value)
        : [...selectedCategories, value],
    });
  };

  const handleQualificationsChange = (e) => {
    const quals = e.target.value
      .split("\n")
      .map((q) => q.trim())
      .filter((q) => q !== "");
    setFormData({ ...formData, qualifications: quals });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage("");
    setStatusType("");

    // Validate required fields
    if (
      !formData.title ||
      !formData.description ||
      !formData.responsibility ||
      !formData.company_name ||
      formData.qualifications.length === 0
    ) {
      setStatusMessage("Please fill in all required fields");
      setStatusType("error");
      return;
    }

    // Validate salary
    if (
      (formData.minimum_salary && !formData.maximum_salary) ||
      (!formData.minimum_salary && formData.maximum_salary)
    ) {
      setStatusMessage("Please provide both minimum and maximum salary or leave both empty");
      setStatusType("error");
      return;
    }

    try {
      const jobData = {
        ...formData,
        minimum_salary: formData.minimum_salary ? Number(formData.minimum_salary) : null,
        maximum_salary: formData.maximum_salary ? Number(formData.maximum_salary) : null,
      };

      const newJob = await createJob(jobData);
      
      setStatusMessage("Job created successfully!");
      setStatusType("success");

      setTimeout(() => navigate("/userjobs", { state: { job: newJob } }), 2000);
    } catch (error) {
      setStatusMessage(error.message || "Failed to create job");
      setStatusType("error");
    }
  };

  return (
    <div className="w-full flex justify-center h-full mt-24 md:mt-32 p-6 bg-white shadow-lg rounded-lg">
      <form onSubmit={handleSubmit} className="max-w-[674px] w-full">
        <div className="w-full flex flex-col gap-5">
          <div className="flex justify-between w-full">
            <h1 className="text-2xl font-bold mb-4">Post a New Job</h1>
            <h1 className="text-2xl font-bold mb-4">Company Name</h1>
          </div>

          {statusMessage && (
            <div className={`p-3 rounded-md text-center ${
              statusType === "success" ? "bg-green-200 text-green-800" 
              : "bg-red-200 text-red-800"
            }`}>
              {statusMessage}
            </div>
          )}

          {/* Company Name */}
          {/* <div className="w-full flex flex-col gap-1">
            <label className="text-[14px] text-[#012C68]">USER NAME</label>
            <input
              type="text"
              name="company_name"
              value={formData.company_name}
              onChange={handleChange}
              placeholder="Enter UserName"
              className="w-full p-3 h-[50px] border rounded-[6px]"
              required
            />
          </div> */}

          {/* Job Title */}
          <div className="w-full flex flex-col gap-1">
            <label className="text-[14px] text-[#012C68]">JOB TITLE</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter Job Title"
              className="w-full p-3 h-[50px] border rounded-[6px]"
              required
            />
          </div>

          {/* Job Description */}
          <div className="w-full flex flex-col gap-1">
            <label className="text-[14px] text-[#012C68]">DESCRIPTION</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter Job Description"
              className="w-full p-3 h-[100px] border rounded-[6px]"
              required
            />
          </div>

          {/* Responsibilities */}
          <div className="w-full flex flex-col gap-1">
            <label className="text-[14px] text-[#012C68]">RESPONSIBILITIES</label>
            <textarea
              name="responsibility"
              value={formData.responsibility}
              onChange={handleChange}
              placeholder="Describe Job Responsibilities"
              className="w-full p-3 h-[100px] border rounded-[6px]"
              required
            />
          </div>

          {/* Qualifications */}
          <div className="w-full flex flex-col gap-1">
            <label className="text-[14px] text-[#012C68]">
              QUALIFICATIONS (one per line)
            </label>
            <textarea
              name="qualifications"
              value={formData.qualifications.join("\n")}
              onChange={handleQualificationsChange}
              placeholder="Example:
- Bachelor's Degree
- 2+ years experience"
              className="w-full p-3 h-[100px] border rounded-[6px]"
              required
            />
          </div>

          {/* Job Categories */}
          <div className="w-full flex flex-col gap-1">
            <label className="text-[14px] text-[#012C68]">CATEGORIES</label>
            <div className="flex flex-wrap gap-4">
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

          {/* Salary Fields */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-[14px] text-[#012C68]">SALARY</label>
              <input
                type="number"
                name="salary"
                value={formData.minimum_salary}
                onChange={handleChange}
                placeholder="e.g., 50000"
                className="w-full p-3 h-[50px] border rounded-[6px]"
              />
            </div>
            {/* <div className="flex-1">
              <label className="text-[14px] text-[#012C68]">MAX SALARY</label>
              <input
                type="number"
                name="maximum_salary"
                value={formData.maximum_salary}
                onChange={handleChange}
                placeholder="e.g., 80000"
                className="w-full p-3 h-[50px] border rounded-[6px]"
              />
            </div> */}
          </div>

          {/* Salary Period */}
          <div className="w-full flex flex-col gap-1">
            <label className="text-[14px] text-[#012C68]">SALARY PERIOD</label>
            <select
              name="salary_period"
              value={formData.salary_period}
              onChange={handleChange}
              className="w-full p-3 h-[50px] border rounded-[6px]"
            >
              <option value="Annual">Annual</option>
              <option value="Monthly">Monthly</option>
            </select>
          </div>

          {/* Job Type */}
          <div className="w-full flex flex-col gap-1">
            <label className="text-[14px] text-[#012C68]">JOB TYPE</label>
            <select
              name="job_type"
              value={formData.job_type}
              onChange={handleChange}
              className="w-full p-3 h-[50px] border rounded-[6px]"
            >
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
              <option value="On-Site">On-Site</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 mt-4"
          >
            Publish Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployerJobForm;
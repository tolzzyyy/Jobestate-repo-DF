import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import bg from "../Assets/img/bg.png";
import logo from "../Assets/img/Logo - Horizontal.png";
import { FaEye, FaEyeSlash, FaPlus } from "react-icons/fa";
// import { BiCheck } from "react-icons/bi";

const EmployerSignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    bio: "",
    jobCategory: "",
    jobDescription: "",
    skills: "",
    location: "",
    role: "employer",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const bgimage = {
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  // 🔍 Validation (light)
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Company name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password || formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!formData.bio) newErrors.bio = "Bio is required";
    if (!formData.jobCategory) newErrors.jobCategory = "Industry is required";
    if (!formData.jobDescription)
      newErrors.jobDescription = "Description is required";
    if (!formData.location) newErrors.location = "Location is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✏️ Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setApiError(null);
  };

  // 🚀 Submit to API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setApiError(null);

    if (!validateForm()) return;
    setIsLoading(true);

    try {
      const payload = {
        ...formData,
        skills: formData.skills
          ? formData.skills.split(",").map((s) => s.trim())
          : [],
      };

      console.log("🔹 Sending signup data:", formData);
      const response = await axios.post(
        "https://jobestate-23.onrender.com/api/auth/register",
        payload
      );

      console.log("✅ Registered Employer:", response.data);

      alert("Employer account created successfully!");
      navigate("/signin");
    } catch (error) {
      console.error("❌ Signup failed:", error);
      setApiError(
        error.response?.data?.message || "Signup failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full mx-auto h-full md:h-screen flex items-center justify-center">
      <div className="xl:flex h-full items-center w-full">
        <div
          className="w-full py-2 h-full overflow-auto px-5 md:px-10"
          style={bgimage}
        >
          <div className="flex gap-4 h-full flex-col">
            <Link to="/" className="w-[150px] md:w-[200px]">
              <img src={logo} alt="" />
            </Link>

            <div className="mx-auto mt-5 flex flex-col overflow-auto scrollbar-hide w-full md:w-[400px] h-full md:h-screen">
              <div className="text-left w-full md:text-center">
                <h1 className="font-sans text-[40px] font-[600]">
                  Create Company Account
                </h1>
                <p className="text-[#6B6B6B] text-[14px] font-[600]">
                  Sign up to create exclusive job updates!
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-5 py-5"
              >
                {/* Upload */}
                <div className="md:flex-row flex-col flex md:items-center gap-6 mt-6">
                  <div className="md:w-[100px] w-full h-[300px] flex items-center justify-center border-[1px] border-[#1155B2] md:h-[100px]">
                    <FaPlus className="text-[#1155B2]" size={25} />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div>
                      <h1 className="text-[14px] font-[300]">
                        Please upload square image, size less than 100KB
                      </h1>
                    </div>
                    <div className="flex items-center gap-6">
                      <input type="file" id="fileInput" className="hidden" />
                      <label
                        htmlFor="fileInput"
                        className="w-[133px] h-[42px] border-[#0149AD] text-[#0149AD] rounded-[5px] flex items-center justify-center border-[1px] cursor-pointer hover:bg-blue-50 transition-colors"
                      >
                        Choose File
                      </label>
                    </div>
                  </div>
                </div>

                {/* COMPANY NAME */}
                <Input
                  label="COMPANY NAME"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  error={errors.fullName}
                  placeholder="Enter Company Name"
                />

                {/* EMAIL */}
                <Input
                  label="COMPANY EMAIL ADDRESS"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  error={errors.email}
                  placeholder="Enter Company Email Address"
                />

                {/* BIO */}
                <Input
                  label="BIO"
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  error={errors.bio}
                  placeholder="Enter short bio"
                />

                {/* INDUSTRY */}
                <Input
                  label="INDUSTRY"
                  name="jobCategory"
                  value={formData.jobCategory}
                  onChange={handleInputChange}
                  error={errors.jobCategory}
                  placeholder="Enter Industry"
                />

                {/* JOB DESCRIPTION */}
                <Input
                  label="JOB DESCRIPTION"
                  name="jobDescription"
                  value={formData.jobDescription}
                  onChange={handleInputChange}
                  error={errors.jobDescription}
                  placeholder="Describe your company or hiring goals"
                />

                {/* SKILLS */}
                <Input
                  label="SKILLS (comma separated)"
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  placeholder="e.g. React, Node.js, Figma"
                />

                {/* LOCATION */}
                <Input
                  label="LOCATION"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  error={errors.location}
                  placeholder="Enter Location"
                />

                {/* PASSWORD */}
                <div className="w-full flex flex-col gap-1">
                  <h1 className="text-[14px] text-[#012C68]">PASSWORD</h1>
                  <div className="relative">
                    <input
                      className={`w-full outline-none rounded-[6px] border-[1px] text-[14px] p-3 text-[#98A2B3] font-[400] ${
                        errors.password
                          ? "border-red-500"
                          : "border-[#E1E1E1]"
                      } h-[50px] pr-10`}
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Enter Password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#98A2B3]"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-[10px] mt-1">
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* API Error */}
                {apiError && (
                  <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                    role="alert"
                  >
                    <span className="block sm:inline">{apiError}</span>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full flex items-center justify-center text-white rounded-[6px] h-[50px] ${
                    isLoading ? "bg-gray-400" : "bg-[#0149AD]"
                  }`}
                >
                  {isLoading ? "Processing..." : "Create Account"}
                </button>

                <div className="text-[#667185] text-center text-[14px] font-[400] mt-4">
                  Already have an account?{" "}
                  <Link to="/signin" className="font-[500] text-[#0149AD]">
                    Sign in
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 🔹 Reusable Input Component
const Input = ({ label, name, value, onChange, error, placeholder }) => (
  <div className="w-full flex flex-col gap-1">
    <h1 className="text-[14px] text-[#012C68]">{label}</h1>
    <input
      className={`w-full outline-none rounded-[6px] border-[1px] text-[14px] p-3 text-[#98A2B3] font-[400] ${
        error ? "border-red-500" : "border-[#E1E1E1]"
      } h-[50px]`}
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
    {error && <p className="text-red-500 text-[10px] mt-1">{error}</p>}
  </div>
);

export default EmployerSignUp;

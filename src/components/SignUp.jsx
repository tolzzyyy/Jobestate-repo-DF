import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../api"; // ✅ import API
import bg from "../Assets/img/bg.png";
import logo from "../Assets/img/Logo - Horizontal.png";
import { BiCheck } from "react-icons/bi";
import { FaEye, FaEyeSlash, FaPlus } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const SignUp = () => {
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
    resume: null, // optional file
    companyLogo: null, // optional file
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

  // ✅ simple validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password || formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    if (!formData.bio) newErrors.bio = "Bio is required";
    if (!formData.jobCategory)
      newErrors.jobCategory = "Job category is required";
    if (!formData.jobDescription)
      newErrors.jobDescription = "Job description is required";
    if (!formData.skills) newErrors.skills = "Skills are required";
    if (!formData.location) newErrors.location = "Location is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    setApiError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setApiError(null);

    if (!validateForm()) return;

    setIsLoading(true);
    try {
      await register(formData);
      navigate("/userdashboard"); // ✅ server sets cookie automatically
    } catch (err) {
      setApiError(err.response?.data?.message || "Registration failed");
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
              <img src={logo} alt="Logo" />
            </Link>
            <div className="mx-auto mt-5 md:mt-0 flex flex-col overflow-auto scrollbar-hide w-full md:w-[400px] h-full md:h-screen">
              <div className="text-left w-full md:text-center">
                <h1 className="font-sans text-[40px] font-[600]">
                  Create Account
                </h1>
                <p className="text-[#6B6B6B] text-[14px] font-[600]">
                  Sign up to get exclusive job updates!
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-5 py-5"
              >
                {/* File Upload */}
                {/* File Upload */}
                {/* <div className="md:flex-row flex-col flex md:items-center gap-6 mt-6">
                  <div className="md:w-[100px] w-full h-[300px] flex items-center justify-center border-[1px] border-[#1155B2] md:h-[100px]">
                    {formData.companyLogo ? (
                      <img
                        src={URL.createObjectURL(formData.companyLogo)}
                        alt="Logo Preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <FaPlus className="text-[#1155B2]" size={25} />
                    )}
                  </div>
                  <div className="flex flex-col gap-4">
                    <h1 className="text-[14px] font-[300]">
                      Please upload square image, size less than 100KB
                    </h1>
                    <div className="flex items-center gap-6">
                      <input
                        type="file"
                        id="companyLogo"
                        name="companyLogo"
                        className="hidden"
                        onChange={handleInputChange}
                        accept="image/*"
                      />
                      <label
                        htmlFor="companyLogo"
                        className="w-[133px] h-[42px] border-[#0149AD] text-[#0149AD] rounded-[5px] flex items-center justify-center border-[1px] cursor-pointer hover:bg-blue-50 transition-colors"
                      >
                        Choose File
                      </label>
                      <p className="text-[#A4A4A4] text-[14px] font-[300]">
                        {formData.companyLogo?.name || ""}
                      </p>
                    </div>
                  </div>
                </div> */}

                {/* Full Name */}
                <InputField
                  label="FULL NAME"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  error={errors.fullName}
                  placeholder="Enter Full Name"
                />

                {/* Email */}
                <InputField
                  label="EMAIL ADDRESS"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  error={errors.email}
                  placeholder="Enter Email Address"
                />

                {/* Bio */}
                <InputField
                  label="BIO"
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  error={errors.bio}
                  placeholder="Enter Bio"
                  hint="Less than 30 words"
                />

                {/* Job Category */}
                <InputField
                  label="JOB CATEGORY"
                  name="jobCategory"
                  value={formData.jobCategory}
                  onChange={handleInputChange}
                  error={errors.jobCategory}
                  placeholder="Select Job Category"
                  icon={showPassword ? <FiChevronDown /> : <FiChevronUp />}
                  iconClick={() => setShowPassword(!showPassword)}
                />

                {/* Job Description */}
                <InputField
                  label="JOB DESCRIPTION"
                  name="jobDescription"
                  value={formData.jobDescription}
                  onChange={handleInputChange}
                  error={errors.jobDescription}
                  placeholder="e.g Graphic Designer, Web Developer etc"
                />

                {/* Skills */}
                <InputField
                  label="SKILLS"
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  error={errors.skills}
                  placeholder="e.g Figma, React etc"
                />

                {/* Location */}
                <InputField
                  label="LOCATION"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  error={errors.location}
                  placeholder="Enter Location"
                />

                {/* Password */}
                <InputField
                  label="PASSWORD"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  error={errors.password}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                  iconClick={() => setShowPassword(!showPassword)}
                />

                {/* Password Requirements */}
                <div className="mt-2">
                  <p className="text-[14px]">Create a Password that:</p>
                  <p className="flex gap-2 text-[9px] items-center">
                    <BiCheck className="text-green-300" size={20} /> At least 8
                    characters
                  </p>
                  <p className="flex gap-2 text-[9px] items-center">
                    <BiCheck className="text-green-300" size={20} /> Lowercase &
                    uppercase letters
                  </p>
                  <p className="flex gap-2 text-[9px] items-center">
                    <BiCheck className="text-green-300" size={20} /> At least
                    one number
                  </p>
                </div>

                {/* API Error */}
                {apiError && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                    {apiError}
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
        <div className="w-full">
          <img
            className="w-full hidden xl:flex bg-center object-cover h-screen"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

// 🔹 Small reusable InputField
const InputField = ({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
  icon,
  iconClick,
  hint,
}) => (
  <div className="w-full flex flex-col gap-1">
    <h1 className="text-[14px] text-[#012C68]">{label}</h1>
    <div className="relative">
      <input
        className={`w-full outline-none rounded-[6px] border-[1px] text-[14px] p-3 text-[#98A2B3] font-[400] ${
          error ? "border-red-500" : "border-[#E1E1E1]"
        } h-[50px] pr-10`}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {icon && (
        <button
          type="button"
          onClick={iconClick}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#98A2B3]"
        >
          {icon}
        </button>
      )}
    </div>
    {hint && <p className="text-xs text-gray-500">{hint}</p>}
    {error && <p className="text-red-500 text-[10px] mt-1">{error}</p>}
  </div>
);

export default SignUp;

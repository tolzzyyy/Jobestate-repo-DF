import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import image from "../Assets/Rectangle 3576 (1).png";
import bg from "../Assets/bg.png";
import logo from "../Assets/Logo - Horizontal.png";
import { Link } from 'react-router-dom';
import google from "../Assets/Rectangle 6.png";
import { FaTwitter } from "react-icons/fa";
import { BiCheck } from "react-icons/bi";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import phone from "../Assets/smartphone-device.png";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    phone_number: '',
    password: '',
    first_name: '',
    last_name: ''
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

  const validateForm = () => {
    const newErrors = {};

    // Validate each field
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone_number) {
      newErrors.phone_number = "Phone number is required";
    } else if (!/^\+?[1-9]\d{1,14}$/.test(formData.phone_number)) {
      newErrors.phone_number = "Invalid phone number";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else {
      if (formData.password.length < 8) {
        newErrors.password = "Password must be at least 8 characters long";
      }
      if (!/[a-z]/.test(formData.password)) {
        newErrors.password = "Password must contain lowercase letters";
      }
      if (!/[A-Z]/.test(formData.password)) {
        newErrors.password = "Password must contain uppercase letters";
      }
      if (!/[0-9]/.test(formData.password)) {
        newErrors.password = "Password must contain numbers";
      }
    }

    if (!formData.first_name) {
      newErrors.first_name = "First name is required";
    }

    if (!formData.last_name) {
      newErrors.last_name = "Last name is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear any previous API errors when user starts typing
    setApiError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset previous errors
    setErrors({});
    setApiError(null);

    // Validate form
    if (!validateForm()) return;

    // Start loading
    setIsLoading(true);

    try {
      // API call to signup endpoint
      const response = await axios.post("https://jobestate-backend-repo-df.onrender.com/api/auth/signup", formData);

      // Handle successful signup
      localStorage.setItem('userToken', response.data.token);
      
      // Navigate to next step or dashboard
      navigate('/userdashboard');
    } catch (error) {
      // Handle API errors
      if (error.response) {
        setApiError(error.response.data.message || 'Signup failed. Please try again.');
      } else if (error.request) {
        setApiError('No response from server. Please check your connection.');
      } else {
        setApiError('Error in signup process. Please try again.');
      }
    } finally {
      // Stop loading
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
            <Link to='/' className="w-[150px] md:w-[200px]">
              <img src={logo} alt="Logo" />
            </Link>
            <div className="mx-auto mt-5 md:mt-0 flex flex-col overflow-auto scrollbar-hide w-full md:w-[400px] h-full md:h-screen">
              <div className="text-left w-full md:text-center">
                <h1 className="font-sans text-[40px] font-[600]">Create Account</h1>
                <p className="text-[#6B6B6B] text-[14px] font-[600]">
                  Sign up to get exclusive job updates!
                </p>
              </div>
              <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5 py-5">
                {/* First Name */}
                <div className="w-full flex flex-col gap-1">
                  <h1 className="text-[14px] text-[#012C68]">FIRST NAME</h1>
                  <input
                    className={`w-full outline-none rounded-[6px] border-[1px] text-[14px] p-3 text-[#98A2B3] font-[400] ${
                      errors.first_name ? 'border-red-500' : 'border-[#E1E1E1]'
                    } h-[50px]`}
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleInputChange}
                    placeholder="Enter First Name"
                  />
                  {errors.first_name && <p className="text-red-500 text-[10px] mt-1">{errors.first_name}</p>}
                </div>

                {/* Last Name */}
                <div className="w-full flex flex-col gap-1">
                  <h1 className="text-[14px] text-[#012C68]">LAST NAME</h1>
                  <input
                    className={`w-full outline-none rounded-[6px] border-[1px] text-[14px] p-3 text-[#98A2B3] font-[400] ${
                      errors.last_name ? 'border-red-500' : 'border-[#E1E1E1]'
                    } h-[50px]`}
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleInputChange}
                    placeholder="Enter Last Name"
                  />
                  {errors.last_name && <p className="text-red-500 text-[10px] mt-1">{errors.last_name}</p>}
                </div>

                {/* Email Input */}
                <div className="w-full flex flex-col gap-1">
                  <h1 className="text-[14px] text-[#012C68]">EMAIL ADDRESS</h1>
                  <input
                    className={`w-full outline-none rounded-[6px] border-[1px] text-[14px] p-3 text-[#98A2B3] font-[400] ${
                      errors.email ? 'border-red-500' : 'border-[#E1E1E1]'
                    } h-[50px]`}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter Email Address"
                  />
                  {errors.email && <p className="text-red-500 text-[10px] mt-1">{errors.email}</p>}
                </div>

                {/* Phone Number */}
                <div className="w-full flex flex-col gap-1">
                  <h1 className="text-[14px] text-[#012C68]">PHONE NUMBER</h1>
                  <input
                    className={`w-full outline-none rounded-[6px] border-[1px] text-[14px] p-3 text-[#98A2B3] font-[400] ${
                      errors.phone_number ? 'border-red-500' : 'border-[#E1E1E1]'
                    } h-[50px]`}
                    type="tel"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleInputChange}
                    placeholder="Enter Phone Number"
                  />
                  {errors.phone_number && <p className="text-red-500 text-[10px] mt-1">{errors.phone_number}</p>}
                </div>

                {/* Password Input */}
                <div className="w-full flex flex-col gap-1">
                  <h1 className="text-[14px] text-[#012C68]">PASSWORD</h1>
                  <div className="relative">
                    <input
                      className={`w-full outline-none rounded-[6px] border-[1px] text-[14px] p-3 text-[#98A2B3] font-[400] ${
                        errors.password ? 'border-red-500' : 'border-[#E1E1E1]'
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
                  {errors.password && <p className="text-red-500 text-[10px] mt-1">{errors.password}</p>}
                  
                  {/* Password Requirements */}
                  <div className="mt-2">
                    <p className='text-[14px]'>Create a Password that:</p>
                    <div className='mt-1'>
                      <p className='flex gap-2 text-[9px] items-center'>
                        <BiCheck className='text-green-300' size={20}/> Contains at least 8 characters
                      </p>
                      <p className='flex gap-2 text-[9px] items-center'>
                        <BiCheck className='text-green-300' size={20}/> Contains both lowercase and uppercase letters
                      </p>
                      <p className='flex gap-2 text-[9px] items-center'>
                        <BiCheck className='text-green-300' size={20}/> Contains at least one number
                      </p>
                    </div>
                  </div>
                </div>

                {/* API Error Display */}
                {apiError && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <span className="block sm:inline">{apiError}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className={`w-full flex items-center justify-center text-white rounded-[6px] h-[50px] ${
                    isLoading ? 'bg-gray-400' : 'bg-[#0149AD]'
                  }`}
                >
                  {isLoading ? 'Processing...' : 'Create Account'}
                </button>

                {/* Social Login Options */}
                <div className="flex items-center justify-center w-full">
                  <div className="border-t-[1px] w-full flex border-[#E4E8EC]"></div>
                  <h1 className="px-2">OR</h1>
                  <div className="border-t-[1px] w-full flex border-[#E4E8EC]"></div>
                </div>

                <button className="w-full bg-white flex items-center justify-center gap-4 border-[#D3D8E0] border-[1px] text-black rounded-[6px] h-[50px]">
                  <img className="w-[20px]" src={google} alt="" /> Continue with Google
                </button>

                <div className="text-[#667185] text-center text-[14px] font-[400] mt-4">
                  Already have an account?{" "}
                  <Link to='/signin' className="font-[500] text-[#0149AD]">
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
            src={image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
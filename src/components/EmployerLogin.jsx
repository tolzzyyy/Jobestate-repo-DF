import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import image from "../Assets/Rectangle 3576 (1).png";
import bg from "../Assets/bg.png";
import logo from "../Assets/Logo - Horizontal.png";
import google from "../Assets/Rectangle 6.png";
import { FaTwitter } from "react-icons/fa";
import phone from "../Assets/smartphone-device.png";

const EmployerLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email_or_phone_number: "", // Updated parameter name
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const bgimage = {
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (error) setError("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
  
    try {
      const response = await axios.post(
        "https://jobestate-backend-repo-df.onrender.com/api/auth/login",
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      console.log("Login response:", response.data); // Let's see this output
  
      // Check for token in different possible locations
      const token = response.data.token || 
                   response.data.data?.token || 
                   response.data.access_token ||
                   response.data.accessToken;
  
      if (token) {
        localStorage.setItem("authToken", token);
        console.log("Token stored:", token); // Verify token storage
        navigate("/employerjobform");
      } else {
        console.log("Full response structure:", JSON.stringify(response.data, null, 2));
        setError("Login successful but token not found in response");
      }
  
    } catch (error) {
      console.error("Login error:", error.response || error);
      setError(
        error.response?.data?.message ||
        "Login failed. Please check your credentials."
      );
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="w-full mx-auto h-full md:h-screen flex items-center justify-center">
      <div className="xl:flex h-full items-center w-full">
        <div className="w-full py-2 h-full px-5 md:px-10" style={bgimage}>
          <div className="flex gap-4 it h-full flex-col">
            <Link to="/" className="w-[150px] md:w-[200px]">
              <img src={logo} alt="Logo" />
            </Link>
            <div className="mx-auto py-1 mt-5 md:mt-0 flex flex-col w-full overflow-auto scrollbar-hide md:w-[400px] h-full md:h-screen">
              <div className="text-left md:text-center">
                <h1 className="font-sans text-[40px] font-[600]">Log In</h1>
                <p className="text-[#6B6B6B] font-[600]">
                  Enter your credential to access your account
                </p>
              </div>

              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4">
                  {error}
                </div>
              )}

              <form onSubmit={handleLogin} className="w-full flex flex-col gap-5 py-5">
                <div className="w-full flex flex-col gap-1">
                  <h1 className="text-[14px] text-[#012C68]">EMAIL OR PHONE NUMBER</h1>
                  <input
                    className="w-full outline-none rounded-[6px] border-[1px] text-[14px] p-3 text-black font-[400] border-[#E1E1E1] h-[50px]"
                    type="text"
                    placeholder="Enter Email or Phone Number"
                    name="email_or_phone_number"
                    value={formData.email_or_phone_number}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="w-full flex flex-col gap-1">
                  <h1 className="text-[14px] text-[#012C68]">PASSWORD</h1>
                  <input
                    className="w-full outline-none rounded-[6px] border-[1px] text-[14px] p-3 text-black font-[400] border-[#E1E1E1] h-[50px]"
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="flex items-center w-full justify-between">
                  <div className="flex gap-1 items-center">
                    <input
                      type="checkbox"
                      id="rememberMe"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <label className="text-[14px] text-[#101928]" htmlFor="rememberMe">
                      Remember Me
                    </label>
                  </div>
                  <div>
                    <Link
                      className="text-[14px] text-[#0149AD] font-[500]"
                      to="/forgotpassword"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-[#0149AD] text-white rounded-[6px] h-[50px] ${
                    isLoading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading ? "Logging in..." : "Log In"}
                </button>

                <div className="flex items-center justify-center w-full">
                  <div className="border-t-[1px] w-full flex border-[#E4E8EC]"></div>
                  <h1 className="px-2">OR</h1>
                  <div className="border-t-[1px] w-full flex border-[#E4E8EC]"></div>
                </div>
                
                <button type="button" className="w-full bg-white flex items-center justify-center gap-4 border-[#D3D8E0] border-[1px] text-black rounded-[6px] h-[50px]">
                  <img className="w-[20px]" src={google} alt="" /> Continue with Google
                </button>

                <button type="button" className="w-full bg-white flex items-center justify-center gap-4 border-[#D3D8E0] border-[1px] text-black rounded-[6px] h-[50px]">
                  <FaTwitter className="text-[20px] text-blue-400" /> Continue with Twitter
                </button>

                <button type="button" className="w-full bg-white flex items-center gap-4 justify-center border-[#D3D8E0] border-[1px] text-black rounded-[6px] h-[50px]">
                  <img src={phone} alt="" /> Continue with Phone Number
                </button>

                <Link to="/Employersignup" className="text-[#667185] text-center text-[14px] font-[400]">
                  Are you new here?{" "}
                  <span className="font-[500] text-[#0149AD]">Create Account</span>
                </Link>
              </form>
            </div>
          </div>
        </div>
        <div className="w-full">
          <img
            className="w-full hidden xl:flex bg-center object-cover h-screen"
            src={image}
            alt="Login illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default EmployerLogin;
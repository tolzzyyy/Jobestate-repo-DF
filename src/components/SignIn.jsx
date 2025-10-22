// SignIn.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../api"; // your login API function
import bg from "../Assets/img/bg.png";
import logo from "../Assets/img/Logo - Horizontal.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignIn = ({ setUser }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const bgimage = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await login(formData); // should return { user, token }

      if (res?.user && res?.token) {
        // ✅ Save to localStorage so refresh keeps user logged in
        localStorage.setItem("user", JSON.stringify(res.user));
        localStorage.setItem("token", res.token);

        // ✅ Update App.jsx state
        setUser(res.user);

        // ✅ Redirect by role
        switch (res.user.role) {
          case "user":
            navigate("/userdashboard");
            break;
          case "employer":
            navigate("/employerdashboard");
            break;
          case "admin":
            navigate("/admindashboard");
            break;
          default:
            navigate("/");
        }
      }
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full mx-auto h-full md:h-screen flex items-center justify-center">
      <div className="xl:flex h-full items-center w-full">
        {/* Left Section with background */}
        <div className="w-full py-2 h-full px-5 md:px-10" style={bgimage}>
          <div className="flex gap-4 h-full flex-col">
            <Link to="/" className="w-[150px] md:w-[200px]">
              <img src={logo} alt="Logo" />
            </Link>

            <div className="mx-auto py-1 mt-5 md:mt-0 flex flex-col w-full overflow-auto scrollbar-hide md:w-[400px] h-full md:h-screen">
              <div className="text-left md:text-center">
                <h1 className="font-sans text-[40px] font-[600]">Log In</h1>
                <p className="text-[#6B6B6B] font-[600]">
                  Enter your credentials to access your account
                </p>
              </div>

              {/* Login Form */}
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-5 py-5"
              >
                {/* Email */}
                <div className="w-full flex flex-col gap-1">
                  <h1 className="text-[14px] text-[#012C68]">EMAIL ADDRESS</h1>
                  <input
                    className="w-full outline-none rounded-[6px] border-[1px] text-[14px] p-3 text-[#98A2B3] font-[400] border-[#E1E1E1] h-[50px]"
                    type="email"
                    placeholder="Enter Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Password */}
                <div className="w-full flex flex-col gap-1 relative">
                  <h1 className="text-[14px] text-[#012C68]">PASSWORD</h1>
                  <input
                    className="w-full outline-none rounded-[6px] border-[1px] text-[14px] p-3 pr-10 text-[#98A2B3] font-[400] border-[#E1E1E1] h-[50px]"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-9 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                {/* Remember Me + Forgot Password */}
                <div className="flex items-center w-full justify-between">
                  <div className="flex gap-1 items-center">
                    <input type="checkbox" name="checkbox" id="checkbox" />
                    <label
                      className="text-[14px] text-[#101928]"
                      htmlFor="checkbox"
                    >
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

                {/* Error */}
                {error && (
                  <p className="text-red-500 text-sm text-center">{error}</p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#0149AD] text-white rounded-[6px] h-[50px] disabled:opacity-50"
                >
                  {loading ? "Logging in..." : "Log In"}
                </button>

                {/* OR Divider */}
                <div className="flex items-center justify-center w-full">
                  <div className="border-t-[1px] w-full border-[#E4E8EC]"></div>
                  <h1 className="px-2">OR</h1>
                  <div className="border-t-[1px] w-full border-[#E4E8EC]"></div>
                </div>

                {/* Google (placeholder button) */}
                <button className="w-full bg-white flex items-center justify-center gap-4 border-[#D3D8E0] border-[1px] text-black rounded-[6px] h-[50px]">
                  <img className="w-[20px]" alt="" /> Continue with Google
                </button>

                {/* Sign Up */}
                <p className="text-[#667185] text-center text-[14px] font-[400]">
                  Are you new here?{" "}
                  <Link to="/signup" className="font-[500] text-[#0149AD]">
                    Create Account
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Right Section with illustration */}
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

export default SignIn;

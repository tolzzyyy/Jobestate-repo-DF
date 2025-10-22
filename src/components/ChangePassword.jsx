import React from 'react'
import bg from "../Assets/img/bg.png";
import logo from "../Assets/img/Logo - Horizontal.png";
import { Link } from 'react-router-dom';
const ChangePassword = () => {
    const bgimage = {
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      };
    
  return (
    <div className="w-full mx-auto py-5  h-screen" style={bgimage}>
      <div className="flex w-full px-5 md:px-10 flex-col">
        <div className=" w-[150px] md:mx-[100px] md:w-[200px]">
          <img src={logo} alt="" />
        </div>
        <div className="mx-auto my-10 py-5 flex gap-5 flex-col items-center justify-center max-w-[500px] h-full">
          <div className="md:text-center flex flex-col gap-1 text-left">
            <h1 className="text-[30px] font-[600]">Change Password</h1>
            <p className="text-[#6B6B6B] font-[600]">
            Your New Password must be different from Previous Passwords
            </p>
         
          </div>
          <div className="w-full flex flex-col justify-center gap-5">
            <div className="flex flex-col gap-5  justify-between w-full">
            <div className="w-full flex flex-col gap-1">
                  <h1 className="text-[14px] text-[#012C68]">EMAIL ADDRESS</h1>
                  <input
                    className="w-full outline-none rounded-[6px] border-[1px] text-[14px] p-3 text-[#98A2B3] font-[400] border-[#E1E1E1] h-[50px]"
                    type="email"
                    placeholder="Enter Email Address"
                    name=""
                    id=""
                  />
                </div>
                <div className="w-full flex flex-col gap-1">
                  <h1 className="text-[14px] text-[#012C68]">PASSWORD</h1>
                  <input
                    className="w-full outline-none rounded-[6px] border-[1px] text-[14px] p-3 text-[#98A2B3] font-[400] border-[#E1E1E1] h-[50px]"
                    type="password"
                    placeholder="Enter Password"
                    name=""
                    id=""
                  />
                </div>
            </div>
          
            <Link
              to="/success"
              className="w-full bg-[#0149AD] flex items-center justify-center text-white rounded-[6px] h-[50px]"
            >
          Confirm
            </Link>
            <Link className="text-center text-[#0149AD]" to='/'>
         Back to sign in
           </Link>
            {/* <div className=" flex items-center justify-center w-full">
              {" "}
              <div className="border-t-[1px] w-full flex border-[#E4E8EC]"></div>
              <h1 className="px-2">OR</h1>
              <div className="border-t-[1px] w-full flex border-[#E4E8EC]"></div>
            </div> */}
            {/* <Link to='/forgotpasswordnumber' className="w-full bg-white flex items-center gap-4 justify-center border-[#D3D8E0] border-[1px] text-black rounded-[6px] h-[50px]">
                <img className="" src={phone} alt="" /> Use Phone Number Instead
              </Link> */}

          
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChangePassword

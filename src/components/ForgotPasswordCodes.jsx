import React, { useRef, useState } from "react";
import bg from "../Assets/bg.png";
import logo from "../Assets/Logo - Horizontal.png";
import { Link } from "react-router-dom";
const ForgotPasswordCodes = () => {
  const bgimage = {
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const [codes, setCodes] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value)) {
      const newCodes = [...codes];
      newCodes[index] = value;
      setCodes(newCodes);

      if (index < 5 && value) {
        inputsRef.current[index + 1].focus();
      }
    } else if (value === "") {
      const newCodes = [...codes];
      newCodes[index] = "";
      setCodes(newCodes);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newCodes = [...codes];
      if (codes[index]) {
        newCodes[index] = "";
        setCodes(newCodes);
      } else if (index > 0) {
        inputsRef.current[index - 1].focus();
      }
    }

    if (e.key === "ArrowLeft" && index > 0) {
      inputsRef.current[index - 1].focus();
    }
    if (e.key === "ArrowRight" && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  return (
    <div className="w-full mx-auto py-5  h-screen" style={bgimage}>
      <div className="flex w-full px-5 md:px-10 flex-col">
        <div className=" w-[150px] md:mx-[100px] md:w-[200px]">
          <img src={logo} alt="" />
        </div>
        <div className="mx-auto my-10 py-5 flex gap-5 flex-col items-center justify-center max-w-[500px] h-full">
          <div className="md:text-center flex flex-col gap-1 text-left">
            <h1 className="text-[30px] font-[600]">Forgot Password</h1>
            <p className="text-[#6B6B6B] font-[600]">
             Please enter the One-Time Password to verify your account
            </p>
            <p className="font-[300] text-[#797979] text-[13px]">A One-Time Password has been sent to abc***@gmail.com </p>
          </div>
          <div className="w-full flex flex-col justify-center gap-5">
            <div className="flex justify-between w-full">
              {codes.map((code, index) => (
                <input
                  key={index}
                  type="text"
                  value={code}
                  maxLength="1"
                  className="w-12 h-12 rounded-xl outline-none border text-center text-lg"
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => (inputsRef.current[index] = el)}
                />
              ))}
            </div>
            <div to="/" className=" text-center font-[300]">
            didn't get the Code? <Link className="text-[#0149AD] hover:underline">Click to Resend</Link>
            </div>
            <Link
              to="/changepasswords"
              className="w-full bg-[#0149AD] flex items-center justify-center text-white rounded-[6px] h-[50px]"
            >
          Confirm
            </Link>
            <Link className="text-center" to='/'>
           Cancel
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
  );
};

export default ForgotPasswordCodes;

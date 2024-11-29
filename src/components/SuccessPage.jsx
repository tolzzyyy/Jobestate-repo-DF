import React from 'react'
import bg from "../Assets/bg.png";
import logo from "../Assets/Logo - Horizontal.png";
import { FaCheck } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
const SuccessPage = () => {
    const bgimage = {
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      };
  return (
    <div className="w-full mx-auto py-5 overflow-hidden  h-screen" style={bgimage}>
    <div className="flex w-full h-screen px-5 md:px-10 flex-col">
      <div className=" w-[150px] md:mx-[100px] md:w-[200px]">
        <img src={logo} alt="" />
      </div>
     <div className='flex flex-col w-full gap-3 md:gap-2 justify-center h-[500px]  items-center'>
        <div className='bg-[#0049AD] text-white h-[180px] w-[180px] rounded-full flex items-center justify-center'>
            <FaCheck className='' size={40}/>
        </div>
        <h1 className='text-[30px] font-[600]'>Successful!</h1>
        <p className='text-[#6B6B6B] text-center font-[600]'>Your password has been successfully changed</p>
        <Link className="text-center text-[#0149AD]" to='/'>
         Back to sign in
           </Link>

     </div>
    </div>
  </div>
  )
}

export default SuccessPage

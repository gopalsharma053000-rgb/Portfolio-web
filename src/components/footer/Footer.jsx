import React from 'react'
import { MdOutlineCopyright } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";


function Footer() {
  return (
    <div className='bg-gray-800 min-h-min w-full'>
      <div className='text-white flex items-center justify-center pt-3.5 pb-5 gap-3 md:gap-5 lg:gap-8'>
        <a className='hover:scale-110 active:scale-90' href='https://www.facebook.com/share/14tHf7jfXux/' target='_blank'><FaSquareFacebook size={25}/></a>
        <a className='hover:scale-110 active:scale-90' href='https://www.linkedin.com/in/gopal-sharma-432126282' target='_blank'><FaLinkedin size={25}/></a>
        <a className='hover:scale-110 active:scale-90' href='https://github.com/gopalsharma053000-rgb' target='_blank'><FaGithub size={25}/></a>
        <a className='hover:scale-110 active:scale-90' href='https://www.instagram.com/gopal_kumar_100?igsh=MTNveHhlejZ0ZzljNA==' target='_blank'><FaInstagramSquare size={25}/></a>
      </div>
    <div className='flex items-center justify-center gap-1 pb-1.5 text-sm md:text-md lg:text-[17px] text-white font-mono'>
      <h1>Gopal Made With</h1>
      <FaHeart className='text-red-600' size={25}/>
      <h1>Learner</h1>
    </div>
    </div>
  )
}

export default Footer

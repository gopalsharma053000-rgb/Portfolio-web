import React from 'react'
import { BsFillSendFill } from "react-icons/bs";
import { IoCallSharp } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";



const Contact = () => {
  return (
    <div className='mb-6'>
      <h1 className='text-white text-[33px] lg:text-4xl font-bold mt-3 ml-1'>Contact</h1>
      <div className='bg-blue-600 w-26 h-1 ml-5 mt-0.5 mb-2'></div>
      <div className='flex justify-center min-h-auto text-white mt-1.5 font-mono ml-1 flex-col'>
        <div className='ml-1'>
          <IoCallSharp size={23} className='relative top-[20px] md:top-[25px]'/>
          <h1 className='pl-7 md:text-2xl'>Phone No. <span className='underline'>+91 7065649511</span></h1>
        </div>
        <div className='ml-1 mb-2'>
          <BsFillSendFill size={20} className='relative top-[20px] md:top-[25px]'/>
          <h1 className='pl-7 md:text-2xl'>Email:- <span className='underline'>gopalsharma053000@gmail.com</span></h1>
        </div>
        <div>
          <IoLocationSharp size={23} className='relative top-[20px] md:top-[25px]'/>
          <h1 className='pl-7 md:text-2xl'>Gurugram, Haryana</h1>
        </div>
      </div>
    </div>
  )
}

export default Contact

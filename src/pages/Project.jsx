import React from 'react'
import { FaArrowRight } from "react-icons/fa";

function Project() {
  return (
    <div className='mt-2.5 px-1.5'>
      <h1 className='text-white text-[36px] font-bold'>Project</h1>
      <div className='bg-blue-600 w-26 h-1 ml-2 mb-2'></div>
      <div className='mt-1.5  flex'>
        <h1 className='text-[25px] text-indigo-400 font-semibold'>Click Here</h1>
        <div className='relative text-amber-300 text-[25px] top-2 left-2.5'>
          <FaArrowRight />
        </div>
      </div>
      <div className='mt-1.5 relative left-36'>
         <a 
         className='bg-[#FF9326] py-1 px-3 font-semibold hover:bg-amber-600 active:border-2 active:bg-amber-800 rounded cursor-pointer'
         href='https://my-calculator-app-2026.netlify.app' rel='noopener noreferrer' target='_blank'>Calculator App</a>
      </div>
      <div className='mt-1.5 flex'>
        <h1 className='text-indigo-400 font-semibold text-[25px]'>Click Here</h1>
        <div className='relative text-emerald-600 text-[25px] top-2 left-2.5'>
          <FaArrowRight />
        </div>
      </div>
      <div className='mt-1.5 relative left-36'>
       <a 
       className='bg-[#C42700] py-1 px-5 font-semibold hover:bg-orange-500 active:border-2 active:bg-orange-900 cursor-pointer rounded'
       href='https://my-unique-weather-app-2026.netlify.app/' target='_blank' rel='noopener noreferrer'>Weather App</a>
      </div>
      <div className='mt-1.5 flex'>
        <h1 className='text-indigo-400 font-semibold text-[25px]'>Click Here</h1>
        <div className='relative text-cyan-400 text-[25px] top-2 left-2.5'>
          <FaArrowRight />
        </div>
      </div>
      <div className='mt-1.5 relative mb-1.5 left-36'>
       <a 
       className='bg-[#DBDB2E] py-1 px-7 font-semibold active:bg-amber-600 hover:bg-amber-500 active:border-2 cursor-pointer rounded'
       href="https://unique-notes-application.netlify.app/" target='_blank' rel='noopener noreferrer'>Notes App</a>
       <p className='bg-amber-700 w-62 px-6 mt-2.5 -ml-16  rounded font-semibold text-white text-sm md:text-xl md:w-82'>Using Frontend and Backend.</p>
      </div>
    </div>
  )
}

export default Project

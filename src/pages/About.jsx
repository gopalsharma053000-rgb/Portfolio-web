import React from 'react'
import hero from '../assets/hero.jpg'

const About = () => {
  return (
    <div>
      <h1 className='text-white text-[36px] lg:text-4xl font-bold mt-5 ml-1'>About</h1>
      <div className='w-20 h-1 md:mt-0.5 md:w-23 md:ml-3 bg-blue-500 ml-5'></div>
      <div className='mt-3.5 ml-3 lg:mx-44 min-w-auto'><p className='text-slate-300 leading-relaxed text-sm md:text-base'>I am a passionate full-stack developer who loves building clean, modern, and user-friendly web applications.<br /> As a science graduate, I am completely self-taught, having learned and built projects throughcontinuous<br /> practice and online resources. When I'm not writing code, you'll usually find me playing cricket, listening<br /> to music, traveling to new places, or exploring exciting things while always looking out for something new to learn.</p></div>
      <div className='mt-5 ml-5 lg:mx-96 mb-5 '>
        <a className='py-1 px-4 bg-gray-600 cursor-pointer hover:bg-gray-800 md:py-2 md:px-6 font-bold active:bg-gray-900 active:border-2 active:border-mauve-900 hover:font-medium text-white rounded'
         download href={hero}>Download CV</a>
      </div>
    </div>
  )
}

export default About
import React, { useState } from 'react'
import { IoMdMenu } from 'react-icons/io'
import { RxCross2 } from 'react-icons/rx'


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='md:flex md:items-center fixed top-0 left-0 w-full z-50 p-5 md:justify-between bg-cyan-800 md:h-14 text-black'>
      <div className='lg:text-2xl relative -top-4 md:top-0 text-lg flex flex-col items-center md:text-xl sm:font-medium font-semibold'>
        <h1>GOPAL SHARMA</h1>
      </div>
      <div className='space-x-4 lg:space-x-6 lg:text-2xl sm:font-medium hidden md:text-xl md:block  font-semibold'>
        <a className='sm:active:underline md:hover:underline' href='#home'>Home</a>
        <a className='sm:active:underline md:hover:underline' href='#tech'>Tech Stack</a>
        <a className='sm:active:underline md:hover:underline' href='#project'>Project</a>
        <a className='sm:active:underline md:hover:underline' href='#about'>About</a>
        <a className='sm:active:underline md:hover:underline' href='#contact'>Contact</a>
      </div>
      <div onClick={() => setIsOpen(!isOpen)}
        className='md:hidden cursor-pointer absolute top-7.5'>
        {isOpen ?<RxCross2 size={40}/>:<IoMdMenu size={40}/>}
      </div>
      {isOpen && (
        <div className='h-screen absolute md:hidden left-0 top-0 w-52 bg-gray-700 z-50 p-5'>
          <RxCross2 size={40} onClick={()=> setIsOpen(false)} className='cursor-pointer text-black'/>
          <div className='flex flex-col mt-10 font-extrabold text-xl gap-8'>
            <a onClick={()=>setIsOpen(false)} className='sm:hover:underline md:hover:underline' href='#tech'>Tech Stack</a> 
            <a onClick={()=>setIsOpen(false)} className='sm:hover:underline md:hover:underline' href='#project'>Project</a>
            <a onClick={()=>setIsOpen(false)} className='sm:hover:underline md:hover:underline' href='#about'>About</a>
            <a onClick={()=>setIsOpen(false)} className='sm:hover:underline md:hover:underline' href='#'>Home</a>
            <a onClick={()=>setIsOpen(false)} className='sm:hover:underline md:hover:underline' href='#contact'>Contact</a>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar

import React, { useState } from 'react';
import benjaminImage from '../assets/benjamin-franklin-images.jpg';
import { RxCross2 } from 'react-icons/rx';

const Home = () => {

  const [show , setShow] = useState(false)
  return (
    <div className='relative flex flex-col items-center justify- mt-12 ml-3 lg:flex lg:items-center lg:justify-center md:mr-14 md:mt-20 lg:mr-16 lg:mt-24'>
      <section className='relative'>
        <div className='mb-6 lg:mb-5'>
          <h1><span className='text-xl lg:text-4xl md:text-3xl text-[#2ABFBF] lg:text-[#2ABFBF] md:text-[#2ABFBF] font-medium'>FULL STACK DEVELOPMENT</span><br/><span className=' text-md lg:text-3xl md:text-2xl lg:capitalize text-white lg:font-normal font-sans'>HI, I'M GOPAL SHARMA</span></h1>
        </div>
        <div className='text-white lg:ml-10'>
          <h3 className='lg:text-xl md:text-xl'>"Tell me and I forget, teach me and I remember,<br className='lg:hidden md:hidden'/> involve me and I learn."<br /><span onClick={()=> setShow(!show)} className='lg:relative lg:left-full font-medium p-0.5 cursor-pointer rounded bg-amber-600  md:relative md:left-auto'>-Benjamin Franklin</span></h3>
        </div>
        { show && (
          <div className='absolute top-44 font-medium lg:right-0 w-56 bg-white p-4 shadow-xl border rounded-lg z-50 lg:w-64'>
            <div className='flex justify-end'>
              <RxCross2 size={20} className='cursor-pointer' onClick={()=>setShow(false)}/>
            </div>
            <img src={benjaminImage} className='w-20 h-20 ml-11 -mt-7 object-cover mb-2' alt="Benjamin Franklin"/>
            <p className='text-sm'>Benjamin Franklin was an American polymath who was one of the Founding Fathers of the United States; a drafter and signer of the Declaration of Independence; and the first postmaster general.</p>
          </div>
        )}
      </section>
    </div>
  )
}

export default Home
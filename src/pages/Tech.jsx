import React from 'react'
import { motion } from 'framer-motion';
import html5 from '../assets/html-5.jpg';
import css3 from '../assets/css.jpg';
import js from '../assets/js.jpg';
import react from '../assets/science.jpg';
import tailwind from '../assets/tailwind-css.jpg';
import node from '../assets/node-js.jpg';
import express from '../assets/express-js.jpg';
import mongoDb from '../assets/mongodb.jpg';
import restApi from '../assets/api.jpg';
import framerMotion from '../assets/framer-motion.jpg';
import aws from '../assets/aws.jpg';
import git from '../assets/git.jpg';
import gitHub from '../assets/gitHub.jpg';
import docker from '../assets/docker.jpg';
import postman from '../assets/postman.jpg';
import vsCode from '../assets/vs-code.jpg';


const Tech = () => {
  return(
    <div>
      <section>
        <h1 className='text-[36px] font-bold mx-1 mt-5 lg:text-4xl text-white'>Tech Stack</h1>
        <div className='bg-blue-600 w-36 h-1 ml-4 mt-1 mb-2'></div>
        <h1 className='text-[30px] font-bold mt-4 px-1.5 lg:text-3xl text-cyan-600'>Frontend Development</h1>
        <div className='w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-2'>
          <motion.div className='bg-orange-300 m-5 rounded-xl p-3'
          initial={{ opacity:0, x:-100 }}
        whileInView={{ opacity:1,x:0 }}
         transition={{ duration: 2, ease:'easeOut' }}
          >
            <img src={html5} className='w-36 h-36 mx-auto mt-2.5 object-contain' alt="HTML" />
            <h1 className='text-[25px] text-white text-center pt-3 font-semibold'>HTML</h1>
            <p className='text-sm bg-amber-300 p-1.5 font-medium'>Building the semantic structure of the web,ensuring accessibility, and creating well-organized content layouts.</p>
          </motion.div>
          <motion.div 
          initial={{ opacity:0, x:-100 }}
        whileInView={{ opacity:1,x:0 }}
         transition={{ duration:1.3, ease:'easeOut' }}
          className='bg-orange-300 m-5 rounded-xl p-3'>
            <img src={css3} className='w-36 h-36 mx-auto mt-2.5 object-contain' alt="CSS" />
            <h1 className='text-[25px] text-white text-center pt-3 font-semibold'>CSS</h1>
            <p className='text-sm bg-amber-300 p-1.5 font-medium'>Styling applications with modern layouts(Flexbox/Grid),responsive design and aesthetic visual presentation.</p>
          </motion.div>
          <motion.div className='bg-orange-300 m-5 rounded-xl p-3'
          initial={{ opacity:0, x:-100 }}
        whileInView={{ opacity:1.5,x:0 }}
         transition={{ duration: 2, ease:'easeOut' }}
          >
            <img src={js} className='w-36 h-36 mx-auto mt-2.5 object-contain' alt="JS" />
            <h1 className='text-[25px] text-white text-center pt-3 font-semibold'>JAVASCRIPT</h1>
            <p className='text-sm p-1.5 bg-amber-300 font-medium'>Implementing core application logic, handling asynchronous data,creating interactive user experiences.</p>
          </motion.div>
          <motion.div className='bg-orange-300 m-5 rounded-xl p-3'
          initial={{ opacity:0, x:-100 }}
        whileInView={{ opacity:1,x:0 }}
         transition={{ duration: 1.8, ease:'easeOut' }}
          >
            <img src={react} className='w-36 h-36 mx-auto mt-2.5 object-contain' alt="react" />
            <h1 className='text-[25px] text-white text-center pt-3 font-semibold'>REACT</h1>
            <p className='text-sm p-1.5 bg-amber-300 font-medium'>Building dynamic,scalable and reusable UI components for seamless user experiences.</p>
          </motion.div>
          <motion.div className='bg-orange-300 m-5 rounded-xl p-3'
          initial={{ opacity:0, x:-100 }}
        whileInView={{ opacity:1,x:0 }}
         transition={{ duration: 2, ease:'easeOut' }}
          >
            <img src={tailwind} className='w-36 h-36 mx-auto mt-2.5 object-contain' alt="TAILWIND" />
            <h1 className='text-[25px] text-white text-center pt-3 font-semibold'>TAILWIND</h1>
            <p className='text-sm p-1.5 bg-amber-300 font-medium'>Crafting modern,fully responsive,and highly customizable interfaces with utility-first Css.</p>
          </motion.div>
          <motion.div className='bg-orange-300 m-5 rounded-xl p-3'
          initial={{ opacity:0, x:-100 }}
        whileInView={{ opacity:1,x:0 }}
         transition={{ duration: 2.5, ease:'easeOut' }}
          >
            <img src={framerMotion} className='w-36 h-36 mx-auto mt-2.5 object-contain' alt="FRAMER-MOTION" />
            <h1 className='text-[25px] text-white text-center pt-3 font-semibold'>FRAMER-MOTION</h1>
            <p className='text-sm p-1.5 bg-amber-300  font-medium'>Adding fluid animations and interactive transitions to bring static web pages to life.</p>
          </motion.div>
        </div>
        <h1 className=' text-[30px] mt-2.5 lg:text-3xl font-bold px-1.5 text-cyan-600'>Backend & API Development</h1>
        <div className='w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
          <motion.div className='bg-teal-600 m-5 rounded-xl p-2.5'
          initial={{ opacity:0, y:200 }}
        whileInView={{ opacity:1,y:0 }}
         transition={{ duration: 1, ease:'easeOut' }}
          >
            <img src={node} className='w-40 h-40 mx-auto  object-contain' alt="NODE.js" />
            <h1 className='text-[25px] text-white text-center font-semibold'>NODE.JS</h1>
            <p className='bg-blue-400 p-1.5 font-medium text-sm'>Developing efficient, server-side applications and robust RESTful APIs to handle data flow.</p>
          </motion.div>
          <motion.div className='bg-teal-600 m-5 rounded-xl p-2.5'
          initial={{ opacity:0, y:200 }}
        whileInView={{ opacity:1,y:0 }}
         transition={{ duration: 1.5, ease:'easeOut' }}
          >
            <img src={express} className='w-40 h-40 mx-auto object-contain' alt="EXPRESS.JS" />
            <h1 className='text-[25px] text-white text-center font-semibold'>EXPRESS.JS</h1>
            <p className='bg-blue-400 p-1.5 font-medium text-sm'>Developing efficient, server-side applications and robust RESTful APIs to handle data flow.</p>
          </motion.div>
          <motion.div className='bg-teal-600 m-5 rounded-xl p-2.5'
          initial={{ opacity:0, y:200 }}
        whileInView={{ opacity:1,y:0 }}
         transition={{ duration: 2, ease:'easeOut' }}
          >
            <img src={restApi} className='w-40 h-40 mx-auto object-contain' alt="REST-API" />
            <h1 className='text-[25px] text-white text-center font-semibold'>REST-API</h1>
            <p className='bg-blue-400 p-1.5 font-medium text-sm'>Designing clean and secure communication channels between the frontend and backend systems.</p>
          </motion.div>
          <motion.div className='bg-teal-600 m-5 rounded-xl p-2.5'
          initial={{ opacity:0, y:200 }}
        whileInView={{ opacity:1,y:0 }}
         transition={{ duration: 2, ease:'easeOut' }}
          >
            <img src={postman} className='w-40 h-40 mx-auto object-contain' alt="POSTMAN" />
            <h1 className='text-[25px] text-white text-center font-semibold'>POSTMAN</h1>
            <p className='bg-blue-400 p-1.5 font-medium text-sm'>Ensuring reliability by testing, debugging, and documenting APIs for smooth integration.</p>
          </motion.div>
        </div>
        <h1 className='text-cyan-600 px-1.5 text-[30px] lg:text-3xl mt-2.5 font-bold'>Database & Cloud</h1>
        <div className='w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
          <motion.div className='bg-green-600 m-5 rounded-xl p-2.5'
          initial={{opacity:0 , x:100}}
          whileInView={{opacity:1 , x:0}}
          transition={{duration:1 , ease:'easeOut'}}
          >
            <img src={mongoDb} className='w-40 h-40 mx-auto object-contain' alt="MONGODB" />
            <h1 className='text-[25px] text-white text-center pt-5 font-semibold'>MONGODB</h1>
            <p className='bg-violet-400 text-sm p-1.5 lg:mt-7 font-medium'>Managing flexible,document-based data storage for scalable applications</p>
          </motion.div>
          <motion.div className='bg-green-600 m-5 rounded-xl p-2.5'
          initial={{ opacity:0, x:100 }}
        whileInView={{ opacity:1,x:0 }}
         transition={{ duration: 1.5, ease:'easeOut' }}
          > 
            {/* <img src={aws} className='w-40 h-40 mx-auto object-contain' alt="AWS" />
            <h1 className='text-[25px] text-white text-center pt-1.5 pb-1 font-semibold'>AWS(Amazon Web Services)</h1>
            <p className='bg-violet-400 text-sm p-1.5 font-medium'>Leveraging cloud infrastructure for hosting, storage and deployment.</p>
          </motion.div>
          <motion.div className='bg-green-600 m-5 rounded-xl p-2.5'
          initial={{ opacity:0, x:200 }}
        whileInView={{ opacity:1,x:0 }}
         transition={{ duration: 2, ease:'easeOut' }}
          > */}
            <img src={docker} className='w-40 h-40 mx-auto object-contain' alt="DOCKER" />
            <h1 className='text-[25px] text-white text-center pt-1.5 pb-1 font-semibold'>DOCKER</h1>
            <p className='bg-violet-400 text-sm  p-1.5 font-medium'>Containerizing applications to ensure consistency across different development and production environments.</p>
          </motion.div> 
        </div>
        <h1 className='font-bold text-[30px] lg:text-3xl text-cyan-600 px-1.5'>Tools & Workflow</h1>
        <div className='w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
          <motion.div className='bg-indigo-700 m-5 rounded-xl p-2.5'
          initial={{ opacity:0, y:-100 }}
        whileInView={{ opacity:1,y:0 }}
         transition={{ duration: 1, ease:'easeOut' }}
          >
            <img src={git} className='w-40 h-40 mx-auto object-contain' alt="git" />
            <h1 className='text-[25px] text-white text-center font-semibold'>GIT</h1>
            <p className='text-sm font-medium bg-emerald-300 p-1.5'>Managing version control,team collaboration, and codebase history effectively.</p>
          </motion.div>
          <motion.div className='bg-indigo-700 m-5 rounded-xl p-2.5'
          initial={{ opacity:0, y:-100 }}
        whileInView={{ opacity:1,y:0 }}
         transition={{ duration: 1.5, ease:'easeOut' }}
          >
            <img src={gitHub} className='w-32 h-32 mx-auto object-contain' alt="GITHUB" />
            <h1 className='text-[25px] text-white text-center lg:mt-3 font-semibold'>GITHUB</h1>
            <p className='text-sm font-medium bg-emerald-300 lg:mt-4 p-1.5'>Managing version control,team collaboration, and codebase history effectively.</p>
          </motion.div>
            <motion.div className='bg-indigo-700 m-5 rounded-xl p-2.5'
            initial={{ opacity:0, y:-100 }}
        whileInView={{ opacity:1,y:0 }}
         transition={{ duration: 2, ease:'easeOut' }}
            >
            <img src={vsCode} className='w-32 h-32 mx-auto object-contain mt-1' alt="VS CODE" />
            <h1 className='text-[25px] text-white text-center lg:mt-3 font-semibold'>VS CODE</h1>
            <p className='text-sm font-medium bg-emerald-300 lg:mt-4 p-1.5'>Utilizing a powerful code editor for efficient development and debugging Workflows.</p>
          </motion.div>
        </div>
      </section >
    </div >
  )
}
export default Tech

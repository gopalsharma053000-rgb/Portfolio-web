import React from 'react'
import Navbar from './components/header/Navbar'
import Home from './pages/Home'
import Tech from './pages/Tech'
import Project from './pages/Project'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div className='h-full w-full overflow-x-hidden bg-gray-900'>
      <Navbar />
      <div className='pt-20'>
        <div id='home'><Home /></div>
        <div id='tech'><Tech /></div>
        <div id='project'><Project/></div>
        <div id='about'><About/></div>
        <div id='contact'><Contact/></div> 
      </div>
      <Footer/>
    </div>
  )
}

export default App

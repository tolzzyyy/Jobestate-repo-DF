import React from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import FindJobs from './components/FindJobs'
import Navbar from './components/Navbar'
import Blog from './components/Blog'
// import Footer from './components/Footer'


const App = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/findjobs' element={<FindJobs/>}/> 
        <Route path='/blog' element={<Blog/>}/> 
     </Routes>
    </div>
  )
}



export default App
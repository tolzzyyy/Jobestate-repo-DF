import React from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import FindJobs from './components/FindJobs'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/findjobs' element={<FindJobs/>}/> 
     </Routes>
    </div>
  )
}



export default App
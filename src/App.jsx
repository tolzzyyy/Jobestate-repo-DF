import React from 'react'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import FindJobs from './components/FindJobs'
import Navbar from './components/Navbar'
import Blog from './components/Blog'
import UserDashboard from './components/UserDashboard'
import UserNavbar from './components/UserNavbar'
import UserJobs from './components/UserJobs';
import UserApplicationStatus from './components/UserApplicationStatus';
import UserSavedJobs from './components/UserSavedJobs';
import UserBlog from './components/UserBlog';
import UserNotification from './components/UserNotification';
import UserProfile from './components/UserProfile';
import UserSettings from './components/UserSettings';
import UserJobDetails from './components/UserJobDetails';
// import Footer from './components/Footer'


const App = () => {

  const location = useLocation();

  const renderNavbar = () => {
    if (location.pathname === '/userdashboard') {
      return <UserNavbar />;
    }
    else if (location.pathname === '/userjobs') {
      return <UserNavbar />;
    }
    else if (location.pathname === '/userjobs/details') {
      return <UserNavbar />;
    }
    else if (location.pathname === '/userapplicationstatus') {
      return <UserNavbar />;
    }
    else if (location.pathname === '/usersavedjobs') {
      return <UserNavbar />;
    }
    else if (location.pathname === '/userblog') {
      return <UserNavbar />;
    }
    else if (location.pathname === '/usernotification') {
      return <UserNavbar />;
    }
    else if (location.pathname === '/userprofile') {
      return <UserNavbar />;
    }
    else if (location.pathname === '/usersettings') {
      return <UserNavbar />;
    }
    return <Navbar />;
  };

  return (
    <div className='overflow-hidden'>
      <div className='flex'>
        {renderNavbar()}
        <Routes>
          <Route path='/userdashboard' element={<UserDashboard/>}/> 
          <Route path='/userjobs' element={<UserJobs/>}/> 
          <Route path='/userjobs/details' element={<UserJobDetails/>}/> 
          <Route path='/userapplicationstatus' element={<UserApplicationStatus/>}/>
          <Route path='/usersavedjobs' element={<UserSavedJobs/>}/>
          <Route path='/userblog' element={<UserBlog/>}/>
          <Route path='/usernotification' element={<UserNotification/>}/>
          <Route path='/userprofile' element={<UserProfile/>}/>
          <Route path='/usersettings' element={<UserSettings/>}/>
        </Routes>
      </div>
      

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/findjobs' element={<FindJobs/>}/> 
        <Route path='/blog' element={<Blog/>}/> 
     </Routes>
    </div>
  )
}



export default App
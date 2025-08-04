import React from 'react'
// import HomePage from './components/Dashboard/HomePage'
import "./App.css"
// import UserInfo from './components/UserInfo/UserInfo'
import Leaderboard from './components/Leaderboard/Leaderboard'
import { Routes, Route,useLocation  } from "react-router-dom";
import Login from './components/LoginPage/Login'
import Navbar from './components/navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard'


function App() {
const location=useLocation()
const hideNavbar=location.pathname==="/";
  return (
    <div>
      {!hideNavbar && <Navbar />}
      
          <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path="/leaderboard" element={<Leaderboard />} /> 
          </Routes>
        
      </div>
  )
}

export default App
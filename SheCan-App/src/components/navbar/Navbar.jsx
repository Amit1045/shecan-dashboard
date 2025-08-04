import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Navbar.css'
import { Link } from "react-router-dom"
import useUserData from '../../storeData/useUserData.js';

function Navbar() {
  const { data, loading, error } = useUserData();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  // console.log(data);
  const InternName=data[0].Intern_name
  // console.log(InternName);
  
  return (
    <div>
      <div className='container'>
        <div className='icon-section'>
          <Link to="/dashboard">
            <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=296,fit=crop,q=95/Aq2NJ23MzBH2rx2j/she-YlenJon1O7ieeEoa.jpg" alt="" className='icon-img' />
          </Link></div>
        <div className='nav-right'>
          <h2 className='acc-icon'><AccountCircleIcon /></h2>
          <h2 className='userName'>{InternName}</h2>
         <Link to={"/"}> <button className='btn-Logout'>LogOut</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
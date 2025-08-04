import React, { useState } from 'react';
import './Userinfo.css';
import { Link } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import MenuIcon from '@mui/icons-material/Menu';

function UserInfo() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      {/* Hamburger for mobile */}
      <div className="hamburger-icon" onClick={toggleSidebar}>
        <MenuIcon style={{ fontSize: 32, color: 'white' }} />
      </div>

      {/* Sidebar */}
      <div className={`userinfo ${isSidebarVisible ? 'show' : ''}`}>
        <h2 className="userProfile">
          <AccountCircleIcon /> UserProfile
        </h2>
        <h2 className="setting">
          <SettingsIcon /> Setting
        </h2>
        <Link to="/leaderboard" className="LeaderboardLink">
          <h2>
            <LeaderboardIcon /> LeaderBoard
          </h2>
        </Link>
      </div>
    </>
  );
}

export default UserInfo;

import React from 'react'
import "./Userinfo.css"
import { Link } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
function UserInfo() {
  
  return (
    <div className='userinfo'>
      <h2 className='userProfile' ><AccountCircleIcon /> UserProfile
        </h2>
      <h2 className='setting'> <SettingsIcon />
        Setting
        </h2>
        <Link to={"/leaderboard"} className="LeaderboardLink"><h2 ><LeaderboardIcon />LeaderBoard</h2>
        </Link>
    </div>
  )
}

export default UserInfo
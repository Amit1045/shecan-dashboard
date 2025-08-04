import React from 'react'
import "./Dashboard.css"
import UserInfo from '../UserInfo/UserInfo'
import HomePage from './HomePage'
function Dashboard() {
  return (
    <div>
        <div className='slidbar'>
          <UserInfo />
          <HomePage />
         </div>

    </div>
  )
}

export default Dashboard
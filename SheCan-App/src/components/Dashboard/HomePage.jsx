import React from 'react'
import "./HomePage.css"
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import useUserData from '../../storeData/useUserData.js';

function HomePage() {
 
    
  const { data, error ,loading } = useUserData(); 
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  
  // console.log(data);
  const RefCode=data[0].referralCode
  const AmtRaise=data[0].AmountRaise
  return (
    <div>
     
      <div className='home-container'>
        <h1 className='dash'>Dashboard</h1>
        <div className='refer'>
          <div className='show-refferal'>
            <h1>New Refferal</h1>
             <p>Referral code: {RefCode}</p>
           </div>
          <div className='show-refferal'>
            <h1>Old Refferal</h1>
            <p>Referral code: FundforU456</p>
          </div>
        </div>
        <div className='handle-reward-amt'>
          <div className='rewardContainer'>
            <h1 className='rewardHeading'>Rewards</h1>
            <div className='listofReward'>
              <h1 className='rewardLevel'>Unlock 1  <EmojiEventsIcon className='rewardCup' /></h1>
              <h1 className='rewardLevel'>Unlock 2  <EmojiEventsIcon className='rewardCup' /></h1>
              <h1 className='rewardLevel'>Unlock 3  <EmojiEventsIcon className='rewardCup' /></h1>
            </div>
          </div>
          <div className='totalFunding'>
            <h1 className='totalFund'>Total Funds</h1>
            <div className='AmtShow'>
              <img src="https://static.vecteezy.com/system/resources/thumbnails/010/628/654/small/bar-chart-show-business-performance-and-finance-effectiveness-on-dark-blue-background-vector.jpg" alt="bargraph" className='graphImg' />
                <h1 className='amt'>${AmtRaise}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
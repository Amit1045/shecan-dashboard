import React from 'react'
import "./Leaderboard.css"
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
function Leaderboard() {


    const leader = [
        {

            name: "Amit",
            src: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
            country: "india",
            rank: "4500"
        },
        {

            name: "Rohit",
            src: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
            country: "india",
            rank: "4000"
        },
        {

            name: "Prashant",
            src: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
            country: "india",
            rank: "3800"
        },
        {

            name: "Manish",
            src: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
            country: "india",
            rank: "3500"
        },
        {

            name: "Gaurav",
            src: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
            country: "india",
            rank: "3000"
        },
    ]

    return (
        
        <div className="leaderboard-container">
        <h1 className="title"><LeaderboardIcon fontSize="large" /> Leaderboard</h1>
        <div className="leaderboard-list">
            {leader.map((item, index) => (
                <div className="leaderboard-card" key={index}>
                    <div className="leaderboard-rank">#{index + 1}</div>
                    <img className="leaderboard-img" src={item.src} alt={item.name} />
                    <div className="leaderboard-info">
                        <h2>{item.name}</h2>
                        <p>{item.country}</p>
                    </div>
                    <div className="leaderboard-score">{item.rank} pts</div>
                </div>
            ))}
        </div>
    </div>
);
}

export default Leaderboard
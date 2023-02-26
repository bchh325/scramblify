import React from 'react'
import { Link } from 'react-router-dom'

const Score = () => {
  return (
    <div class='score-pg'>
        <div class='your-score-div'>
            <h1>Your Score</h1>
            <p>xxx</p>
        </div>
        <div class='Previous Score'>
            <h1>Previous Score</h1>
            <p>xxx</p>
        </div>
        <button class='play-again-btn'><Link to="/home">Play Again?</Link></button>
    </div>
  )
}

export default Score
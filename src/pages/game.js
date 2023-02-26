import React from 'react'
import { Link } from 'react-router-dom'
const game = () => {
  return (
    <div class='game-pg'>
        <div class='score-div'>
            <h1>Score: <p>{'score'}</p></h1>
        </div>
        <div class='song-img-div'>
            <img alt='current song img'></img>
        </div>
        <div class='scrambled-word-div'>
            {/* <p>{scrambledTitle}</p> */}
        </div>
        <div class='fill-in-text-div'>
            <input type='text'></input>
        </div>
        <div class='submit-hint-btn-div'>
            <button class='submit-btn'>Submit!</button>
            <button class='hint-btn'>Hint?</button>
        </div>
    </div>
  )
}

export default game
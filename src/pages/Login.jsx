import React from 'react'
import "./../styles/loginPage.css" 
import { Link } from 'react-router-dom'

export const login = () => {
  return (
    <div class='login-pg'>
        <div class='login-title-div'>
            <h1 class='login-title'>Scramblify</h1>
        </div>
        <div class='login-btn-div'>
          <br />
          <br />
            <button class='login-btn button buttonspot'><Link to="/home">Login with Spotify</Link></button>
            <p class='login-btn-caption'>This will redirect you to the Spotify Auth Page</p>
        </div>
    </div>
  )
}

export default login 
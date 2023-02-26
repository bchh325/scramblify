import React from 'react'
import "./../styles/loginPage.css" 
import { Link } from 'react-router-dom'
import Name from '../title/Name'

export const login = () => {
  return (
    <div class='login-pg'>
        <div class='login-title-div'>
            {/* <h1 class='login-title'>Scramblify</h1> */}
            <Name />
        </div>
        <div class='login-btn-div'>
            <button class='login-btn'><Link to="/home">Login with Spotify</Link></button>
            <p class='login-btn-caption'>This will redirect you to the Spotify Auth Page</p>
        </div>
    </div>
  )
}

export default login 
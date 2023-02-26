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
        <img class='spot'src='https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png'/>
            <button class='login-btn'><Link to="/home">Login with Spotify</Link></button>
            
        </div>
        <p class='login-btn-caption'>This will redirect you to the Spotify Auth Page</p>
    </div>
  )
}

export default login 
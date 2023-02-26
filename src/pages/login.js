import React from 'react'
import "./../styles/loginPage.css" 

const login = () => {
  return (
    <div class='login-pg'>
        <div class='login-title-div'>
            <h1 class='login-title'>Scramblify</h1>
        </div>
        <div class='login-btn-div'>
            <button class='login-btn'>Login with Spotify</button>
            <p class='login-btn-caption'>This will redirect you to the Spotify Auth Page</p>
        </div>
    </div>
  )
}

export default login 
import "./../styles/loginPage.css"
import { Link } from 'react-router-dom'
import Name from '../title/Name'
import Nav from '../components/Nav'
import React, { useEffect } from 'react'
import "./../styles/loginPage.css"
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'
import QueryString from 'qs'

export const Login = () => {
  const handleLogin = () => {
    console.log("clicked")
    const url = "https://scram-back.wl.r.appspot.com/authorize"

    const options = {
      method: 'get',
      url: url,
      withCredentials: true
    }

    axios(options)
      .then(data => {
        console.log(data)
        console.log(data.data)
        window.location.replace(data.data)
      })r
      .catch(err => {
        console.log(err)
      })
  }


  return (
    <div class='login-pg'>
      <div class="name">
        <Nav />
      </div>
      <div class='login-title-div'>
        {/* <h1 class='login-title'>Scramblify</h1> */}
        <Name />
      </div>
      <div class='login-btn-div'>
        <button class='login-btn'>
          <img class='spot' src='https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png' />
          <span onClick={handleLogin} className="login-a">Login with Spotify</span>
        </button>

      </div >
      <div class='info'>
        <img src="https://www.pngall.com/wp-content/uploads/8/Warning-Sign-PNG.png" />
        <p class='login-btn-caption'>Spotify login required to access user's playlists. This will redirect you to the Spotify Authenticator Page.</p>
      </div>
    </div>
  )
}

export default Login 
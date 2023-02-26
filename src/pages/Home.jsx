import React from 'react'
import './../styles/Home.css'
import { Link } from 'react-router-dom'
import Name from '../title/Name'
import Nav from '../components/Nav'
export const Home = () => {
  return (
    <div>
        <Nav />
        <div class="home-game-starting-pg">
            
            <div class='home-title-div'>
                <h1 class='home-title'>
                <div>
                    <Name />
                </div>
                </h1>
            </div>
            <div class='home-instructions-div'>
                <div class="home-instruction-1">

                </div>
                <div class="home-instruction-2">
                    
                </div>
                <div class="home-instruction-3">
                    
                </div>
            </div>
            <div class='home-start-btn-div'>
                <span><Link to="/categories">Start Game</Link></span>
            </div>
        </div>
    </div>
  )
}

export default Home
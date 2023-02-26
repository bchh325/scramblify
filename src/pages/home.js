import React from 'react'
import './../styles/Home.css'
import { Link } from 'react-router-dom'
export const Home = () => {
  return (
    <div>
        <div class="home-game-starting-pg">
            <div class='home-title-div'>
                <h1 class='home-title'>
                <div>
                    <body>
                        <h2>
                            <span>Scramblify</span>
                            <span>crabflimSy</span>
                            <span>flyrimScab</span>
                            <span>barfmicSly</span>
                            <span>farmicylbS</span>
                            <span>BaSclimbfry</span>
                            <span>aSclimbfry</span>
                            <span>calfmyribS</span>
                            <span>barSflymic</span>
                            <span>balmcryifS</span>
                        </h2>  
                    </body> 
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
                <button><Link to="/game">Start Game!</Link></button>
            </div>
        </div>
        <div class='about us'>
            <div>about us</div>
        </div>
    </div>
  )
}

export default Home
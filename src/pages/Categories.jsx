import React from 'react'
import './../styles/categories.css'
import { Link } from 'react-router-dom'

export const Categories = () => {
  return (
    <div class='categories-div'>
        <div class='playlist-menu-div'>
            <div class='playlist-img'>
                <img alt='playlist-img'></img>
            </div>
            <div class='playlist-menu'>
            </div>
        </div>
        <div class='categories-selection-div'>
            <div class='artist-name-category'>
            <h1><Link to="/playlists">Guess the Artist Names!</Link></h1>
            </div>
            <div class='song-name-category'>
            <h1><Link to="/playlists">Guess the Song Names!</Link></h1>
            </div>
            <div class='album-name-category'>
            <h1><Link to="/playlists">Guess the Album Names!</Link></h1>
            </div>
        </div>
    </div>
  )
}

export default Categories
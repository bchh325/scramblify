import React, { useContext } from 'react'
import { CategoryContext } from '../context/CategoryContext'
import { UserContext } from '../context/UserContext'
import Scrambler from 'scrambling-text'
import { Link } from 'react-router-dom'

const Game = () => {
    const {category, setCategory} = useContext(CategoryContext)
    const {user, setUser} = useContext(UserContext)
    const {currentWord, setCurrentWord} = useContext();
    const scrambler = new Scrambler()
 
    useEffect(() => {
        let randomNum = (Math.random() * user.listOfPlaylist.body.tracks.items.length)
        if (category == 'artist_name'){
            setCurrentWord(() => currentWord = user.listOfPlaylist.tracks.items[randomNum].track.artist.name) 
        } else if (category == 'song_name') {
            setCurrentWord(() => currentWord = user.listOfPlaylist.tracks.items[randomNum].track.name) 
        } else if (category == 'playlist_name'){
            setCurrentWord(() => currentWord = user.listOfPlaylist.name) 
        } else {
            //
        }
    })

    const generateScramWords = () => {
        scrambler.scramble(currentWord)
    }
    

    return (
        <div class='game-pg'>
            <div class='score-div'>
                <h1>Score: <p>{'score'}</p></h1>
            </div>
            <div class='song-img-div'>
                <img alt='current song img'></img>
            </div>
            <div class='scrambled-word-div'>
                <p>{currentWord}</p>
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

export default Game
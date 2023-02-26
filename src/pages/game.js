import React, { useContext, useState } from 'react'
import { CategoryContext } from '../context/CategoryContext'
import { UserContext } from '../context/UserContext'
import Scrambler from 'scrambling-text'
import { Link } from 'react-router-dom'

const Game = () => {
    const {category, setCategory} = useContext(CategoryContext)
    const {user, setUser} = useContext(UserContext)
    const [currentWord, setCurrentWord] = useState();
    const [wrongInput, setWrongInputFlag] = useState(false);
    const [input, setInput] = useState('')
    const scrambler = new Scrambler()
    const score = 0;
 
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
        generateScramWords()
    }, [])

    const generateScramWords = () => {
        scrambler.scramble(currentWord)
    }

    const checkWord = (input) => {
        if (input == currentWord) {
            setWrongInputFlag(() => wrongInput = false)
            score += 100
            generateScramWords()
        } else {
            setWrongInputFlag(() => wrongInput = true)
        }
    }
    
    const handleEvent = (e) => {
        setInput(e.target.value)
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
                <input type='text' onChange={handleEvent}></input>
            </div>
            <div class='submit-hint-btn-div'>
                <button class='submit-btn' onClick={checkWord(input)}>Submit!</button>
                <button class='hint-btn'>Hint?</button>
            </div>
        </div>
    )
}

export default Game
import React, { useEffect } from 'react'
import styles from './Track.module.css'
import { useState } from 'react';

export default function Track({ title }) {
    const [userInput, setUserInput] = useState("");
    const [scrambled, setScrambled] = useState(title)
    const [answer, setAnswer] = useState(title)
    const [isCorrect, setIsCorrect] = useState(false)

    const scramble = (word) => {
        var strarray = word.split('');
        var i, j, k
        for (i = 0; i < strarray.length; i++) {
            j = Math.floor(Math.random() * i)
            k = strarray[i]
            strarray[i] = strarray[j]
            strarray[j] = k
        }
        word = strarray.join('');
        return word;
    }

    useEffect(() => {
        setScrambled(scramble(scrambled))
    }, [])

    const handleChange = (e) => {
        setUserInput(e.target.value);
    }

    useEffect(() => {
        if (userInput == answer) {
            setIsCorrect(true)
        }
    }, [userInput])

    return (
        <span className={`${styles.track} ${isCorrect ? styles.correct : ""}`}>
            <span>{scrambled}</span>
            <div className={`${styles.inputContainer}`}>
                <input value={userInput} onChange={handleChange} className={styles.input} type="text" />
            </div>
        </span>
    )
}

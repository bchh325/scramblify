import React from 'react'
import styles from "./Item.module.css"

export default function Item({ image, info, collapse, collapseHandler, getTracks }) {
    const clickHandler = () => {
        console.log(`Clicked Info: ${info.id}`)
        collapseHandler()
        getTracks(info.id)
    }
    return (
        <>
        <span className={`${collapse ? styles.collapse : ""} ${!collapse ? styles.playlist : styles.transition}`} onClick={clickHandler}>
            <span className={styles.test}>{info.name}</span>
            <img src={`${image}`} />
        </span>
        </>
    )
}

import React from 'react'
import styles from "./Item.module.css"

export default function Item({ image, info }) {
    const clickHandler = () => {
        console.log(info)
    }
    return (
        <>
        <span className={styles.playlist} onClick={clickHandler}>
            <span className={styles.test}>{info.name}</span>
            <img src={`${image}`} />
        </span>
        </>
    )
}

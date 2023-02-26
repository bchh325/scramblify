import styles from './Board.module.css'
import React, { useEffect, useState } from 'react'
import "./../styles/loginPage.css"
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'
import QueryString from 'qs'
import Item from './Item'

export default function Board() {
    const [playlists, setPlaylists] = useState(null)

    const getPlaylists = () => {
        console.log("tokens done")
        const url = "http://localhost:8888/resources"

        const options = {
            method: 'post',
            url: url,
            withCredentials: true,
            data: {
                reqUrl: "https://api.spotify.com/v1/me/playlists",
                contType: "application/json"
            }
        }

        axios(options)
            .then(res => {
                setPlaylists(res.data)
                console.log(res)
            })
            .catch(err => console.log(err))
    }

    console.log(playlists)
    useEffect(() => {
        console.log("reloaded")
        const myUrl = new URL(window.location.toLocaleString());
        const params = (QueryString.parse(myUrl.search))
        window.history.replaceState({}, document.title, "/");


        var options = null

        console.log(params)
        if (params["?code"] && params.state) {
            console.log("exists")
            const url = "http://localhost:8888/exchange"
            options = {
                method: 'post',
                url: url,
                withCredentials: true,
                data: {
                    "auth_code": params["?code"],
                    "state": params.state,
                },
                headers: {
                    'Content-Type': 'application/JSON'
                }
            }
        }

        if (options) {
            axios(options)
                .then(data => {
                    console.log("exchange done")
                    getPlaylists()
                })
                .catch(err => console.log(err))
        }


    }, [])

    return (
        <div className={styles.container}>
            <div className={`${styles.navContainer} ${styles.child}`}>
                <span>Songs</span>
                <span>Artists</span>
                <span>Album</span>
            </div>
            <div className={`${styles.gameContainer} ${styles.child}`}>
                <div className={`${styles.flexContainer} ${styles.child}`}>
                    <span>Text</span>
                    <span>Text</span>
                    <span>Text</span>
                    <span>Text</span>
                </div>
                <div className={`${styles.gridContainer} ${styles.child}`}>
                    {playlists && playlists.items.map((item, i) => {
                        console.log(item.images[0].url)
                        console.log(item)
                        return (<Item info={item} image={`${item.images[0].url}`}/>)
                    })}
                </div>
            </div>
        </div>
    )
}

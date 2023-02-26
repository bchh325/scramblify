import styles from './Board.module.css'
import React, { useEffect, useState } from 'react'
import "./../styles/loginPage.css"
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'
import QueryString from 'qs'

export default function Board() {
    const [playlists, setPlaylists] = useState(null)

    const getPlaylists = () => {
        console.log("tokens done")
        const url = "https://scram-back.wl.r.appspot.com/resources"

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
            const url = "https://scram-back.wl.r.appspot.com/exchange"
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

                        return (
                            <span>
                                <img src={`${item.images[0].url}`}/>
                            </span>)
                    })}
                </div>
            </div>
        </div>
    )
}

import styles from './Board.module.css'
import React, { useEffect, useState } from 'react'
import "./../styles/loginPage.css"
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'
import QueryString from 'qs'
import Item from './Item'
import Track from './Track'

export default function Board() {
    const [playlists, setPlaylists] = useState(null)
    const [collapse, setCollapse] = useState(false)
    const [tracks, setTracks] = useState(null)

    const collapseHandler = () => {
        collapse ? setCollapse(false) : setCollapse(true)
    }

    const getPlaylistTracks = (id) => {
        console.log("tokens done")
        const url = process.env.REACT_APP_HOST + "resources"

        const options = {
            method: 'post',
            url: url,
            withCredentials: true,
            data: {
                reqUrl: `https://api.spotify.com/v1/playlists/${id}/tracks`,
                contType: "application/json"
            }
        }

        axios(options)
            .then(res => {
                setTracks(res.data.items)
                setPlaylists(null)
                setCollapse(false)
            })
            .catch(err => console.log(err))
    }

    const getPlaylists = () => {
        console.log("tokens done")
        const url = process.env.REACT_APP_HOST + "resources"

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

    useEffect(() => {
        console.log("reloaded")
        const myUrl = new URL(window.location.toLocaleString());
        const params = (QueryString.parse(myUrl.search))
        window.history.replaceState({}, document.title, "/");


        var options = null

        console.log(params)
        if (params["?code"] && params.state) {
            console.log("exists")
            const url = process.env.REACT_APP_HOST + "exchange"
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

    console.log(collapse)
    return (
        <div className={styles.container}>
            <div className={`${styles.navContainer} ${styles.child}`}>
                <span>Songs</span>
                <span>Artists</span>
                <span onClick={collapseHandler}>Album</span>
            </div>
            <div className={`${styles.gameContainer} ${styles.child}`}>

                <div className={`${tracks == null ? styles.gridContainer : styles.trackContainer} ${styles.child}`}>
                    {playlists && playlists.items.map((item, i) => {
                        return (<Item getTracks={getPlaylistTracks} collapseHandler={collapseHandler} collapse={collapse} info={item} image={`${item.images[0].url}`}/>)
                    })}
                    {tracks && tracks.map((item) => {
                        console.log(item.track.name)
                        return (<Track title={item.track.name}/>)
                    })}
                </div>
            </div>
        </div>
    )
}

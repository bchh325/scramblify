import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { useEffect } from 'react'

const categories = () => {
  const { user, setUser } = useContext(UserContext)

  const listOfPlaylist = [];
  
  //Gets User's username and profile picture
  const GetUserPlaylist = async (token) => {
    await axios.get(`https://api.spotify.com/users/${user.user_id}/playlists`, {
      headers: {Authorization: `Bearer ${token}`}
    })
    .then((response) => {
      listOfPlaylist.push(response.body.items)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    GetUserPlaylist(user.token)
  })

  return (
    <div class='categories-div'>
        <div class='playlist-menu-div'>
            <div class='playlist-menu'>
              {
                listOfPlaylist.map((elem) => {
                  return <li>{elem.name}</li>
                })
              }
            </div>
        </div>
        <div class='categories-selection-div'>
            <div class='artist-name-category'>

            </div>
            <div class='song-name-category'>

            </div>
            <div class='album-name-category'>

            </div>
        </div>
    </div>
  )
}

export default categories
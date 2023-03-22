import  { Children, createContext, useState, useContext } from 'react'
import axios from 'axios'
import { PlaylistType } from '../types/types'

interface ContextProps {
  playlists: PlaylistType[],
  fetchPlaylists: () => void
}


const SpotifyContext = createContext({} as ContextProps)

// CREATES A CONTEXT PROVIDER WITH ALL THE SPOTIFY FUNCTIONS (THE CHILDREN)
export const SpotifyContextProvider = ({children}: any) => {
  const [playlists, setPlaylists] = useState<PlaylistType[]>([])

  const fetchPlaylists = async() => {
    try {
      const resp = await axios.get("/api/playlists")
      const data = resp.data
      setPlaylists(data.items)
    } catch (err) {
      console.error(err)
    }
    
  }
  return (
    <SpotifyContext.Provider 
      value={{
        playlists, 
        fetchPlaylists
      }}>
      {children}
    </SpotifyContext.Provider>
  )
}


export const useSpotify = () => useContext(SpotifyContext);

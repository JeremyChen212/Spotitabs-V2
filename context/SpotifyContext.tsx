import  { Children, createContext, useState, useContext } from 'react'
import axios from 'axios'
import { PlaylistType, SearchResults } from '../types/types'

interface ContextProps {
  playlists: PlaylistType[],
  fetchPlaylists: () => void
  searchResults : SearchResults[],
  fetchSearchResults: () => void
}


const SpotifyContext = createContext({} as ContextProps)

// CREATES A CONTEXT PROVIDER WITH ALL THE SPOTIFY FUNCTIONS (THE CHILDREN)
export const SpotifyContextProvider = ({children}: any) => {
  const [playlists, setPlaylists] = useState<PlaylistType[]>([])
  const [searchResults, setSearchResults] = useState<SearchResults[]>([])
  const fetchPlaylists = async() => {
    try {
      const resp = await axios.get("/api/playlists")
      const data = resp.data
      setPlaylists(data.items)
    } catch (err) {
      console.error(err)
    }
  }
  const fetchSearchResults = async() => {
    try {
      const resp = await axios.get("/api/search")
      const data = resp.data
      setSearchResults(data.items)
    } catch (err) { 
      console.log(err)
    }
  }
  return (
    <SpotifyContext.Provider 
      value={{
        playlists, 
        fetchPlaylists,
        searchResults,
        fetchSearchResults
      }}>
      {children}
    </SpotifyContext.Provider>
  )
}


export const useSpotify = () => useContext(SpotifyContext);

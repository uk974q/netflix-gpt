import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { NOW_PLAYING_API_ENDPOINT } from "../constants"
import { setNowPlayingData } from "../stores/movieSlice"

const useNowPlaying = () =>{
    const dispatchActions = useDispatch()
    useEffect(() => {
        getNowPlayingMovies()
    },[])

    const getNowPlayingMovies = async () => {
        const data = await fetch(NOW_PLAYING_API_ENDPOINT)
        const json = await data.json()
        dispatchActions(setNowPlayingData(json.results))
    }
}

export default useNowPlaying
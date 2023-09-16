import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { API_MOVIES_OPTIONS, NOW_PLAYING_MOVIES } from "../constants"
import { setNowPlayingData } from "../stores/movieSlice"

const useNowPlaying = () =>{
    const dispatchActions = useDispatch()
    useEffect(() => {
        getNowPlayingMovies()
    },[])

    const getNowPlayingMovies = async () => {
        const data = await fetch(NOW_PLAYING_MOVIES, API_MOVIES_OPTIONS)
        const json = await data.json()
        dispatchActions(setNowPlayingData(json.results))

        // console.log("Json",json)

    }
}

export default useNowPlaying
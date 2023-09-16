import { useDispatch } from "react-redux"
import { API_MOVIES_OPTIONS, LATEST_MOVIE, TRENDING_MOVIE } from "../constants"
import { setTrending } from "../stores/movieSlice"
import { useEffect } from "react"

const useTrending = () => {
    const dispatchActions = useDispatch()
    useEffect(() => {
        getLatest()
    },[])

    const getLatest = async () => {
        const data = await fetch(TRENDING_MOVIE, API_MOVIES_OPTIONS)
        const json = await data.json()
        dispatchActions(setTrending(json?.results[0]))
        
        console.log("Json",json)

    }
}

export default useTrending
import { useDispatch } from "react-redux"
import { TRENDING_MOVIE_API_ENDPOINT } from "../constants"
import { setListOfTrending, setTrending } from "../stores/movieSlice"
import { useEffect } from "react"

const useTrending = () => {
    const dispatchActions = useDispatch()
    useEffect(() => {
        getLatest()
    },[])

    const getLatest = async () => {
        const data = await fetch(TRENDING_MOVIE_API_ENDPOINT)
        const json = await data.json()
        dispatchActions(setListOfTrending(json?.results))
        dispatchActions(setTrending(json?.results[0]))
    }
}

export default useTrending
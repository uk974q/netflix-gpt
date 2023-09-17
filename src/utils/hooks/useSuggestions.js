import { useEffect } from "react"
import { SEARCH_MOVIE_API_ENDPOINT } from "../constants"
import { useDispatch, useSelector } from "react-redux"
import { setSuggestedMovies } from "../stores/movieSlice"

const useSuggestions = (movies) => {
    const dispatchActions = useDispatch()
    const suggestions = useSelector((store) => store.movie.aiTerm)
    useEffect(() => {
        fetchMovies()
    },[suggestions])

    const fetchMovies = async () => {
        let results = []
        await Promise.all(movies.map(async (el) => {
            let movie = await fetch(`${SEARCH_MOVIE_API_ENDPOINT}?movie=${el}`)
            movie = await movie.json()
            results = [...results, ...movie.results]
        }))
        dispatchActions(setSuggestedMovies(results))
    }
}

export default useSuggestions
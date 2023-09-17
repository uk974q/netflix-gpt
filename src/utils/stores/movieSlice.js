import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name: "movie",
    initialState:{
        nowPlayingData: [],
        trendingList: [],
        trending: null,
        videoKey: null,
        aiTerm: null,
        chatSuggestions: [],
        suggestedMovies: []
    },
    reducers: {
        setNowPlayingData: (state, actions) => {
            state.nowPlayingData = actions.payload
        },
        setTrending: (state, actions) => {
            state.trending = actions.payload
        },
        setVideoKey: (state, actions) => {
            state.videoKey = actions.payload
        },
        setListOfTrending: (state,actions) => {
            state.trendingList = actions.payload
        },
        setChatSuggestions: (state, actions) => {
            state.chatSuggestions = actions.payload
        },
        setSuggestedMovies: (state, actions) => {
            state.suggestedMovies = actions.payload
        },
        setAiTerm : (state, actions) => {
            state.aiTerm = actions.payload
        }
    }
})

export const {setNowPlayingData, setTrending, setVideoKey, setListOfTrending, setChatSuggestions, setSuggestedMovies, setAiTerm} = MovieSlice.actions
export default MovieSlice.reducer
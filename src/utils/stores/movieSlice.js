import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name: "movie",
    initialState:{
        nowPlayingData: [],
        trendingList: [],
        trending: null,
        videoKey: null
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
        }
    }
})

export const {setNowPlayingData, setTrending, setVideoKey, setListOfTrending} = MovieSlice.actions
export default MovieSlice.reducer
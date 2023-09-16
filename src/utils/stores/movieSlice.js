import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name: "movie",
    initialState:{
        nowPlayingData: [],
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
        } 
    }
})

export const {setNowPlayingData, setTrending, setVideoKey} = MovieSlice.actions
export default MovieSlice.reducer
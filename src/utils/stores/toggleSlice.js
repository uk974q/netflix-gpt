import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name: 'toggle',
    initialState: {
        aiSearch : false
    },
    reducers:{
        toggleAIMovie: (state) => {
            state.aiSearch = !state.aiSearch
        }
    }
})

export const {toggleAIMovie} = toggleSlice.actions
export default toggleSlice.reducer
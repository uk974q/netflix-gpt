import { createSlice } from "@reduxjs/toolkit";

const LanguageSlice = createSlice({
    name: "language",
    initialState:{
        value: "en"
    },
    reducers:{
        setLanguage:(state,actions) =>{
            state.value = actions.payload
        }
    }
})

export const {setLanguage} = LanguageSlice.actions
export default LanguageSlice.reducer
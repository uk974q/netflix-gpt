import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./stores/userSlice";
import movieSlice from "./stores/movieSlice";
import toggleSlice from "./stores/toggleSlice";
import languageSlice from "./stores/languageSlice";

const appStore = configureStore({
    reducer:{
        user : userSlice,
        movie: movieSlice,
        toggle: toggleSlice,
        language: languageSlice
    }
})

export default appStore
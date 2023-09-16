import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./stores/userSlice";
import movieSlice from "./stores/movieSlice";

const appStore = configureStore({
    reducer:{
        user : userSlice,
        movie: movieSlice
    }
})

export default appStore
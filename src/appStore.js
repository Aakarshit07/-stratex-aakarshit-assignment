import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./slices/moviesSlice";

const appStore = configureStore({
    reducer: {
        movies: moviesReducer,
    }
})

export default appStore;
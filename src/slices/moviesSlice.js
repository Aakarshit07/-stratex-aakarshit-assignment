import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movies: null,
        likedMovies: [],
    },
    reducers: {
        addmovie: (state, action) => {
            state.movies = action.payload;
        },
        addLikedMovie: (state, action) => {
            const movie = action.payload;
            if(!state.likedMovies.find(m => m.id === movie.id)) {
                state.likedMovies.push(movie)
            }
        },
        removeLikedMovie: (state, action) => {
            const movieId = action.payload;
            state.likedMovies = state.likedMovies.filter(movie => movie.id !== movieId)
        }
    }
});

export const {
    addmovie, 
    addLikedMovie, 
    removeLikedMovie 
} = moviesSlice.actions;
export default moviesSlice.reducer;

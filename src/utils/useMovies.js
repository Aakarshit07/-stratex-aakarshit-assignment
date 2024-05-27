import { useDispatch } from "react-redux";
import { addmovie } from "../slices/moviesSlice";
import { useEffect } from "react";

function useMovies() {
    const dispatch = useDispatch();
    const URL = import.meta.env.VITE_API_URL;
    const getMovies = async () => {
        try {
            const response = await fetch(URL);
            const jsonData = await response.json();
            const limitedMovies = jsonData.slice(0, 30); 
            dispatch(addmovie(limitedMovies));
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getMovies();
    }, []);
}

export default useMovies;
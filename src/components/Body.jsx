import { useSelector, useDispatch } from "react-redux";
import useMovies from "../utils/useMovies"
import MovieCards from "./MovieCards";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { Link } from "react-router-dom";
import { removeLikedMovie, addLikedMovie } from "../slices/moviesSlice";

const Body = () => {
    const moviesList = useSelector((store)=> store.movies.movies);
    const likedMovies = useSelector(store => store.movies.likedMovies);
    const dispatch = useDispatch();
    useMovies();

    if(!moviesList) return <p className="text-center my-12 text-3xl font-mono">Loading...</p>

    const isLiked = (movie) => likedMovies.some(m => m.id == movie.id)
    const handleLikedClick = (movie) => {
        if(isLiked(movie)){
            dispatch(removeLikedMovie(movie.id))
        } else {
            dispatch(addLikedMovie(movie))
        }
    }

    return (
        <div className="p-4 flex flex-wrap justify-center items-center gap-6">
            {moviesList.map((movie) => (
                <div className="52 rounded-lg border-b-2" key={`${movie.id}-${movie.image}`}>
                    <Link to={movie.imdb_url}>
                        <MovieCards movie={movie} />
                    </Link>
                    <div className="px-2">
                        <button
                            className="text-2xl p-1"
                            onClick={() => handleLikedClick(movie)}
                        >
                            {isLiked(movie) ? <FcLike /> : <FcLikePlaceholder /> }
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Body
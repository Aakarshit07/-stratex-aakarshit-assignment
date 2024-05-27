import { FcRating } from "react-icons/fc";

const MovieCards = ({movie}) => {
  return (
    <div className="bg-gray-100 w-52 h-64 rounded-lg rounded-b-none px-2">
      <img className="border-2 border-gray-300 rounded-lg" src={movie.image} alt={movie.movie} />
      <div className="mt-2 text-ellipsis text-wrap break-words line-clamp-2">
        <h2 className="font-mono text-lg font-bold">{movie.movie}</h2>
        <h2 className="flex items-center justify-start gap-2 font-mono"><FcRating />{movie.rating}</h2>
      </div>
    </div>
  )
}

export default MovieCards;
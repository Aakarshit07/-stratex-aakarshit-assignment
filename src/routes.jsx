import { createBrowserRouter } from "react-router-dom";
import HomePage from "./page/HomePage";
import LikedMovies from "./page/LikedMovies";
import Body from "./components/Body";
import ErrorPage from "./page/ErrorPage";

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/likedmovies",
                element: <LikedMovies />
            }
        ],
        errorElement: <ErrorPage />

    },
    
])
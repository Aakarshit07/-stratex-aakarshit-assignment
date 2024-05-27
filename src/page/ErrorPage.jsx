import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const err = useRouteError();
    return (   
        <div>
            <h1>Ooops! {err.status} {err.statusText}</h1>
            <h1>{err.error}</h1>
        </div>
    )
}

export default ErrorPage;
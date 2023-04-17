import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useRedirect from "../hooks/useRedirect";

const NotFound:FC = () => {

    let {message} = useRedirect("/", 3)

    return(
        <div>
            <h1>Page Not Found 404</h1>
            <p>{message}</p>
        </div>
    )
}

export default NotFound;
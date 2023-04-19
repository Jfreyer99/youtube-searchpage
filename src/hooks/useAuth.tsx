import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { getAuth } from "../api/axios"

export const useAuth = (url? : string) => {

    const navigate = useNavigate();
    const[auth, setAuth] = useState(false);
    const[username, setUsername] = useState("");
    const[email, setEmail] = useState("");

    useEffect(() => {
        getAuth()
        .then((data) => {
            if(data){
                setUsername(data.username);
                setEmail(data.email);
                setAuth(true)
                if(url){
                    navigate(url);
                }
            }
            else{
                setAuth(false)
                navigate("/Login")
            }
        }).catch((err) => {
            setAuth(false);
            navigate("/Login")
        });
    }, [])

    return {auth, username, email};
}
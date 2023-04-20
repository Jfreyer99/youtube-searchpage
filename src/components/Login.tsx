import style from "./login.module.css"

import { postLogin } from "../api/axios"
import { useState, FC } from "react"
import { useNavigate } from 'react-router-dom'
import { UserRegister } from "../types/user.d"
import { useAuth } from "../hooks/useAuth"

const Login:FC = () => {

    const { auth } = useAuth("/Dashboard");
    const navigate = useNavigate();

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const handleLogin = async (e : React.MouseEvent) => {
    const user : UserRegister = await postLogin({username, password})
        if(user){
            navigate("/Dashboard");
        }else{
            navigate("/");
        }
    }

    const redirectRegister = () => {
        navigate("/Register")
    }

    const redirectSearch = () => {
        navigate("/")
    }

    return (
    <div className={style.registerCardWrapper}>
        <div className={style.registerCard}>
            <h1>Log In</h1>
            <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className={style.registerInputText} type="text"></input>
            <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className={style.registerInputText} type="password"></input>
            <button onClick={handleLogin}className={style.registerButton}> LOG IN </button>
            <p onClick={redirectRegister} className={style.registerBottomText}>Dont have an Account? Register here</p>
            <p onClick={redirectSearch} className={style.registerBottomText}> Go back to search</p>
        </div>
    </div>
    )
}
export default Login
import style from "./login.module.css"
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate();
    
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const handleLogin = (e : React.MouseEvent) => {

    }

    const redirectRegister = () => {
        navigate("/Register")
    }

    return (
    <div className={style.registerCardWrapper}>
        <div className={style.registerCard}>
            <h1>Log In</h1>
            <input placeholder="E-Mail" value={email} onChange={(e) => setEmail(e.target.value)} className={style.registerInputText} type="text"></input>
            <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className={style.registerInputText} type="password"></input>
            <button onClick={handleLogin}className={style.registerButton}> LOG IN </button>
            <p onClick={redirectRegister} className={style.registerBottomText}>Dont have an Account? Register here</p>
        </div>
    </div>
    )
}
export default Login
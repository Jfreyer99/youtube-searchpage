import styles from "./register.module.css"
import { useState, useEffect, FC } from "react";
import { useNavigate } from 'react-router-dom'

import { postRegister } from "../api/axios"

import  { UserRegister } from './../types/user.d';

const Register:FC = () => {

    const[username, setUsername] = useState("");
    const[email, setEmail] = useState("");
    const[checked, setIsChecked] = useState(false);
    const[password, setPassword] = useState("");
    const[passwordRepeat, setPasswordRepeat] = useState("");

    const[error, setError] = useState(false);
    const[loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const redirectLogin = (e : React.MouseEvent) => {
        navigate("/Login");
    }

    const handleSignUp =  async (e : React.MouseEvent) => {
        //TODO Error checking for input
        const user : UserRegister = {
            email: email,
            password: password,
            username: username,
        }

        try{
        const response : string = await postRegister(user);
        setLoading(true);
        if(response){
            navigate("/Login")
        }
        }catch(err){
            setLoading(false);
            setError(true);
        }
    }

    const redirectSearch = () => {
        navigate("/")
    }

    return(
    <div className={styles.registerCardWrapper}>
        <div className={styles.registerCard}>
            <h1>Create Account</h1>
            {error && <h2>Fehler beim erstellen des Nutzers bitte gebe andere Daten an</h2>}
            {loading && <h2>Waiting for feedback from the server</h2>}
            <input autoFocus placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className={styles.registerInputText} type="text"></input>
            <input placeholder="E-Mail" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.registerInputText} type="text"></input>
            <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className={styles.registerInputText} type="password"></input>
            <input placeholder="Repeat Password" value={passwordRepeat} onChange={(e) => setPasswordRepeat(e.target.value)} className={styles.registerInputText} type="password"></input>
            <div className={styles.tos}>
                <input checked={checked} onChange={(e) => setIsChecked(e.target.checked)} className={styles.registerCheckbox} type="checkbox"></input>
                <p>Agree to Terms of Service of this site</p>
            </div>
            <button onClick={handleSignUp}className={styles.registerButton}> SIGN UP </button>
            <p onClick={redirectLogin} className={styles.registerBottomText}>Already have an account? Login here</p>
            <p onClick={redirectSearch} className={styles.registerBottomText}> Go back to search</p>
        </div>
    </div>
    );
}

export default Register;
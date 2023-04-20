import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import style from './header.module.css'

interface HeaderProps {
    username: string,
    auth: boolean
}


const Header:FC<HeaderProps> = (props) => {

    const navigate = useNavigate();

    const handleLogin = (e: React.MouseEvent) => {
        if(props.auth){
            navigate("/Dashboard")
        }else{
            navigate("/login")
        }
    }

    return(
    <>
        <header id={style.header}>
            <ul id={style.list}>
                <li id={style.heading}>Advanced Youtube Search</li>
                <li id={style.login} onClick={handleLogin}>{ props.auth ? props.username : 'Log In'}</li>
            </ul>
        </header>
    </>
    )
}

export default Header
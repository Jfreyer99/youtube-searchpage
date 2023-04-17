import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './header.module.css'

const Header:FC = () => {

    const navigate = useNavigate();


    const handleLogin = (e: React.MouseEvent) => {
        navigate("/login")
    }

    return(
    <>
        <header id={style.header}>
            <ul id={style.list}>
                <li id={style.heading}>Advanced Youtube Search</li>
                <li id={style.login} onClick={handleLogin}>Log In</li>
            </ul>
        </header>
    </>
    )
}

export default Header
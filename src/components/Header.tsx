import { FC } from 'react'
import style from './header.module.css'

const Header:FC = () => {
    return(
    <>
        <header id={style.header}>
            <ul id={style.list}>
                <li id={style.heading}>Advanced Youtube Search</li>
                <li id={style.login}>Log In</li>
            </ul>
        </header>
    </>
    )
}

export default Header
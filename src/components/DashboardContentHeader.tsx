import { FC } from "react";

import style from './dashboardContentHeader.module.css'

interface DashboardContentHeaderProps {
    title: String
}

const DashboardContentHeader:FC<DashboardContentHeaderProps> = (props) => {
    return(
        <div className={style.header}>
            {props.title}
        </div>
    )
}

export default DashboardContentHeader
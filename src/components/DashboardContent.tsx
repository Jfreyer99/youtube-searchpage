import { FC } from "react"

import DashboardComponent from "../types/DashboardComponent.d"

import style from "./dashboardContent.module.css"

interface DashboardContentProps {
    currentComponent: DashboardComponent
}

const DashboardContent:FC<DashboardContentProps> = (props) => {
    
    return(
        <div id={style.dashboardContent}>
            {props.currentComponent.component}
        </div>
        )
}

export default DashboardContent
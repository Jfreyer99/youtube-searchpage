import { FC } from "react"
import DashboardComponent from "../types/DashboardComponent.d"

interface DashboardContentProps {
    currentComponent: DashboardComponent
}

const DashboardContent:FC<DashboardContentProps> = (props) => {
    
    return(
        <>
            {props.currentComponent.component}
        </>
        )
}

export default DashboardContent
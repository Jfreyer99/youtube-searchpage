import { FC, useEffect } from "react"
import DashBoardComponentList from "../types/DashboardComponentsList.d"
import DashboardComponent from "../types/DashboardComponent.d"
import DashboardListItem from "./DashboardListItem"

import style from './dashboardList.module.css'

interface DashboardListProps {
    components: DashBoardComponentList,
    setComponent: React.Dispatch<React.SetStateAction<DashboardComponent>>
}

const DashboardList:FC<DashboardListProps> = (props) => {

    const handleContentChange = (e : React.MouseEvent, elementName: string) => {
        let ele : JSX.Element;
        for(let element of props.components["list"]){
            if(element.name === elementName){
                ele = element.component
                props.setComponent({"name": elementName, "component": ele})
                break;
            }
        }
    }

    return(
    <div id={style.dashboardList}>
    {props.components["list"].map((ele, index) => <DashboardListItem handleClick={handleContentChange} key={index} itemName={ele.name}></DashboardListItem> )}
    </div>)
}

export default DashboardList
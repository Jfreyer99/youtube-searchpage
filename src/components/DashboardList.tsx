import { FC } from "react"

interface DashboardListProps {
    listElements: string[]
}

export const DashboardList:FC<DashboardListProps> = (props) => {


    return(
    <>
    {props.listElements.map((ele, index) => <p key={index}> Element {index}</p>)}
    </>)
}
import { FC } from "react"
import DashboardContentHeader from "./DashboardContentHeader"

interface APIProps {

}

const API:FC<APIProps> = (props) => {
    return (
    <>
        <DashboardContentHeader title="API"></DashboardContentHeader>
        <p>API</p>
    </>)
}

export default API
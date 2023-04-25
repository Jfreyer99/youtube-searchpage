import { FC } from "react"
import DashboardContentHeader from "./DashboardContentHeader"

interface LogoutProps {

}

const Logout:FC<LogoutProps> = (props) => {
    return (
    <>
        <DashboardContentHeader title="Logout"></DashboardContentHeader>
        <p>Logout</p>
    </>)
}

export default Logout
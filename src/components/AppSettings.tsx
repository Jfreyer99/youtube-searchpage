import { FC } from "react"
import DashboardContentHeader from "./DashboardContentHeader"

interface SettingsProps {
    
}

const AppSettings:FC<SettingsProps> = (props) => {
    return (
    <>
        <DashboardContentHeader title="App Settings"></DashboardContentHeader>
        <p>App Settings</p>
    </>)
}

export default AppSettings
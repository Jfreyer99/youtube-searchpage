import { useAuth } from "../hooks/useAuth"
import { useNavigate } from "react-router-dom";
import { logout } from "../api/axios";
import { DashboardList } from "./DashboardList";
import DashboardContent from "./DashboardContent";
import { FC, useState } from "react";

import style from "./dashboard.module.css"

const Dashboard:FC = () => {

    const {auth, username, email} = useAuth(undefined, "/Login");

    const[currentComponent, setCurrentComponent] = useState("");

    const navigate = useNavigate();

    const handleLogout = async () => {
        const message: string = await logout();
        if(message) navigate("/");
    }

    const navigateLogin = () => {
        navigate("/Login")
    }

    return(
    <>
        <div className={style.header}>
            <h1 className={style.heading}>Dashboard</h1>
            <h2>Hello {username}</h2>
            <h2 onClick={handleLogout}>Logout</h2>
        </div>
        <div id={style.dashboardWrapper}>
            <DashboardList listElements={["asdf","asdf"]}></DashboardList>
            <DashboardContent></DashboardContent>
        </div>
    </>
    )
}

export default Dashboard
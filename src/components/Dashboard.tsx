import { useAuth } from "../hooks/useAuth"
import { useNavigate } from "react-router-dom";
import { logout } from "../api/axios";
import { FC, useState } from "react";

import style from "./dashboard.module.css"

import API from "./API";
import Logout from "./Logout";
import AppSettings from "./AppSettings";
import Scraping from "./Scraping"
import SearchSettings from "./SearchSettings";

import DashboardContent from "./DashboardContent";
import DashboardList from "./DashboardList";
import DashboardComponent from "../types/DashboardComponent.d";
import DashBoardComponentList from "../types/DashboardComponentsList.d";
import Account from "./Account";

const Dashboard:FC = () => {

    const {auth, username, email} = useAuth(undefined, "/Login");
    
    const[components] = useState<DashBoardComponentList>
    ({
    list : 
    [{"name": "App Settings", "component": <AppSettings></AppSettings>},
    {"name": "Account Settings", "component": <Account></Account>},
    {"name": "Search Settings", "component": <SearchSettings></SearchSettings>},
    {"name": "Scraping", "component": <Scraping></Scraping>},
    {"name": "API", "component": <API></API>},
    {"name": "Logout", "component": <Logout></Logout>},
    ]});

    const[currentComponent, setCurrentComponent] = useState<DashboardComponent>({ name: "Settings", component: <AppSettings></AppSettings> });

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
            <DashboardList components={components} setComponent={setCurrentComponent}></DashboardList>
            <DashboardContent currentComponent={currentComponent}></DashboardContent>
        </div>
    </>
    )
}

export default Dashboard
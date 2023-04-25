import { FC } from "react"
import DashboardContentHeader from "./DashboardContentHeader"

interface AccountProps{

}

const Account:FC<AccountProps> = () => {
    return(
        <>
        <DashboardContentHeader title="Account"></DashboardContentHeader>
        <p>Account</p>
        </>
    )
}

export default Account
import { useAuth } from "../hooks/useAuth"

const Dashboard = () => {

    const {auth, username, email} = useAuth();

    return (
        <>
        <h1>Dashboard</h1>
        <p>Welcome {username} your current email ist {email}</p>
        {auth}
        </>
    )
}

export default Dashboard
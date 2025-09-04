import NavBar from "../components/layout/NavBar"
import useIdleLogout from "../hooks/useIdleLogout"


const Dashboard = () => {
useIdleLogout(50000)
    return (
        <NavBar />
    )
}

export default Dashboard
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../context/UserProvider";
import { set } from "react-hook-form";

export default function useIdleLogout(timeout = 5000) {
    const navigate = useNavigate();
    const {setStatus} = useContext(userContext)
    useEffect(() => {
        let timer;
        
        const resetTimer = () => {
            clearTimeout(timer);
            timer = setTimeout(logout, timeout)
        }

        const logout = () => {
            // clear auth data
            localStorage.removeItem("token")
            localStorage.removeItem("user")

            alert("You were logged out due to inactivity")
            setStatus(true);
            navigate("/loginform")
        }

        // Event that reset timer
        const events = ["mousemove", "keydown", "click", "scroll"]

        events.forEach((event) => {
            window.addEventListener(event, resetTimer)
        })

        resetTimer(); // start timer immediately


        return () => {
            clearTimeout(timer);
            events.forEach((event) => {
                window.removeEventListener(event, resetTimer);
            })
        }
    }, [navigate, timeout])
}
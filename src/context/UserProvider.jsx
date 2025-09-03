import React, { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom'
export const userContext = createContext();

export const UserProvider = ({ children }) => {
    const [status, setStatus] = useState(true);
    const [serverError, setServerError] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()



    function handleLogin() {
        navigate('/loginform')

    }

    function handleSignup() {
        navigate('/signup')
    }

    function handleLogout() {
        // remove the session (token) and navigate to the login page
        setStatus(true);
        console.log("Logout")
        navigate('/')
    }


    return (
        <userContext.Provider value={{ handleLogin, handleSignup, handleLogout, status, setStatus, setServerError, setLoading, suggestions, setSuggestions }}>
            {children}
        </userContext.Provider>
    )
}
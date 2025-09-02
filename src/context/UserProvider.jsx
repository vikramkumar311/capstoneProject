import React, { createContext } from "react";
import {useNavigate} from 'react-router-dom'
export const userContext = createContext();

export const UserProvider = ({ children }) => {
    const navigate = useNavigate()

    function onSubmit() {
        console.log('Form Submitted')
        navigate('/work')
    }

    function onSubmitSignup() {
        navigate('/')
    }

    function handleLogin() {
        // implement authetication API
        navigate('/loginform')
    }

    function handleSignup() {
        navigate('/signup')
    }

    function handleLogout() {
        // remove the session and navigate to the login page
        console.log("Logout")
        navigate('/')
    }
    return (
        <userContext.Provider value={{ handleLogin, handleSignup, handleLogout, onSubmit, onSubmitSignup }}>
            {children}
        </userContext.Provider>
    )
}
import React, { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom'
export const userContext = createContext();

export const UserProvider = ({ children }) => {
    const [status, setStatus] = useState(true);

    const navigate = useNavigate()

    function onSubmit() {

        setStatus(false);

        console.log('Form Submitted')
        navigate('/work') // This must be a protected route

        try {
            // push API is required from backend
            // Replace with your backend login API
            // const response = await axios.post("Enter you API", data);
            console.log("API Response", response.data)

            if(response.data.success) {
                alert("Login Successful");

                // save the token
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("user", JSON.stringify(response.data.user))
            } else {
                setServerError(response.data.message || "Login failed. ")
            }
        } catch(error) {
            console.log("Error: ", error);
            if(error.response) {
                // Backend returned an error response (4xx, 5xx)
                setServerError("Server did not respond. Please try again later.")

            } else {
                setServerError("An unexpected error occured")
            }
        } finally {
            setLoading(false);
        }
    }

    function onSubmitSignup(data) {
        try {
            // post API is pass the date to backend 
            // Replace with your backend login API
            // const response = await axios.post("Enter your API", data);
            alert("Signup Successful")
            navigate('/')
        } catch (error) {
            alert(response.error)
        }
        console.log(data)

    }

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
        <userContext.Provider value={{ handleLogin, handleSignup, handleLogout, onSubmit, onSubmitSignup, status }}>
            {children}
        </userContext.Provider>
    )
}
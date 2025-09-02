import React, { createContext } from "react";
import { useNavigate } from 'react-router-dom'
export const userContext = createContext();

export const UserProvider = ({ children }) => {
    const navigate = useNavigate()

    function onSubmit() {
        console.log('Form Submitted')
        navigate('/work')
    }

    function onSubmitSignup(data) {
        try {
            // post API is required from backend
            // post API is required
            // const response = await// API
            alert("Signup Successful")
            navigate('/')
        } catch (error) {
            alert(response.error)
        }
        console.log(data)

    }

    function handleLogin() {
        navigate('/loginform')
        try {
            // push API is required from backend
            // Replace with your backend login API
            // const response = await axios.post("", data);
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
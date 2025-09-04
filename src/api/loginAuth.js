import axios from "axios";
import { email } from "zod";

const API_URL = "http://localhost:8080/api/auth/login"; // paste your login api

export async function loginUser(data, navigate, setServerError, setLoading, setStatus) {
    try {
        setLoading(true);
        const response = await axios.post(`${API_URL}`, data)
        if (response.status) {
            // save token + user info
            const {accessToken, refreshToken, tokenType} = response.data
            setStatus(false);
            if(data.rememberMe) {
                // Persistent login
                localStorage.setItem("accessToken", accessToken);
                localStorage.setItem("refreshToken", refreshToken);
            } else {
                // Temporary login (clears on tab/browser close)
                sessionStorage.setItem("token", refreshToken);
                sessionStorage.setItem("user", refreshToken);

                // here is the problem
            }

            alert("Login successful")
            navigate("/work")
        } else {

            // Handle different error messages
            if (response.data.message === "User not found") {
                setServerError("User not found. Please sign up first.");
            } else if (response.data.message === "Incorrect password") {
                setServerError("Incorrect password. Try again.");
            } else {
                setServerError(response.data.message || "Login failed.");
            }
        }
    } catch (error) {
        console.error("Login error", error);

        if (error.response) {
            setServerError(error.response.data.message || "Invalid credentials.");
        } else {
            setServerError("An unexpected error occurred. Please try again.");
        }
    } finally {
        setLoading(false)
    }
}
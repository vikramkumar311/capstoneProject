import axios from "axios";

const API_URL = "";

export async function loginUser(data, navigate, setServerError, setLoading, setStatus) {
    try {
        setLoading(true);
        const response = await axios.post(`${API_URL}/login`, data)

        if (response.data.success) {
            // save token + user info
            const {token, user} = response.data
            setStatus(false);
            if(data.rememberMe) {
                // Persistent login
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user))
            } else {
                // Temporary login (clears on tab/browser close)
                sessionStorage.setItem("token", token);
                sessionStorage.setItem("user", JSON.stringify(user))
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
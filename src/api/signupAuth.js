import axios from 'axios'

const API_URL = "http://localhost:8080/api/signup";

export async function onSubmitSignup(data, navigate, setSuggestions) {
    try {
        const response = await axios.post(API_URL, data);

        // if backend returns 200 (success)
        if (response.status === 200) {
            alert(response.data.message);
            navigate("/");
        }

    } catch (error) {
        if (error.response) {
            // Backend responded with error status
            const { status, data } = error.response;

            if (status === 409) {
                // user already exists
                setSuggestions(data.suggestions || []);
            } else if (status === 400) {
                // validation failed
                alert(data.error || "Validation failed");
            } else {
                alert(data.message || "Something went wrong");
            }
        } else if (error.request) {
            // No response from server (network error)
            alert("No response from server. Please try again.");
        } else {
            // Other unexpected errors
            alert("Unexpected error: " + error.message);
        }

        console.error("Signup error:", error);
    }
}

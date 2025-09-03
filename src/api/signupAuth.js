import axios from 'axios'


// api based url (change according to your backend)
const API_URL = ""; // signup api

export async function onSubmitSignup(data, navigate) {
    try {
        // call backend API
        const response = await axios.post(`${API_URL}`, data)

        if (response.data.success) {
            // user created successfully
            alert("Signup Successful!")
            navigate("/")
        } else {
            // user already exits, update suggestions state
            setSuggestions(response.data.suggestions || [])
        }
    } catch (error) {
        console.log("Signup error: ", error)
        alert("Something went wrong. Please try again")
    }

    console.log("Form Data Submitted:", data)


}

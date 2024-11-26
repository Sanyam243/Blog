"use client"
import { useState } from "react";
import axios from "axios";
//import { useRouter } from "next/router";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    //const router = useRouter();

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
            // Send a POST request to the signup API endpoint
            const response = await axios.post("http://localhost:5000/signup",
                 {
                email: email,
                password: password,
                name: name // Ensure the backend accepts and handles `name`
            });
    
            // Log the response for debugging
            console.log("Signup Response:", response.data);
    
            // Notify the user about the success
            alert("Signup successful! Please log in.");
            window.location.href = '/login';
            
        } catch (error: any) {
            console.error("Signup failed:", error);
    
            // Provide better feedback based on the error response
            if (error.response) {
                // Server responded with a status code outside the 2xx range
                alert(`Signup failed: ${error.response.data.error || "Unknown error"}`);
            } else if (error.request) {
                // Request was made but no response received
                alert("Signup failed: No response from server.");
            } else {
                // Other errors (e.g., network issues)
                alert("Signup failed: " + error.message);
            }
        }
    };
    
    return (
        <div className="h-screen flex justify-center items-center text-black">
            <form onSubmit={handleSignup} className="bg-white p-8 rounded-lg shadow-md w-80 text-black">
                <h2 className="text-2xl font-bold mb-4 text-black">Sign Up</h2>
                <div className="mb-4 ">
                    <label htmlFor="email" className="block text-black font-medium">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border-gray-300 rounded-lg p-2 text-black"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-medium">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border-gray-300 rounded-lg p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium">
                       Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border-gray-300 rounded-lg p-2"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default Signup;

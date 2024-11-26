"use client"
import { useState } from "react";
import axios from "axios";

import Link from 'next/link';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("http://localhost:5000/login", { email:email, password:password });
            localStorage.setItem("token", data.token);
            alert("Login successful");
            window.location.href = '/';
        } catch (error) {
            console.error("Login failed", error);
        }
    };

    return (
        <div className="h-screen flex justify-center items-center text-black">
            <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg text-black shadow-md w-80">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <div className="mb-4">
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
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;

"use client"
import { useState, useEffect } from "react";
import axios from "axios";
//import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import CreatePostForm from "../components/CreatePostForm";

const Dashboard = () => {
    const [posts, setPosts] = useState([]);
   // const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("You need to log in to access the dashboard.");
            //router.push("/login");
        } else {
            fetchPosts();
        }
    }, []);

    const fetchPosts = async () => {
        try {
            const token = localStorage.getItem("token");
            const { data } = await axios.get("http://localhost:5000/getpost", {
                headers: { token: token },
            });
            setPosts(data);
           
        } catch (error) {
            console.error("Failed to fetch posts", error);
        }
    };

    const handlePostCreated = () => {
        fetchPosts();
    };

    return (
        <div>
            <Navbar />
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">My Dashboard</h1>
                <CreatePostForm onPostCreated={handlePostCreated} />
                <h2 className="text-2xl font-bold mt-8 mb-4">My Posts</h2>
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <PostCard
                           key={post._id}
                            title={post.title}
                            content={post.content}
                            author={post.authorName}
                            createdAt={post.createdAt}
                        />
                    ))
                ) : (
                    <p>No posts found. Create your first post above!</p>
                )}
            </main>
        </div>
    );
};

export default Dashboard;

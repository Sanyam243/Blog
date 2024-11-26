"use client"
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "./components/PostCard";
import Image from "next/image";
import blog from "./assets/blog_image.jpg";
import Footer from "./components/Footer";
export default function Home() {
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
           const { data } = await axios.get("http://localhost:5000/posts", {
               headers: { token: token },
           });
           setPosts(data);
          
       } catch (error) {
           console.error("Failed to fetch posts", error);
       }
   };

   
  return (
    <div>
     <Navbar/>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center">
          
        </div>
        <h1 className="text-3xl font-bold text-center mt-8">
          Welcome to the Blog Platform
        </h1>
        <p className="text-lg text-center mt-4">
          A place to share your thoughts and ideas with the world.
        </p>

        <Image  className='items-center mt-5 mx-auto' src={blog} alt="Blog" width={800} height={500} />

</div>
<main className="container mx-auto px-4 py-8">
                <h2 className="ml-8 text-2xl font-bold mt-8 mb-4">All Blogs</h2>
                <div className=" ml-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                </div>
                
            </main>

            <Footer/>
    </div>
  );
}

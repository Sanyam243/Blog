import { useState } from "react";
import axios from "axios";

const CreatePostForm = ({ onPostCreated }: { onPostCreated: () => void }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token");
            await axios.post(
                "http://localhost:5000/post",
                { title:title, content:content },
                {
                    headers: {token: token },
                }
            );
            setTitle("");
            setContent("");
            onPostCreated();
        } catch (error) {
            console.error("Failed to create post", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md text-black">
            <h2 className="text-xl font-bold mb-4">Create New Post</h2>
            <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 font-medium">
                    Title
                </label>
                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border-gray-300 rounded-lg p-2"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="content" className="block text-gray-700 font-medium">
                    Content
                </label>
                <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full border-gray-300 rounded-lg p-2"
                    required
                />
            </div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                Post
            </button>
        </form>
    );
};

export default CreatePostForm;

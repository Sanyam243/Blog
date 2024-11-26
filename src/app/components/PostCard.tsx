interface PostCardProps {
    title: string;
    content: string;
    author: string;
    createdAt: string;
}

const PostCard = ({ title, content, author, createdAt }: PostCardProps) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-4 text-black">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-gray-700">{content}</p>
            <div className="mt-4 text-sm text-gray-500">
                <p>By: {author}</p>
                <p>{new Date(createdAt).toLocaleDateString()}</p>
            </div>
        </div>
    );
};

export default PostCard;

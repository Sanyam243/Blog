const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Footer Logo or Name */}
                    <div className="mb-4 md:mb-0">
                        <h1 className="text-xl font-bold text-white">My Blog</h1>
                        <p className="text-sm">Your daily dose of awesome content.</p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex space-x-6">
                        <a href="/" className="hover:text-white">Home</a>
                        <a href="/about" className="hover:text-white">About</a>
                        <a href="/contact" className="hover:text-white">Contact</a>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="text-center mt-6 border-t border-gray-700 pt-4 text-sm">
                    <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

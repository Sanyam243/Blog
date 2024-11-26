import Link from "next/link";

const Navbar = () => {
    const logout = () => {
        localStorage.removeItem("token");
        alert("You have been logged out.");}
        //router.push("/");
    return (
        <nav className="bg-blue-600 text-white py-4 px-8 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold ml-5 cursor-pointer">
                    Blog Platform
                </Link>
                <div className="flex space-x-4">
                    <Link href="/login" className="hover:underline cursor-pointer">
                        Login
                    </Link>
                    <Link href="/signup" className="hover:underline cursor-pointer">
                        Sign Up
                    </Link>
                    <Link href="/dashboard" className="hover:underline cursor-pointer">
                        Dashboard
                    </Link>

                    <Link href="/" className="hover:underline cursor-pointer">
                        Home
                    </Link>
                    <div className="hover:underline cursor-pointer" onClick={logout}>
                        Logout
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

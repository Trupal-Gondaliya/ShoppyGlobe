import { Link } from "react-router-dom"
function Header() {
    return (
        <>
            <header className="bg-blue-400 shadow-md">
                <div className="mx-auto flex justify-between items-center py-6 px-14">
                    {/* Logo */}
                    <div className="text-3xl font-bold">
                        <Link to="/" className="hover:text-white">
                            ShoppyGlobe
                        </Link>
                    </div>

                    {/* Navigation Menu */}
                    <nav className="flex items-center space-x-16 font-semibold">
                        <Link to="/" className="hover:text-yellow-300 transition duration-200">
                            Home
                        </Link>

                        {/* Cart Icon & Link */}
                        <Link to="/cart" className="flex items-center hover:text-yellow-300 transition duration-200">
                            <span className="mr-1">Cart</span>
                            <span className="text-2xl" role="img" aria-label="cart">
                                🛒
                            </span>
                        </Link>
                    </nav>
                </div>
            </header>
        </>
    )
}
export default Header;
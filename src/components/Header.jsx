import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/cartSlice";

function Header() {

    const navigate = useNavigate(); // Hook for navigation
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    // This function runs when Button is clicked 
    const handleSearchAction = () => {
        // Redirect to Home page where the ProductList is displayed
        navigate("/");
    };
    // This function runs when Enter is pressed
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearchAction();
        }
    }
    return (
        <>
            <header className="bg-[#19223d] shadow-md">
                <div className="text-white container mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-4 md:py-6 md:px-14 gap-4">
                    {/* Logo */}
                    <div className="text-3xl font-bold">
                        <Link to="/" className="transition-all duration-700 hover:drop-shadow-[0_0_15px_rgba(59,130,246,1)] hover:[text-shadow:0_0_30px_rgba(255,255,255,0.8),0_0_60px_rgba(255,255,255,0.6)]">
                            ShoppyGlobe
                        </Link>
                    </div>

                    {/* Search Bar Container */}
                    <div className="flex items-center w-full md:w-80 bg-gray-200 rounded">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="px-4 py-2 rounded text-black w-full md:w-80 focus:outline-none  bg-gray-200"
                            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
                            onKeyDown={handleKeyDown}
                        />
                        {/* Search Button */}
                        <button
                            onClick={handleSearchAction}
                            className="pr-3 pl-2 text-gray-600 hover:text-blue-500">
                            🔍
                        </button>
                    </div>

                    {/* Navigation Menu */}
                    <nav className="flex items-center space-x-8 md:space-x-16 font-semibold">
                        <Link to="/" className="hover:text-yellow-300 transition duration-200">
                            Home
                        </Link>

                        {/* Cart Icon & Link */}
                        <Link to="/cart" className="flex items-center hover:text-yellow-300 transition duration-200 relative">
                            <span className="mr-1">Cart</span>
                            <span className="text-2xl" role="img" aria-label="cart">
                                🛒
                            </span>
                            {cartCount > 0 && <span className="absolute -top-2 -right-3 bg-red-400 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold">{cartCount}</span>}
                        </Link>
                    </nav>
                </div>
            </header>
        </>
    )
}
export default Header;
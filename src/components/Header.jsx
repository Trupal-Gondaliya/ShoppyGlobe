import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/cartSlice";

function Header() {

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

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

                    {/* Search Bar  */}
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="px-4 py-2 rounded text-black"
                        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
                    />

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
                            {cartCount > 0 && <span className="bg-red-500 text-white rounded-full px-2 text-xs">{cartCount}</span>}
                        </Link>
                    </nav>
                </div>
            </header>
        </>
    )
}
export default Header;
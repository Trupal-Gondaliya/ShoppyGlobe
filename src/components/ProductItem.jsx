import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductItem({product}) {
    const dispatch = useDispatch();

    // arrow function to add item into cart
    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div className="border border-gray-300 rounded-2xl shadow hover:shadow-lg transition flex flex-col pb-4">
            {/* Lazy loading for images as per Performance Optimization*/}
            <img
                src={product.thumbnail}
                alt={product.title}
                className="h-40 w-full object-contain mb-4 bg-gray-200 rounded-t-2xl"
                loading="lazy"
            />
            <h3 className="font-bold text-lg mb-2 px-4">{product.title}</h3>
            <p className="text-gray-600 mb-2 px-4">${product.price}</p>

            {/* Link to Product Detail Page*/}
            <Link
                to={`/product/${product.id}`}
                className="text-blue-500 hover:underline mb-2 px-4"
            >
                View Details
            </Link>

            {/* Add to Cart Button*/}
            <button
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-blue-700 mt-auto mx-3"
                onClick={handleAddToCart}>
                Add to Cart
            </button>
        </div>
    )
}
export default ProductItem;
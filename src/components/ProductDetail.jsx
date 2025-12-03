import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductDetail() {
    const { id } = useParams(); // Get the ID from the URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // FIX: Move useDispatch to the top level, before any returns
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                // Fetch specific product details based on ID 
                const response = await fetch(`https://dummyjson.com/products/${id}`);

                if (!response.ok) {
                    throw new Error("Failed to fetch product details");
                }

                const data = await response.json();
                setProduct(data); // Store data in local state 
            } catch (err) {
                setError(err.message); // Handle errors 
            } finally {
                setLoading(false);
            }
        };

        fetchProductDetail();
    }, [id]);

    if (loading) return <div className="text-center mt-10 text-xl">Loading details...</div>;
    if (error) return <div className="text-center mt-10 text-red-500">Error: {error}</div>;
    if (!product) return <div className="text-center mt-10">Product not found</div>;

    // arrow function to add item into cart
    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div className="container mx-auto p-6 max-w-4xl">
            {/* Back Button */}
            <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
                &larr; Back to Shop
            </Link>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row border border-gray-200">
                {/* Product Image */}
                <div className="md:w-1/2 p-4 bg-gray-100 flex items-center justify-center">
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="max-h-96 object-contain"
                    />
                </div>

                {/* Product Info */}
                <div className="md:w-1/2 p-6 flex flex-col">
                    <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
                    <p className="text-gray-500 mb-4 uppercase text-sm tracking-wide">
                        {product.category}
                    </p>
                    <p className="text-yellow-400 mb-4 uppercase text-md tracking-wide font-bold">
                        ⭐{product.rating}
                    </p>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                        {product.description}
                    </p>

                    <div className="flex items-center justify-between mb-6">
                        <span className="text-2xl font-bold text-green-600">
                            ${product.price}
                        </span>
                        {product.discountPercentage && (
                            <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-semibold">
                                {product.discountPercentage}% OFF
                            </span>
                        )}
                    </div>

                    {/* Add to Cart Button */}
                    
                    <button
                        className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition font-semibold mt-auto"
                        onClick={handleAddToCart}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
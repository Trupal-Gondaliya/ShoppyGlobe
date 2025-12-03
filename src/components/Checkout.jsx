import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/cartSlice"; // Import the action

function Checkout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart.items);

    // Calculate total for summary
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const [formDetails, setFormDetails] = useState({
        name: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zipcode: ""
    });

    const handleInputChange = (e) => {
        setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
    };

    const handlePlaceOrder = (e) => {
        e.preventDefault();

        // Display Order Placed message 
        alert(`Order placed! Thank you for shopping with ShoppyGlobe, ${formDetails.name} !`);

        // Empty the cart 
        dispatch(clearCart());

        // Redirect the user back to the Home page 
        navigate("/");
    };

    return (
        <div className="container mx-auto p-6 max-w-6xl">
            <h2 className="text-3xl font-bold mb-6 text-center">Checkout</h2>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Checkout Form */}
                <div className="lg:w-2/3 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                    <h3 className="text-2xl font-semibold mb-4 border-b pb-2">Shipping Details</h3>
                    <form onSubmit={handlePlaceOrder} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formDetails.name}
                                onChange={handleInputChange}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formDetails.email}
                                onChange={handleInputChange}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Shipping Address</label>
                            <textarea
                                id="address"
                                name="address"
                                value={formDetails.address}
                                onChange={handleInputChange}
                                required
                                rows="3"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">City</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={formDetails.city}
                                onChange={handleInputChange}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <label className="block text-sm font-medium text-gray-700">State</label>
                                <input
                                    type="text"
                                    id="state"
                                    name="state"
                                    value={formDetails.state}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div className="w-1/2">
                                <label className="block text-sm font-medium text-gray-700">Zip Code</label>
                                <input
                                    type="number"
                                    id="zipcode"
                                    name="zipcode"
                                    value={formDetails.zipcode}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>

                        {/* Place Order Button  */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition">
                            Place Order
                        </button>
                    </form>
                </div>

                {/* Cart Summary */}
                <div className="lg:w-1/3 bg-gray-50 p-6 rounded-lg shadow-lg border border-gray-200 h-fit">
                    <h3 className="text-2xl font-semibold mb-4 border-b pb-2">Order Summary</h3>

                    {/* Item List */}
                    {cartItems.map(item => (
                        <div key={item.id} className="flex justify-between">
                            <div className="flex text-sm py-1">
                                <span><img src={item.thumbnail} alt={item.title}
                                    className="w-10 h-10 object-cover rounded mr-2 bg-amber-100"
                                    loading="lazy" /></span>
                                <span className="truncate pr-2">{item.title} ({item.quantity})</span>
                            </div>
                            <div>
                                <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        </div>

                    ))}

                    <div className="border-t border-black mt-4 pt-4 flex justify-between text-xl text-blue-800 font-bold">
                        <span>Total:</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
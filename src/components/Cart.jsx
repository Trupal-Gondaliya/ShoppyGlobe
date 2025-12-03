import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!!</p>
      ) : (
        <div>
          {cartItems.map((item) => <CartItem key={item.id} item={item} />)}
          <div className="mt-6 text-right">
            <h3 className="text-xl font-bold"><span className="text-green-600">Total:</span> ${total.toFixed(2)}</h3>
            <Link to="/checkout" className="bg-green-600 text-white px-6 py-2 rounded mt-4 inline-block hover:bg-green-700">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
export default Cart;
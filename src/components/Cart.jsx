import { useSelector } from "react-redux";
import CartItem from "./CartItem";

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
            <h3 className="text-xl font-bold">Total: ${total.toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
}
export default Cart;
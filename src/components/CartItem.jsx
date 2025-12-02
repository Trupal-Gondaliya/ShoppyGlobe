import { useDispatch } from "react-redux";
import { removeFromCart, incrementQuantity, decrementQuantity } from "../redux/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center border-b py-4">
      <div className="flex items-center">
        <img src={item.thumbnail} alt={item.title} className="w-16 h-16 object-cover rounded mr-4" />
        <div>
          <h3 className="font-bold">{item.title}</h3>
          <p className="text-gray-600">${item.price}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button onClick={() => dispatch(decrementQuantity(item.id))} className="px-2 bg-gray-200 rounded">-</button>
        <span>{item.quantity}</span>
        <button onClick={() => dispatch(incrementQuantity(item.id))} className="px-2 bg-gray-200 rounded">+</button>
        <button onClick={() => dispatch(removeFromCart(item.id))} className="text-red-500 ml-4 cursor-pointer">Remove</button>
      </div>
    </div>
  );
}
export default CartItem;
import { useDispatch } from "react-redux";
import { removeFromCart, incrementQuantity, decrementQuantity } from "../redux/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-0 items-center border-b py-4 gap-4">
      <div className="flex items-center w-full sm:w-auto">
        <img src={item.thumbnail} alt={item.title} className="w-16 h-16 object-cover rounded mr-4" />
        <div>
          <h3 className="font-bold line-clamp-1">{item.title}</h3>
          <p className="text-gray-600">${item.price}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button onClick={() => dispatch(decrementQuantity(item.id))} className="px-3 py-1 bg-gray-200 hover:bg-gray-500 rounded font-bold transition-colors">-</button>
        <span>{item.quantity}</span>
        <button onClick={() => dispatch(incrementQuantity(item.id))} className="px-3 py-1 bg-gray-200 hover:bg-gray-500 rounded font-bold transition-colors">+</button>
        <button onClick={() => dispatch(removeFromCart(item.id))} className="text-red-500 hover:text-red-700 font-medium text-sm transition-colors sm:ml-4">Remove</button>
      </div>
    </div>
  );
}
export default CartItem;
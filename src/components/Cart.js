import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { emptyCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const emptyCartHandler = () => {
    dispatch(emptyCart());
  };

  return cartItems.length === 0 ? (
    <div className="font-bold m-2">Please add something to Cart !</div>
  ) : (
    <>
      <h1 className="font-bold text-3xl m-2">Cart Items: {cartItems.length}</h1>
      <button
        className="btn btn-blue bg-red-300 m-2 text-green-900 font-bold p-2"
        onClick={() => emptyCartHandler()}
      >
        Empty Cart
      </button>
      {cartItems?.map((item) => {
        return <FoodItem {...item} />;
      })}
    </>
  );
};

export default Cart;

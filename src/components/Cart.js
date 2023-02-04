import { useSelector } from "react-redux";
import FoodItem from "./FoodItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <>
      <h1 className="font-bold text-3xl">Cart Items: {cartItems.length}</h1>
      {cartItems?.map((item) => {
        return <FoodItem {...item} />;
      })}
    </>
  );
};

export default Cart;

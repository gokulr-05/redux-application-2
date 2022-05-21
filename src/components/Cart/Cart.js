import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";

const Cart = (props) => {
  let items = useSelector((state) => {
    return state.cartItems;
  });

  console.log("cartItems=", items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((val) => {
          return (
            <CartItem
              key={Math.random()}
              item={{
                id: val.id,
                title: val.title,
                quantity: val.quantity,
                total: val.total,
                price: val.price,
              }}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;

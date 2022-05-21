import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  let dispatchFunc = useDispatch();
  const { id, title, quantity, total, price } = props.item;

  let incFunc = () => {
    console.log("inc");
    dispatchFunc({ type: "INC", id: id });
  };
  let decFunc = () => {
    console.log("dec");
    dispatchFunc({ type: "DEC", id: id });
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decFunc}>-</button>
          <button onClick={incFunc}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

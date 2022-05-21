import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";
const CartButton = (props) => {
  let dispatchFunc = useDispatch();

  let cartvisibility = useSelector((state) => {
    return state.cartIsVisible;
  });

  let ClickHandler = (e) => {
    dispatchFunc({ type: "toggle" });
  };

  return (
    <button
      onClick={(e) => {
        ClickHandler(e);
      }}
      className={classes.button}
    >
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;

import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";

const ProductItem = (props) => {
  const { id, title, price, description } = props;

  let dispatchFunc = useDispatch();

  let cartBtnClickHandler = (e) => {
    dispatchFunc({
      type: "ADDITEM",
      item: { id: id, title: title, price: price },
    });
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>{`$${price.toFixed(2)}`}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={cartBtnClickHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

function App() {
  let dispatch = useDispatch();

  let [initial, setInitial] = useState(true);
  let cartVisibility = useSelector((state) => {
    return state.cartIsVisible;
  });

  let cartItems = useSelector((state) => {
    return state.cartItems;
  });

  let totCartItems = useSelector((state) => {
    return state.totalQuantity;
  });

  console.log("Total Cart Items=", totCartItems);

  useEffect(() => {
    let fetchFunc1 = async () => {
      let response = await fetch(
        "https://redux-application-2-default-rtdb.firebaseio.com/cart.json"
      );

      console.log("response=", response);

      let data1 = await response.json();

      console.log("data1=", data1);

      if (data1 === null) {
        return;
      }

      let totalQuantity = data1.reduce((total, val) => {
        return total + val.quantity;
      }, 0);

      console.log("Arrived Data from Fetch GET METHOD=", data1);

      dispatch({
        type: "AddCartArr",
        cartArr: data1,
        totalQuantity: totalQuantity,
      });
    };

    let fetchFunc = async () => {
      if (initial === true) {
        setInitial(false);
        fetchFunc1();
        return;
      }

      let response = await fetch(
        "https://redux-application-2-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cartItems),
          headers: { "Content-Type": "application/json" },
        }
      );

      let data = await response.json();

      console.log("API data=", data);
    };
    fetchFunc();
  }, [cartItems]);

  return (
    <Layout>
      {cartVisibility && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;

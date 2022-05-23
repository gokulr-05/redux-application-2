import { Fragment, useEffect } from "react";
import MainHeader from "./MainHeader";
import Notification from "./Notification";
import { useSelector } from "react-redux";
import { useState } from "react";
const Layout = (props) => {
  let [count, setCount] = useState(true);

  let isChanged = useSelector((state) => {
    return state.isChanged;
  });

  let cartItems = useSelector((state) => {
    return state.cartItems;
  });

  useEffect(() => {
    setCount(true);
  }, [cartItems]);

  useEffect(() => {
    let myTimeOut = setTimeout(() => {
      setCount(false);
    }, 5000);

    return () => {
      clearInterval(myTimeOut);
    };
  }, [cartItems]);

  return (
    <Fragment>
      {isChanged && count && <Notification />}
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;

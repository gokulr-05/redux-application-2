import { createStore } from "redux";

let reducerFunc = (state, action) => {
  if (action.type === "toggle") {
    return {
      cartIsVisible: !state.cartIsVisible,
      cartItems: state.cartItems,
      totalQuantity: state.totalQuantity,
      status: state.status,
      title: state.title,
      message: state.message,
      isChanged: state.isChanged,
    };
  }

  if (action.type === "ADDITEM") {
    let latest_added_item = { ...action.item };

    let indexx = state.cartItems.findIndex((val) => {
      return val.id === latest_added_item.id;
    });

    if (indexx > -1) {
      let cartItemArr = [...state.cartItems];
      cartItemArr[indexx].quantity += 1;
      cartItemArr[indexx].total += cartItemArr[indexx].price;

      return {
        cartItems: cartItemArr,
        cartIsVisible: state.cartIsVisible,
        totalQuantity: state.totalQuantity + 1,
        status: "success",
        title: "Added",
        message: "Item Added....",
        isChanged: true,
      };
    } else {
      let cartItemArr = [...state.cartItems];
      let latest_added_item1 = {
        ...latest_added_item,
        quantity: 1,
        total: latest_added_item.price,
      };

      cartItemArr.push(latest_added_item1);

      return {
        cartItems: cartItemArr,
        cartIsVisible: state.cartIsVisible,
        totalQuantity: state.totalQuantity + 1,
        status: "success",
        title: "Added",
        message: "Item Added....",
        isChanged: true,
      };
    }
  }

  if (action.type === "AddCartArr") {
    let cartArr = action.cartArr;
    let cartTotalQuantity = action.totalQuantity;

    return {
      cartItems: cartArr,
      cartIsVisible: state.cartIsVisible,
      totalQuantity: cartTotalQuantity,
      status: "",
      title: "",
      message: "",
      isChanged: false,
    };
  }

  if (action.type === "INC") {
    let id = action.id;

    let indexx = state.cartItems.findIndex((val) => {
      return val.id === id;
    });

    let cartItemArr = [...state.cartItems];
    cartItemArr[indexx].quantity += 1;
    cartItemArr[indexx].total += cartItemArr[indexx].price;

    return {
      cartItems: cartItemArr,
      cartIsVisible: state.cartIsVisible,
      totalQuantity: state.totalQuantity + 1,
      status: "success",
      title: "Added",
      message: "Item Added....",
      isChanged: true,
    };
  }

  if (action.type === "DEC") {
    let id = action.id;

    let indexx = state.cartItems.findIndex((val) => {
      return val.id === id;
    });

    let cartItemArr = [...state.cartItems];

    if (cartItemArr[indexx].quantity <= 1) {
      cartItemArr.splice(indexx, 1);

      return {
        cartItems: cartItemArr,
        cartIsVisible: state.cartIsVisible,
        totalQuantity: state.totalQuantity - 1,
        status: "success",
        title: "Removed",
        message: "Item Removed....",
        isChanged: true,
      };
    }

    cartItemArr[indexx].quantity -= 1;
    cartItemArr[indexx].total -= cartItemArr[indexx].price;

    return {
      cartItems: cartItemArr,
      cartIsVisible: state.cartIsVisible,
      totalQuantity: state.totalQuantity - 1,
      status: "success",
      title: "Removed",
      message: "Item Removed....",
      isChanged: true,
    };
  }

  return state;
};

let store = createStore(reducerFunc, {
  cartIsVisible: true,
  cartItems: [],
  totalQuantity: 0,
  status: "",
  title: "",
  message: "",
  isChanged: false,
});

export default store;

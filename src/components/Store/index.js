import { createStore } from "redux";

let reducerFunc = (state, action) => {
  if (action.type === "toggle") {
    return { cartIsVisible: !state.cartIsVisible };
  }

  return state;
};

let store = createStore(reducerFunc, { cartIsVisible: true });

export default store;

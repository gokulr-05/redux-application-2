import { useState } from "react";
let App1 = () => {
  let [counter, setCounter] = useState(0);
  let [btn, setBtn] = useState(true);

  let inc = (e) => {
    setCounter((prev) => {
      return prev + 1;
    });
  };

  let toggle = () => {
    setBtn((prev) => {
      return !prev;
    });
  };

  return (
    <div>
      <h3 className="text-white">counter:{counter}</h3>
      <button onClick={inc}>++counter</button>
      <h3 className="text-white">btn:{btn ? 1 : 0}</h3>
      <button onClick={toggle}>TOGGLE BTN</button>
    </div>
  );
};

export default App1;

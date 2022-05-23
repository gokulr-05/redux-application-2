import { useState } from "react";

let App5 = () => {
  let [num, setNum] = useState(0);

  let f1 = () => {
    console.log("Inside f1 func: Before updating num to 1: num value=", num);
    setNum(1);
    console.log("Inside f1 func: After updating num to 1: num value=", num);
  };
  let f2 = () => {
    console.log("Inside f2 func: Before updating num to 2: num value=", num);
    setNum(2);
    console.log("Inside f2 func: After updating num to 2: num value=", num);
  };

  console.log("num=", num);
  f1();
  f2();
  console.log("num=", num);

  return <h1 className="text-white">App5</h1>;
};

export default App5;

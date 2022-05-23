import { useState } from "react";

let App4 = () => {
  let [num, setNum] = useState(1);

  let func = () => {
    console.log("inside the func function");
    setNum(0);
  };

  console.log("before func execution: num=", num);
  if (num) {
    func();
  }
  console.log("after func execution: num=", num);

  return <h1 className="text-white">App4</h1>;
};

export default App4;

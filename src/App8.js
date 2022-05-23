import { useState } from "react";
import App9 from "./App9";

let App8 = () => {
  let [n, setN] = useState(1);

  console.log("In App8 before setN n=", n);
  {
    n && setN(0);
  }

  console.log("In App8 after setN n=", n);
  return (
    <div>
      <App9 n={n} />
    </div>
  );
};

export default App8;

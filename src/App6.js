import { useState } from "react";
import App7 from "./App7";
let App6 = () => {
  let [n, setN] = useState(0);

  return (
    <div>
      <h1 className="text-white">App6</h1>
      {console.log("Before invoking App7 js: n=", n)}
      <App7 n={n} setN={setN} />
      {console.log("After invoking App7 js n=", n)}
    </div>
  );
};

export default App6;

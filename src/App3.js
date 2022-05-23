import { useEffect } from "react";
let App3 = () => {
  useEffect(() => {
    console.log("Inside useEffect: Before the return statement");

    if (1) {
      return;
    }

    console.log("Inside useEffect: After the return statement");
  }, []);

  return (
    <div>
      <h2 className="text-white">App 3</h2>
    </div>
  );
};

export default App3;

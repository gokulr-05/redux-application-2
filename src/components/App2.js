import { useState } from "react";

let App2 = () => {
  let [name, setName] = useState("");
  let [age, setAge] = useState("");

  let nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  let ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  let submitHandler = (e) => {
    e.preventDefault();

    let arr = [name, age];

    let obj = { "name:": name, "age:": age };

    let num = 1;

    let fetchHandlerArr = async () => {
      let response = await fetch(
        "https://redux-application-2-default-rtdb.firebaseio.com/dummy.json",
        {
          method: "POST",
          body: JSON.stringify(num),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      let data = await response.json();

      console.log("POST REQUEST=", data);
    };

    let fetchHandlerObj = async () => {
      let response = await fetch(
        "https://redux-application-2-default-rtdb.firebaseio.com/dummy1.json",
        {
          method: "PUT",
          body: JSON.stringify(num),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      let data1 = await response.json();

      console.log("PUT REQUEST=", data1);
    };

    fetchHandlerArr();
    fetchHandlerObj();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label className="text-white">Name</label>
        <input type="text" value={name} onChange={nameChangeHandler} />
        <label className="text-white">Age</label>
        <input type="text" value={age} onChange={ageChangeHandler} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default App2;

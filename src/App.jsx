import Navbar from "./components/Navbar";
import { useState } from "react";

const App = () => {
  //let counter = 0;
  const [counter, setCounter] = useState(0);

  const handleIncBtn = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  console.log("re-render");
  return (
    <div className="p-10">
      <Navbar />
      {counter}
      <br></br>
      <button onClick={handleIncBtn} className="p-1 bg-slate-300 rounded-xl">
        Increase
      </button>
    </div>
  );
};

export default App;

//hooks are just js fn -  useState , useEffect ,useMemo, useId, ...
// state variable are special variables that trigger a re-render when their value changes

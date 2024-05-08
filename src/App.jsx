import Navbar from "./components/Navbar";
import Counter from "./components/Counter";

const App = () => {
  console.log("App re-render");
  return (
    <div className="p-10">
      <Navbar />
      <Counter />
    </div>
  );
};

export default App;

//hooks are just js fn -  useState , useEffect ,useMemo, useId, ...
// state variable are special variables that trigger a re-render when their value changes

// whenever the parent component re-renders , all childs re-renders

// App -> Parent component of Navbar
// Navbar -> child component of app

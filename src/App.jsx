import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
import MoviesContainer from "./components/MoviesContainer";
import useFetchMovies from "./hooks/useFetchMovies";

const App = () => {
  console.log("App re-render");
  const { movies, setMovies } = useFetchMovies();
  return (
    <div className="container max-w-screen-lg mx-auto">
      <Navbar movies={movies} setMovies={setMovies} />
      <MoviesContainer movies={movies} />
    </div>
  );
};

export default App;

//hooks are just js fn -  useState , useEffect ,useMemo, useId, ...
// state variable are special variables that trigger a re-render when their value changes

// whenever the parent component re-renders , all childs re-renders

// App -> Parent component of Navbar
// Navbar -> child component of app

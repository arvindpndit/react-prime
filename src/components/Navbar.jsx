import SearchBar from "./SearchBar";

const Navbar = ({ movies, setMovies, allMoviesForFiltering }) => {
  console.log("navbar re-renders");
  return (
    <div className="flex p-4 border rounded-2xl mt-2 bg-gray-50 hover:bg-gray-100  justify-between items-center ">
      <h2 className="text-xl text-gray-700 font-semibold">Prime video</h2>
      <SearchBar
        movies={movies}
        setMovies={setMovies}
        allMoviesForFiltering={allMoviesForFiltering}
      />
      <img
        className="h-12 rounded-full"
        src="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJaaFhuNmhEV0lBb1Jva3B4U0pWb1VJdWF6MCJ9"
      ></img>
    </div>
  );
};

export default Navbar; //default export

import useFetchMovies from "../hooks/useFetchMovies";

const MoviesContainer = () => {
  const movies = useFetchMovies();

  return (
    <div className="my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies &&
        movies.map((movie, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{movie.original_title}</h2>
              <p className="text-gray-600">{movie.release_date}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MoviesContainer;

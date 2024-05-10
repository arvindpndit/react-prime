import { useEffect, useState } from "react";

const MoviesContainer = () => {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    async function getMovies() {
      const data = await fetchMoviesData();
      setMovies(data.results);
      console.log(data);
    }
    getMovies();
  }, []);

  async function fetchMoviesData() {
    const url =
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDlmN2U2ZTJmNDJlODZkMjU4Y2MyZmRmMDZhNzQ2OSIsInN1YiI6IjY1MzRjMTRkOTFmMGVhMDEzODg4NjBjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oZdu1hXdryATPGDCC1s8jFU-riobmH_soYDU4qf2-1E",
      },
    };

    const response = await fetch(url, options);
    const json = await response.json();
    return json;
  }
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

import { Link } from "react-router-dom";

const MovieDetails = () => {
  return (
    <div>
      <Link to={"/"}>
        <button className="p-2 rounded-2xl bg-gray-300">Back</button>
      </Link>
    </div>
  );
};

export default MovieDetails;

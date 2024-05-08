const SearchBar = () => {
  console.log("searchbar re-renders");
  return (
    <div className="flex items-center">
      <input
        className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:border-blue-500"
        type="text"
        placeholder="Search videos/series...."
      />
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r">
        Search
      </button>
    </div>
  );
};

export default SearchBar; //default export

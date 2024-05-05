const App = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="flex p-4 border rounded-2xl mt-2 bg-gray-50 hover:bg-gray-100 container max-w-screen-lg mx-auto justify-between items-center ">
      <h2 className="text-xl text-gray-700 font-semibold">Prime video</h2>
      <SearchBar />
      <img
        className="h-12 rounded-full"
        src="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJaaFhuNmhEV0lBb1Jva3B4U0pWb1VJdWF6MCJ9"
      ></img>
    </div>
  );
};

const SearchBar = () => {
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

export default App;

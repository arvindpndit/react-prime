const App = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
    </div>
  );
};

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        alignItems: "center",
        backgroundColor: "blue",
      }}
    >
      <h2>Prime video</h2>
      <SearchBar />
      <div>Avatar</div>
    </div>
  );
};

const SearchBar = () => {
  return (
    <div>
      <input type="text" placeholder="search videos/series...."></input>
      <button>Search</button>
    </div>
  );
};

export default App;

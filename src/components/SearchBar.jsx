function SearchBar({ searchTerm, setSearchTerm }) {    // Updates searchTerm in ProductsPage component 
  const handleSearchBar = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {/* Input field for searching products displaying current searchTerm */}
      <input
        type='text'
        value={searchTerm}
        onChange={handleSearchBar}
      />
    </form>
  );
}

export default SearchBar;
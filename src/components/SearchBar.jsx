import { useState } from "react";
import jsonData from "../data.json"

function SearchBar() {
 const [products, setProducts] = useState(jsonData);

  return (
    <div>
      <h1>Search Bar</h1>
    
    </div>
  );
}

export default SearchBar;
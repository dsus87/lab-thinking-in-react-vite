import { useState } from "react";
import jsonData from "../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState(jsonData);  // Original list of products loaded from JSON data

  // Filter products based on search term
  const filteredProducts = products.filter((product) => //search term from the state
  product.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> 
        {/* searchTerm Prop: This prop passes from the ProductsPage component down to the SearchBar component.*/}
        {/* setSearchTerm Prop: This prop passes a function (setSearchTerm) that updates the searchTerm state in the ProductsPage component*/}

      <ProductTable products={filteredProducts} />
      {/* ProductTable is given the filtered list of products as a prop,
          so it only displays products that match the search term. */}
    </div>
  );
}

export default ProductsPage;
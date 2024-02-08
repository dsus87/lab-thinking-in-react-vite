import "./App.css";
import ProductsPage from "./components/ProductsPage"; 
import SearchBar from "./components/SearchBar"; 
import ProductTable from "./components/ProductTable";

function App() {
  return (
    <div className="App">
      <h1>React | Thinking in React</h1>
      <ProductsPage />
      <SearchBar />
      <ProductTable />
    </div>
  );
}

export default App;
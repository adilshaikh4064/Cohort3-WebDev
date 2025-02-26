import  { useState } from "react";
import SearchBar from "./searchBar";
import ProductTable from "./ProductTable";

let products = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function App() {
  const [filterText, setFilterText] = useState("");
  const [isStockOnly, setInStockOnly] = useState(false);

  return (
    <>
      <SearchBar
        filterText={filterText}
        isStockOnly={isStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        isStockOnly={isStockOnly}
      />
    </>
  );
}

export default App;

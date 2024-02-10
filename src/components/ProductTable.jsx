import ProductRow from "./ProductRow";

function ProductTable({ products }) { // takes a list of productss a prop from ProductsPage (parent)
    return (
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
           {/* Iterates over the filtered list of products passed down from ProductsPage.
              This list changes based on the search term entered by the user. */}
          {products.map(product => (
            <ProductRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    );
}

export default ProductTable;
// components/ProductTable.jsx
import React, { useState } from 'react';
import jsonData from '../data.json';
import ProductRow from '../components/ProducRow'; 

function ProductTable(props) {
  const [products] = useState(jsonData);

  return (
    <div>
      <h1>Product Table</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
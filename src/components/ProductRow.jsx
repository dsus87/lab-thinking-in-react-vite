function ProductRow({ product }) {  //product prop is sent from the ProductsPage 
  return (
      <tr>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
  );
}

export default ProductRow;
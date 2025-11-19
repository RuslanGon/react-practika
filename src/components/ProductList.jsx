import React from 'react'

const ProductList = ({products}) => {
  return (
    <ul>
    {Array.isArray(products) && products.map(product => (
        <li key={product.id}>
          <img src={product.thumbnail} alt={product.title} width={150} />
          <h2>Title: {product.title}</h2>
          <p>Description: {product.description}</p>
          <h3>Price: {product.price} $</h3>
          <p>Rating: {product.rating}</p>
        </li>
      ))}
  </ul>
  )
}

export default ProductList
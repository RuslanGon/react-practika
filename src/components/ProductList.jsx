import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const ProductList = ({products}) => {

const location = useLocation()  

  return (
    <ul>
      {location.pathname === '/search' && <h2>Search results</h2>}
      {location.pathname === '/products' && <h2>Products</h2>}
    {Array.isArray(products) && products.map(product => (
        <li key={product.id}>
          <img src={product.thumbnail} alt={product.title} width={150} />
          <h2>Title: {product.title}</h2>
          <p>Description: {product.description}</p>
          <h3>Price: {product.price} $</h3>
          <p>Rating: {product.rating}</p>
          <Link to={`/products/${product.id}`}>See the details</Link>
        </li>
      ))}
  </ul>
  )
}

export default ProductList
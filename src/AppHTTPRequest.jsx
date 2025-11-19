import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AppHTTPRequest = () => {

const [products, setProducts] = useState(null)

useEffect(() => {
async function fetchProducts () {
  const {data} = await axios.get('https://dummyjson.com/products')
  // console.log(data);
setProducts(data.products)
}
fetchProducts()
},[])
  
  return (
    <div>
      <h1>Products smart marker</h1>
      <ul>
      {Array.isArray(products) && products.map(product => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} width={150} />
            <h2>Title: {product.title}</h2>
            <p>Description: {product.description}</p>
            <h3>Price: {product.price}$</h3>
            <p>Rating: {product.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AppHTTPRequest

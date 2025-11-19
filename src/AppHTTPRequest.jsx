import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AppHTTPRequest = () => {

const [products, setProdukts] = useState(null)

useEffect(() => {
async function fetchProducts () {
  const {data} = await axios.get('https://dummyjson.com/products')
  console.log(data);
  return response
}
fetchProducts()
},[])
  
  return (
    <div>
      <h1>Products smart marker</h1>
      <ul>
        <li>
          <img src="" alt="img" />
          <h2>Title:</h2>
          <p>Description:</p>
          <h3>Price:</h3>
          <p>Rating:</p>
        </li>
      </ul>
    </div>
  )
}

export default AppHTTPRequest

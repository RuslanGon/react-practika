import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from './components/Loader.jsx'
import Error from './components/Error.jsx'

const AppHTTPRequest = () => {
  const [products, setProducts] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    async function fetchProducts() {
      setIsLoading(true)
      setIsError(false)
      try {
        const { data } = await axios.get('https://dummyjson.com/products')
        setProducts(data.products)
      } catch (error) {
        console.error(error)
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div>
      <h1>Products smart marker</h1>
      {isLoading && <Loader />}
      {isError && <Error />}
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
    </div>
  )
}

export default AppHTTPRequest

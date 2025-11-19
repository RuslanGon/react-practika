import React, { useEffect, useState } from 'react'
import Loader from './components/Loader.jsx'
import Error from './components/Error.jsx'
import { requestProducts, requestProductsByQuery } from './services/api.js'
import ProductList from './components/ProductList.jsx'
import SearchForm from './components/SearchForm.jsx'

const AppHTTPRequest = () => {
  const [products, setProducts] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [query, setQuery] = useState('')
console.log(query);

  useEffect(() => {
    async function fetchProducts() {
      setIsLoading(true)
      setIsError(false)
      try {
        const data = await requestProducts()
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

   useEffect(() => {
    if(query.length === 0)return
    async function fetchProductsByQuery() {
      setIsLoading(true)
      setIsError(false)
      try {
        const data = await requestProductsByQuery(query)
        setProducts(data.products)
      } catch (error) {
        console.error(error)
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }
    fetchProductsByQuery()
  }, [query])

  const onSearchQuery = (value) => {
    setQuery(value)
  }

  return (
    <div>
      <h1>Products smart marker</h1>
      <SearchForm onSearchQuery={onSearchQuery}/>
      {isLoading && <Loader />}
      {isError && <Error />}
     <ProductList products={products}/>
    </div>
  )
}

export default AppHTTPRequest

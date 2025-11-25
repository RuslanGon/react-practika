import React, { useEffect, useState } from 'react'
import Loader from './components/Loader.jsx'
import Error from './components/Error.jsx'
import { requestProducts, requestProductsByQuery } from './services/api.js'
import ProductList from './components/ProductList.jsx'
import SearchForm from './components/SearchForm.jsx'
import { useProductSearch } from './hooks/useProductSearch.jsx'
import RefExample1 from './components/RefExample1.jsx'

const AppHTTPRequest = () => {
const {products, isLoading, isError, onSearchQuery} = useProductSearch()

  return (
    <div>
      <RefExample1 />
      <h1>Products smart marker</h1>
      <SearchForm onSearchQuery={onSearchQuery}/>
      {isLoading && <Loader />}
      {isError && <Error />}
     <ProductList products={products}/>
    </div>
  )
}

export default AppHTTPRequest

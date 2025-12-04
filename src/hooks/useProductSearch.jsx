import { useEffect, useState } from "react"
import { requestProducts, requestProductsByQuery } from "../services/api.js"
import { useSearchParams } from "react-router-dom"

export const useProductSearch = ({isSearhPage = false}) => {

    const [products, setProducts] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    // const [query, setQuery] = useState('')

    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get('query')
  
    useEffect(() => {
      if(isSearhPage) return
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
    }, [isSearhPage])
  
     useEffect(() => {
      if(query === null)return
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
      // setQuery(value)
      setSearchParams({query: value})
    }    

  return {products, isLoading, isError, onSearchQuery}
}


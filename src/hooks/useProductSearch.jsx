import { useEffect, useState } from "react"
import { requestProducts, requestProductsByQuery } from "../services/api.js"

export const useProductSearch = ({isSearhPage = false}) => {

    const [products, setProducts] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [query, setQuery] = useState('')
  
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

  return {products, isLoading, isError, onSearchQuery}
}


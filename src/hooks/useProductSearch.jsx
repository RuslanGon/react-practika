import { useEffect, useState } from "react"
import { requestProductsByQuery } from "../services/api.js"
import { useSearchParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { apiGetProducts } from "../redux/productDetails/operations.js"

export const useProductSearch = ({ isSearhPage = false }) => {

  const dispatch = useDispatch()
  
  const [products, setProducts] = useState(null)

  const globalProducts = useSelector(state => state.productDetails.products)

  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('query')

  useEffect(() => {
    if (isSearhPage) return
    dispatch(apiGetProducts())
  }, [isSearhPage])

  // поиск
  useEffect(() => {
    if (!query) return

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
    setSearchParams({ query: value })
  }

  return {
    products: isSearhPage ? products : globalProducts,
    isLoading,
    isError,
    onSearchQuery
  }
}

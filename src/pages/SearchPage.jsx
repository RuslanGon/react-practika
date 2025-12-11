import Loader from '../components/Loader.jsx'
import Error from '../components/Error.jsx'
import ProductList from '../components/ProductList.jsx'
import SearchForm from '../components/SearchForm.jsx'
import { useProductSearch } from '../hooks/useProductSearch.jsx'
import { useSearchParams } from 'react-router-dom'

const SearchPage = () => {
  const { products, isLoading, isError, onSearchQuery } = useProductSearch({ isSearhPage: true })
  const [searchParams] = useSearchParams()
  const query = searchParams.get('query')

  return (
    <div>
      <h1>Search product by name</h1>
      <SearchForm onSearchQuery={onSearchQuery} />
      {isLoading && <Loader />}
      {isError && <Error />}
      {query && products && <ProductList products={products} />}
    </div>
  )
}

export default SearchPage

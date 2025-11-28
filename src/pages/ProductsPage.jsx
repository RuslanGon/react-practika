import Loader from '../components/Loader.jsx'
import Error from '../components/Error.jsx'
import ProductList from '../components/ProductList.jsx'
import SearchForm from '../components/SearchForm.jsx'
import { useProductSearch } from '../hooks/useProductSearch.jsx'


const ProductsPage = () => {
const {products, isLoading, isError, onSearchQuery} = useProductSearch()

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

export default ProductsPage

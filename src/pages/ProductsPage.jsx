import Loader from '../components/Loader.jsx'
import Error from '../components/Error.jsx'
import ProductList from '../components/ProductList.jsx'

import { useProductSearch } from '../hooks/useProductSearch.jsx'


const ProductsPage = () => {
const {products, isLoading, isError } = useProductSearch({isSearhPage: false})

  return (
    <div>
      <h1>Products smart marker</h1>
      {isLoading && <Loader />}
      {isError && <Error />}
     <ProductList products={products}/>
    </div>
  )
}

export default ProductsPage

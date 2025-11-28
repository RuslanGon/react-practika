import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailsPage = () => {

const {productId} = useParams()    

  return (
    <div>
        <h1>Product details: {productId}</h1>
        <div>
            <img src="" alt="img" />
            <h2>Title:</h2>
            <p>Brand:</p>
            <h3>Price:</h3>
        </div>
    </div>
  )
}

export default ProductDetailsPage
import React, { useEffect } from "react";
import Loader from "../components/Loader.jsx";
import Error from "../components/Error.jsx";
import css from "./ProductDetailsPage.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { apiRequestProductsDetailsById } from "../redux/productDetails/operations.js";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const productDetails = useSelector(state => state.productDetails.productDetails)
  const isLoading = useSelector(state => state.productDetails.isLoading)
  const isError = useSelector(state => state.productDetails.isError)

useEffect(() => {
  dispatch(apiRequestProductsDetailsById(productId))
}, [dispatch, productId])

  return (
    <div className={css.container}>
      {isLoading && <Loader />}
      {isError && <Error />}
      {productDetails && (
        <div className={css.card}>
          <button className={css.backButton} onClick={() => navigate('/products')}>
            ← Back
          </button>
          <img
            className={css.image}
            src={productDetails.thumbnail}
            alt={productDetails.title}
          />
          <div className={css.info}>
            <h2 className={css.title}>{productDetails.title}</h2>
            <p className={css.brand}>Brand: {productDetails.brand}</p>
            <h3 className={css.price}>Price: ${productDetails.price}</h3>
            <div className={css.links}>
              <Link to={"/comments"}>Comments</Link>
              <Link to={"/view"}>View</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsPage;

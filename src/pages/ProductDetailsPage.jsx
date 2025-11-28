import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader.jsx";
import Error from "../components/Error.jsx";
import { requestProductDetailsById } from "../services/api.js";
import css from "./ProductDetailsPage.module.css";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchProductDetails() {
      setIsLoading(true);
      setIsError(false);
      try {
        const data = await requestProductDetailsById(productId);
        setProductDetails(data);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    if (productId) fetchProductDetails();
  }, [productId]);

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return (
    <div className={css.container}>
      {productDetails && (
        <div className={css.card}>
          <img
            className={css.image}
            src={productDetails.thumbnail}
            alt={productDetails.title}
          />
          <div className={css.info}>
            <h2 className={css.title}>{productDetails.title}</h2>
            <p className={css.brand}>Brand: {productDetails.brand}</p>
            <h3 className={css.price}>Price: ${productDetails.price}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsPage;

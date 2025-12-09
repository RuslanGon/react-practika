import { createSlice } from "@reduxjs/toolkit";
import { apiGetProducts, apiRequestProductsDetailsById } from "./operations.js";

const INITIAL_STATE = {
    productDetails: null,
    products: null,
    isLoading: false,
    isError: false
  };

  const productDetailsSlice = createSlice({
    name: "productDetails",
    initialState: INITIAL_STATE,
    extraReducers: (builder) => builder
    .addCase(apiRequestProductsDetailsById.pending, state => {
      state.isLoading = true
      state.isError = false
    }) 
    .addCase(apiRequestProductsDetailsById.fulfilled, (state, action) => {
      state.isLoading = false
      state.productDetails = action.payload
    })
    .addCase(apiRequestProductsDetailsById.rejected, (state) => {
      state.isLoading = false
      state.isError = true
    })
    .addCase(apiGetProducts.pending, state => {
      state.isLoading = true
      state.isError = false
    }) 
    .addCase(apiGetProducts.fulfilled, (state, action) => {
      state.isLoading = false
      state.products = action.payload.products
    })
    .addCase(apiGetProducts.rejected, (state) => {
      state.isLoading = false
      state.isError = true
    })
  });

  export const productDetailsReducer = productDetailsSlice.reducer
  
  



//   https://crewred.notion.site/Front-end-JS-engineer-test-assessment-the-React-component-library-2bf0fe54b07b806ab7abf8ff9ba378dd

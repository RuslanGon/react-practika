import { createSlice } from "@reduxjs/toolkit";
import { apiRequestProductsDetailsById } from "./operations.js";

const INITIAL_STATE = {
    productDetails: null,
    isLoader: false,
    isError: false
  };

  const productDetailsSlice = createSlice({
    name: "productDetails",
    initialState: INITIAL_STATE,
    extraReducers: (builder) => builder
    .addCase(apiRequestProductsDetailsById.pending, state => {
      state.isLoader = true
      state.isError = false
    }) 
    .addCase(apiRequestProductsDetailsById.fulfilled, (state, action) => {
      state.isLoader = false
      state.productDetails = action.payload
    })
    .addCase(apiRequestProductsDetailsById.rejected, (state) => {
      state.isLoader = false
      state.isError = true
    })
  });

  export const productDetailsReducer = productDetailsSlice.reducer
  
  



//   https://crewred.notion.site/Front-end-JS-engineer-test-assessment-the-React-component-library-2bf0fe54b07b806ab7abf8ff9ba378dd

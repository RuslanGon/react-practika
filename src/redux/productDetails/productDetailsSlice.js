import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    productDetails: null,
    isLoader: false,
    isError: false
  };

  const productDetailsSlice = createSlice({
    name: "productDetails",
    initialState: INITIAL_STATE,
  });

  export const productDetailsReducer = productDetailsSlice.reducer
  
  



//   https://crewred.notion.site/Front-end-JS-engineer-test-assessment-the-React-component-library-2bf0fe54b07b806ab7abf8ff9ba378dd

import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    product: [],
  };

  const productDetailsSlice = createSlice({
    name: "productDetails",
    initialState: INITIAL_STATE,
  });

  export const productDetailsReducer = productDetailsSlice.reducer
  
  


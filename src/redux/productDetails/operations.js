import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestProductDetailsById, requestProducts, requestProductsByQuery } from "../../services/api.js";

export const apiRequestProductsDetailsById = createAsyncThunk(
    'productDetails/get',
    async (productId, thunkApi) => {
        try {
            const data = await requestProductDetailsById(productId);
            return data
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)

export const apiGetProducts = createAsyncThunk(
    'products/getAll',
    async (_, thunkApi) => {
        try {
            const data = await requestProducts()
            return data
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)

export const apiSearchProducts = createAsyncThunk(
    "products/search",
    async (query) => {
      const data = await requestProductsByQuery(query);
      return data.products;
    }
  );
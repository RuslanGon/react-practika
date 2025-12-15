import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
    baseURL: 'https://connections-api.goit.global'
})

export const setToken = (token) => {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const clearerToken = () => {
    instance.defaults.headers.common.Authorization = ''
}

export const apiGetContacts = createAsyncThunk(
    'contacts/getAll',
    async (_, thunkApi) => {
      try {
        const {data} = await instance.post('/contacts')
        return data
      } catch (error) {
        return thunkApi.rejectWithValue(error.response?.data || error.message);
      }
    }
  );
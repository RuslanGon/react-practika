import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
    baseURL: 'https://connections-api.goit.global'
})

export const setToken = (token) => {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const clearerToken = (token) => {
    instance.defaults.headers.common.Authorization = ''
}

export const apiRegister = createAsyncThunk(
    'auth/register',
    async (formData, thunkApi) => {
      try {
        const {data} = await instance.post('/users/signup', formData);
        setToken(data.token)
        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.response?.data || error.message);
      }
    }
  );
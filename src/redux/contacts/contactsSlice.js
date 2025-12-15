import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  contacts: null,  
  isLoading: false,
  isError: false
  };

  const authSlice = createSlice({
    name: "contacts",
    initialState: INITIAL_STATE,

        
  });

  export const contactsReducer = contactsSlice.reducer
  
  

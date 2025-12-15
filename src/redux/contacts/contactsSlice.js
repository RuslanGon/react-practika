import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  contacts: null,  
  isLoading: false,
  isError: false
  };

  const contactsSlice = createSlice({
    name: "contacts",
    initialState: INITIAL_STATE,

        
  });

  export const contactsReducer = contactsSlice.reducer
  
  

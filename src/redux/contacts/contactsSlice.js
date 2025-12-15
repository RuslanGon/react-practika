import { createSlice } from "@reduxjs/toolkit";
import { apiAddNewContact, apiGetContacts } from "./operations.js";

const INITIAL_STATE = {
  contacts: null,  
  isLoading: false,
  isError: false
  };

  const contactsSlice = createSlice({
    name: "contacts",
    initialState: INITIAL_STATE,
    extraReducers: (builder) => builder
    .addCase(apiGetContacts.pending, state => {
        state.isLoading = true
        state.isError = false
      }) 
      .addCase(apiGetContacts.fulfilled, (state, action) => {
        state.isLoading = false
        state.contacts = action.payload

      })
      .addCase(apiGetContacts.rejected, (state) => {
        state.isLoading = false
        state.isError = true
      })
      .addCase(apiAddNewContact.pending, state => {
        state.isLoading = true
        state.isError = false
      }) 
      .addCase(apiAddNewContact.fulfilled, (state, action) => {
        state.isLoading = false
        state.contacts = [...state.contacts, action.payload]

      })
      .addCase(apiAddNewContact.rejected, (state) => {
        state.isLoading = false
        state.isError = true
      })
  });

  export const contactsReducer = contactsSlice.reducer
  
  

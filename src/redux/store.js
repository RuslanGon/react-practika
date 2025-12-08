import { mailboxReducer } from "./mailbox/mailboxReducer.js";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    mailbox: mailboxReducer
  }
})

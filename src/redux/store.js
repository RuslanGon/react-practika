import { configureStore } from "@reduxjs/toolkit";
import { mailboxReducer } from "./mailbox/mailboxReducer.js";
import { authReducer } from "./auth/authSlice.js";
import { productDetailsReducer } from "./productDetails/productDetailsSlice.js";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import { contactsReducer } from "./contacts/contactsSlice.js";

const mailboxPersistConfig = {
  key: "mailbox",
  storage,
  whitelist: ["users", "filter"],
};

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["isSignedIn", "token", "userData"],
};

const persistedMailboxReducer = persistReducer(mailboxPersistConfig, mailboxReducer);
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    mailbox: persistedMailboxReducer,
    auth: persistedAuthReducer,
    productDetails: productDetailsReducer,
    contacts: contactsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

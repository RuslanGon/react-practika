import { configureStore } from "@reduxjs/toolkit";
import { mailboxReducer } from "./mailbox/mailboxReducer.js";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import { productDetailsReducer } from "./productDetails/productDetailsSlice.js";
import { authReducer } from "./auth/authSlice.js";

const mailboxPersistConfig = {
  key: "mailbox",
  storage,
  whitelist: ["users", "filter"],
};

const persistedMailboxReducer = persistReducer(mailboxPersistConfig, mailboxReducer);

export const store = configureStore({
  reducer: {
    mailbox: persistedMailboxReducer,
    productDetails: productDetailsReducer,
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// -------------------------- 

// import { configureStore } from "@reduxjs/toolkit";
// import { mailboxReducer } from "./mailbox/mailboxReducer.js";

// export const store = configureStore({
//   reducer: {
//     mailbox: mailboxReducer
//   }
// });

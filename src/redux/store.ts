import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "@/redux/slice/auth.api";
import { booksApi } from "./slice/books.api";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware, booksApi.middleware]),
});
setupListeners(store.dispatch);

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "./api/songsApi/apiSlice";
import { topSongsApi } from "./api/topSongsApi/topSongsApi";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [topSongsApi.reducerPath]: topSongsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(topSongsApi.middleware),
});

setupListeners(store.dispatch);

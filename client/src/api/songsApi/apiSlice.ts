import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "songs",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://wojtekk-songs-rating-api.onrender.com",
    credentials: "omit",
  }),
  tagTypes: ["Songs"],
  endpoints: () => ({}),
});

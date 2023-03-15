import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "songs",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3500/",
    credentials: "omit",
  }),
  tagTypes: ["Songs"],
  endpoints: () => ({}),
});

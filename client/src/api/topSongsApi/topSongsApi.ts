import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Tracks } from "../../types/TopSong";

const baseUrl = import.meta.env.VITE_API_KEY;

console.log(baseUrl + "   base");

export const topSongsApi = createApi({
  reducerPath: "topSongsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${
      import.meta.env.VITE_API_KEY
    }&format=json&limit=3`,
  }),
  endpoints: (builder) => ({
    getTopSongs: builder.query<Tracks, null>({
      query: () => `/`,
    }),
  }),
});

export const { useGetTopSongsQuery } = topSongsApi;

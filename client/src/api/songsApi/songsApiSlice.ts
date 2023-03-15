import { Form } from "../../types/Form";
import { Song } from "../../types/Song";
import { apiSlice } from "./apiSlice";
export const songsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSongs: builder.query<Song[], void>({
      query: () => `/songs`,
      providesTags: ["Songs"],
    }),
    addSong: builder.mutation<Song, Form>({
      query: (song) => ({
        url: "/songs",
        method: "POST",
        body: song,
      }),
      invalidatesTags: ["Songs"],
    }),
    deleteSong: builder.mutation<null, string>({
      query: (id) => ({
        url: "/songs",
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: ["Songs"],
    }),
    updateSong: builder.mutation({
      query: (form) => ({
        url: `/songs`,
        method: "PATCH",
        body: {
          form,
        },
      }),
      invalidatesTags: ["Songs"],
    }),
  }),
});

export const {
  useGetSongsQuery,
  useAddSongMutation,
  useDeleteSongMutation,
  useUpdateSongMutation,
} = songsApiSlice;

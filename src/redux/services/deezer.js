import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const deezerApi = createApi({
  reducerPath: "deezerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL || "http://localhost:8080",
  }),
  prepareHeaders: (headers) => {
    headers.set("method", "GET");

    console.log(headers);

    return headers;
  },
  endpoints: (builder) => ({
    getDiscoverSongs: builder.query({ query: () => "/discover" }),
    getTopCharts: builder.query({ query: () => "/chart/" }),
    getSongDetails: builder.query({
      query: ({ songid }) => `/track/${songid}`,
    }),
    getArtistDetails: builder.query({ query: ({ id }) => `/artist/${id}` }),
    getSongsBySearch: builder.query({
      query: ({ searchTerm }) => `/search/${searchTerm}`,
    }),
  }),
});

export const {
  useGetDiscoverSongsQuery,
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetArtistDetailsQuery,
  useGetSongsBySearchQuery,
} = deezerApi;

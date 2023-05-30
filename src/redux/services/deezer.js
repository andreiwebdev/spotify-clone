import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const deezerApi = createApi({
  reducerPath: "deezerApi", // name of the api
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://api.deezer.com",
    baseUrl: "https://cors-anywhere.herokuapp.com/https://api.deezer.com",
  }),
  prepareHeaders: (headers) => {
    headers.set("method", "GET");

    console.log(headers);

    return headers;
  },
  endpoints: (builder) => ({
    getDiscoverSongs: builder.query({ query: () => "/playlist/9316866282" }),
    getTopCharts: builder.query({ query: () => "/chart/" }),
    getSongDetails: builder.query({
      query: ({ songid }) => `/track/${songid}`,
    }),
    getArtistDetails: builder.query({ query: ({ id }) => `/artist/${id}` }),
    getSongsBySearch: builder.query({
      query: ({ searchTerm }) => `/search?q=${searchTerm}`,
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

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const deezerApi = createApi({
  reducerPath: "deezerApi", // name of the api
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cors-anywhere.herokuapp.com/https://api.deezer.com",
  }),
  prepareHeaders: (headers) => {
    headers.set("method", "GET");

    return headers;
  },
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/chart/" }),
    getSongDetails: builder.query({
      query: ({ songid }) => `/track/${songid}`,
    }),
    getArtistDetails: builder.query({ query: ({ id }) => `/artist/${id}` }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetArtistDetailsQuery,
} = deezerApi;

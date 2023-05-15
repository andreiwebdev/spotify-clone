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
    getTopCharts: builder.query({ query: () => "/playlist/7442292304" }),
  }),
});

export const { useGetTopChartsQuery } = deezerApi;

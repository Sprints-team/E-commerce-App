import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { serverHost } from "../hooks/axios";

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: serverHost }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products`,
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;

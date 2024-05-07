import baseQuery from "@/config/BaseQuery";
import {
  responseBookTypes,
  responseCategoryTypes,
  responseReviewTypes,
} from "@/types/books";
import { createApi } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getBooks: builder.query<
      responseBookTypes["data"],
      { category: string; search: string }
    >({
      query: (payload) => ({
        url: "books",
        params: payload,
      }),
      transformResponse: (response: responseBookTypes) => response.data,
    }),
    getCategories: builder.query<responseCategoryTypes["data"], void>({
      query: () => ({
        url: "category",
      }),
      transformResponse: (response: responseCategoryTypes) => response.data,
    }),
    getReviews: builder.query<responseReviewTypes["data"], void>({
      query: () => ({
        url: "reviews",
      }),
      transformResponse: (response: responseReviewTypes) => response.data,
    }),
  }),
});

export const { useGetBooksQuery, useGetCategoriesQuery, useGetReviewsQuery } = booksApi;

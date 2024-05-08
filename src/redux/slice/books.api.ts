import baseQuery from "@/config/BaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import type {
  responseBookTypes,
  responseBorrowedTypes,
  responseCategoryTypes,
  responseCollectionTypes,
  responseDetailBookTypes,
  responseReviewTypes,
} from "@/types/books";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: baseQuery,
  tagTypes: ["GET_DETAIL"],
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
    getDetailBook: builder.query<responseDetailBookTypes["data"], string>({
      query: (id) => ({
        url: `books/${id}`,
      }),
      transformResponse: (response: responseDetailBookTypes) => response.data,
      providesTags: ["GET_DETAIL"],
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
    postAddFavorite: builder.mutation<any, string>({
      query: (book_id) => ({
        url: "collections",
        method: "POST",
        body: {
          book_id,
        },
      }),
      invalidatesTags: ["GET_DETAIL"],
    }),
    getCollectionFavoriteBooks: builder.query<
      responseCollectionTypes["data"],
      void
    >({
      query: () => ({
        url: "collections",
      }),
      transformResponse: (response: responseCollectionTypes) => response.data,
    }),
    getBorrowedBooks: builder.query<responseBorrowedTypes["data"], void>({
      query: () => ({
        url: "borrowing",
      }),
      transformResponse: (response: responseBorrowedTypes) => response.data,
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetCategoriesQuery,
  useGetReviewsQuery,
  useGetDetailBookQuery,
  usePostAddFavoriteMutation,
  useGetCollectionFavoriteBooksQuery,
  useGetBorrowedBooksQuery,
} = booksApi;

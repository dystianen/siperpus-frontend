import baseQuery from "@/config/BaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import type {
  responseBookTypes,
  responseBorrowedTypes,
  responseCategoryTypes,
  responseCollectionTypes,
  responseDetailBookTypes,
  responseReviewTypes,
  responseTotalFineTypes,
} from "@/types/books";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: baseQuery,
  tagTypes: ["GET_DETAIL", "LIST_BORROWED", "COLLECTIONS"],
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
      invalidatesTags: ["GET_DETAIL", "COLLECTIONS"],
    }),
    getCollectionFavoriteBooks: builder.query<
      responseCollectionTypes["data"],
      void
    >({
      query: () => ({
        url: "collections",
      }),
      transformResponse: (response: responseCollectionTypes) => response.data,
      providesTags: ["COLLECTIONS"],
    }),
    postBorrowedBook: builder.mutation<any, string>({
      query: (book_id) => ({
        url: "borrowing",
        method: "POST",
        body: {
          book_id,
        },
      }),
      invalidatesTags: ["LIST_BORROWED"],
    }),
    getBorrowedBooks: builder.query<responseBorrowedTypes["data"], void>({
      query: () => ({
        url: "borrowing",
        method: "GET",
      }),
      transformResponse: (response: responseBorrowedTypes) => response.data,
      providesTags: ["LIST_BORROWED"],
    }),
    postReturnBook: builder.mutation({
      query: (payload) => ({
        url: "return",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["LIST_BORROWED"],
    }),
    getTotalFine: builder.query<responseTotalFineTypes["data"], string>({
      query: (borrow_id) => ({
        url: "total-fine",
        params: {
          borrow_id,
        },
      }),
      transformResponse: (response: responseTotalFineTypes) => response.data,
    }),
    postReviewBook: builder.mutation<
      any,
      { book_id: string; rating: number; review: string }
    >({
      query: (payload) => ({
        url: "review",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["LIST_BORROWED"],
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
  usePostBorrowedBookMutation,
  useGetBorrowedBooksQuery,
  usePostReturnBookMutation,
  useLazyGetTotalFineQuery,
  usePostReviewBookMutation,
} = booksApi;

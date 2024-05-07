import baseQuery from "@/config/BaseQuery";
import type { requestLoginTypes, responseLoginTypes } from "@/types/auth";
import { createApi } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    postLogin: builder.mutation<responseLoginTypes["data"], requestLoginTypes>({
      query: (data) => ({
        url: "login",
        method: "POST",
        body: data,
      }),
      transformResponse: (response: responseLoginTypes) => response.data,
    }),
    postRegister: builder.mutation<
      responseLoginTypes["data"],
      requestLoginTypes
    >({
      query: (data) => ({
        url: "register",
        method: "POST",
        body: data,
      }),
      transformResponse: (response: responseLoginTypes) => response.data,
    }),
  }),
});

export const { usePostLoginMutation, usePostRegisterMutation } = authApi;

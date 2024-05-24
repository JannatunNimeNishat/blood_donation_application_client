import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMyProfileInfo: build.query({
      query: () => ({
        url: "/my-profile",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    updateUserInfo: build.mutation({
      query: (data) => {
        return {
          url: `/update-my-profile`,
          method: "PUT",
          data: data,
        };
      },
      invalidatesTags: [tagTypes.user],
    }),
    getMyBloodRequests: build.query({
      query: () => ({
        url: "/get-my-all-blood-requests",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
  }),
});

export const { useUpdateUserInfoMutation, useGetMyProfileInfoQuery,useGetMyBloodRequestsQuery } = userApi;

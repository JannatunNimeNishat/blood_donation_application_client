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
  }),
});

export const { useUpdateUserInfoMutation, useGetMyProfileInfoQuery } = userApi;

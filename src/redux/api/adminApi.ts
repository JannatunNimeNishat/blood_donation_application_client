import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUsers: build.query({
      query: () => ({
        url: "/all-users",
        method: "GET",
      }),
      providesTags: [tagTypes.admin],
    }),
    changeUserRole: build.mutation({
      query: (data) => ({
        url: `/change-user-role/${data?.id}`,
        method: "PUT",
        data: {
          role: data?.role,
        },
      }),
      invalidatesTags: [tagTypes.admin],
    }),
    changeUserAccountType: build.mutation({
        query: (data) => ({
          url: `/change-account-type/${data?.id}`,
          method: "PUT",
          data: {
            accountType: data?.type,
          },
        }),
        invalidatesTags: [tagTypes.admin],
      }),
  }),
});

export const { useGetAllUsersQuery, useChangeUserRoleMutation,useChangeUserAccountTypeMutation } = adminApi;

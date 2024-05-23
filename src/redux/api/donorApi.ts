import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const donorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllDonor: build.query({
      query: (arg: Record<string, any>) => {
        const params = new URLSearchParams();
        if (arg) {
          arg.forEach((item: any) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/donor-list",
          method: "GET",
          params: params,
        };
      },
      providesTags: [tagTypes.donor],
    }),
  }),
});

export const { useGetAllDonorQuery } = donorApi;

import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const bloodRequestApi = baseApi.injectEndpoints({
    endpoints:(build)=>({
        createBloodRequest:build.mutation({
            query:(data)=>({
                url:'/donation-request',
                method:'POST',
                data
            }),
            invalidatesTags:[tagTypes.user]
        })
    })
})

export const {useCreateBloodRequestMutation} = bloodRequestApi;
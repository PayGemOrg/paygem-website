import { axiosHook } from "./axios"
import {
    getAllByAddressRequest
} from "./types"

const usersAPI = {
    getUserMetrics: async ({
        address,
        callback,
        handleError,
    }: getAllByAddressRequest) => {
        try {
            const response = await axiosHook.get(`/api/v1/users/metrics/${address}/`)
            callback(response.data)
        } catch (error) {
            handleError(error)
        }
    },

    getNextRenewals: async ({
        address,
        callback,
        handleError,
    }: getAllByAddressRequest) => {
        try {
            const response = await axiosHook.get(`/api/v1/users/next_renewals/${address}/`)
            callback(response.data)
        } catch (error) {
            handleError(error)
        }
    }
}

export {
    usersAPI
}
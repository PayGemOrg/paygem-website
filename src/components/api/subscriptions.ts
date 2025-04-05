import { axiosHook } from "./axios"
import {
    getAllByAddressRequest
} from "./types"

const subscriptionAPI = {
    getAllUserSubscriptions: async ({
        address,
        callback,
        handleError,
    }: getAllByAddressRequest) => {
        try {
            const response = await axiosHook.get(`/api/v1/subscriptions/${address}/`)
            callback(response.data)
        } catch (error) {
            handleError(error)
        }
    }
}

export {
    subscriptionAPI
}
import axios from "axios";
import {  config } from "./config";


const axiosHook = axios.create({
    baseURL: config.BASE_URL,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

export {
    axiosHook
}

import axios from "axios";
import { headers } from "next/headers";
const referer = headers().get("referer");

const baseURL = referer?.split("/")[0] + "//" + referer?.split("/")[2];
// console.log("ssssssssss",baseURL)
// const origin = (window as any).location.origin
// console.log(origin)
const axiosClient = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosClient.interceptors.response.use(
    function (response) {
        //return response.data;
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default axiosClient;
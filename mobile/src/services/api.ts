import axios from "axios";

export const api = axios.create({
    baseURL: "http://10.240.142.102:3333"
})
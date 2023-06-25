import axios from "axios";


export const BASE_URL = 'http://127.0.0.1:8000/'

const apiClient = axios.create({
    baseURL: BASE_URL
})

export default apiClient
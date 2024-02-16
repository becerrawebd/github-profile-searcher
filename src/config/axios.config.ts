import axios from "axios"

const API_BASE_URL = 'https://api.github.com'

const axiosInstance = axios.create({
    baseURL: API_BASE_URL
})

export { axiosInstance }
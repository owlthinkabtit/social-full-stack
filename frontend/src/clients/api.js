import axios from 'axios'

export const token = () => localStorage.getItem('token')

const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000"

export const userClient = axios.create({
  baseURL: `${BASE_URL}/api/users`,
  headers: {
    Authorization: `Bearer ${token()}`
  }
})

export const postClient = axios.create({
  baseURL: `${BASE_URL}/api/posts`
})

postClient.interceptors.request.use((req) => {
  if (token()) req.headers.Authorization = `Bearer ${token()}`
  return req
})
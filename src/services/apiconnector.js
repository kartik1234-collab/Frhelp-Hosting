// import axios from "axios"

// // ✅ Create axios instance properly
// export const axiosInstance = axios.create({})

// export const apiConnector = (method, url, bodyData, headers, params) => {
//   return axiosInstance({
//     method: method,
//     url: url,
//     data: bodyData || null,
//     headers: headers || {},      // never null
//     params: params || null,
//   })
// }


// import axios from "axios"

// const axiosInstance = axios.create({
//   baseURL: process.env.REACT_APP_BASE_URL,
// })

// 🔥 INTERCEPTOR — runs before every request
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token")

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`
//     }

//     return config
//   },
//   (error) => Promise.reject(error)
// )

// export const apiConnector = (method, url, bodyData, headers = {}, params = {}) => {
//   return axiosInstance({
//     method,
//     url,
//     data: bodyData,
//     headers,
//     params,
//   })
// }
import axios from "axios"

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
})

// 🔐 AUTO-INJECT TOKEN INTO EVERY REQUEST
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

export const apiConnector = (method, url, bodyData, headers = {}, params = {}) => {
  return axiosInstance({
    method,
    url,
    data: bodyData,
    headers,
    params,
  })
}

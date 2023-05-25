import axios from "axios";

export function useApi() {
  axios.interceptors.request.use(
    (req) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        req.headers.set("Authorization", `Bearer ${token}`);
      }
      return req;
    },
    (error) => {
      return Promise.reject(error);
    })
}

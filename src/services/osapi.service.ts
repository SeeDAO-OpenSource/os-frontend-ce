import axios from "axios"
import server from "../config/server"
import JwtService from "./jwt.service"

const API_ERROR_START = 260

/**
 * Service to call HTTP request via Axios
 */
const ApiService = {
    init() {
        axios.defaults.baseURL = server.axios.baseURL
    },

    /**
     * Set the default HTTP request headers
     */
    setHeader() {
        axios.defaults.headers.common[
            "Authorization"
        ] = `${JwtService.getToken()}`
    },
    get(resource: string, slug: string = "") {
        return new Promise((resolve, reject) => {
            ApiService.setHeader()
            axios.get(`${resource}/${slug}`).then(res => {
                console.log("res", res)
                if (res.data.status < API_ERROR_START) {
                    resolve(res)
                } else {
                    reject(res)
                }
            })
        })
    },

    post(resource: string, params: object): Promise<{ data: { data: any } }> {
        return new Promise((resolve, reject) => {
            ApiService.setHeader()
            axios.post(`${resource}`, params).then(res => {
                console.log("res", res)
                if (res.data.status < API_ERROR_START) {
                    resolve(res)
                } else {
                    reject(res)
                }
            })
        })
    },

    update(resource: string, slug: string, params: object) {
        return new Promise((resolve, reject) => {
            ApiService.setHeader()
            axios.put(`${resource}/${slug}`, params).then(res => {
                // console.log("res",res);
                if (res.data.status < API_ERROR_START) {
                    resolve(res)
                } else {
                    reject(res)
                }
            })
        })
    },


    put(resource: string, params: object) {
        return new Promise((resolve, reject) => {
            ApiService.setHeader()
            axios.put(`${resource}`, params).then(res => {
                // console.log("res",res);
                if (res.data.status < API_ERROR_START) {
                    resolve(res)
                } else {
                    reject(res)
                }
            })
        })
    },

    delete(resource: string) {
        return new Promise((resolve, reject) => {
            ApiService.setHeader()
            axios.delete(resource).then(res => {
                // console.log("res",res);
                if (res.data.status < API_ERROR_START) {
                    resolve(res)
                } else {
                    reject(res)
                }
            })
        })
    }
}
ApiService.init()

export default ApiService

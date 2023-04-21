import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import serverConfig from "../config/server";
import JwtService from "./jwt.service";

const API_ERROR_START = 260;

/**
 * Service to call HTTP request via Axios
 */
const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = serverConfig.axios.baseURL;
  },

  /**
   * Set the default HTTP request headers
   */
  setHeader() {
    Vue.axios.defaults.headers.common[
      "Authorization"
    ] = `${JwtService.getToken()}`;
  },
  /**
   * Send the GET HTTP request
   * @param resource
   * @param slug
   * @returns {*}
   */
  get(resource, slug = "") {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      Vue.axios.get(`${resource}/${slug}`).then(res => {
        console.log("res",res);
        if (res.data.status < API_ERROR_START) {
          resolve(res);
        } else {
          reject(res);
        }
      });
    });
  },

  /**
   * Set the POST HTTP request
   * @param resource
   * @param params
   * @returns {*}
   */
  post(resource, params) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      Vue.axios.post(`${resource}`, params).then(res => {
        console.log("res",res);
        if (res.data.status < API_ERROR_START) {
          resolve(res);
        } else {
          reject(res);
        }
      });
    });
  },

  /**
   * Send the UPDATE HTTP request
   * @param resource
   * @param slug
   * @param params
   * @returns {IDBRequest<IDBValidKey> | Promise<void>}
   */
  update(resource, slug, params) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      Vue.axios.put(`${resource}/${slug}`, params).then(res => {
        // console.log("res",res);
        if (res.data.status < API_ERROR_START) {
          resolve(res);
        } else {
          reject(res);
        }
      });
    });
  },

  /**
   * Send the PUT HTTP request
   * @param resource
   * @param params
   * @returns {IDBRequest<IDBValidKey> | Promise<void>}
   */
  put(resource, params) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      Vue.axios.put(`${resource}`, params).then(res => {
        // console.log("res",res);
        if (res.data.status < API_ERROR_START) {
          resolve(res);
        } else {
          reject(res);
        }
      });
    });
  },

  /**
   * Send the DELETE HTTP request
   * @param resource
   * @returns {*}
   */
  delete(resource) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      Vue.axios.delete(resource).then(res => {
        // console.log("res",res);
        if (res.data.status < API_ERROR_START) {
          resolve(res);
        } else {
          reject(res);
        }
      });
    });
  }
};

export default ApiService;

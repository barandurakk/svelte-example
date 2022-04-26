// Api.js
import axios from "axios";

type methodType = "get" | "post" | "put" | "patch" |"delete"

// Create a instance of axios to use the same base url.
const axiosAPI = axios.create({
  baseURL : "https://pokeapi.co/api/v2/"
});

// implement a method to execute all the request from here.
const apiRequest = (method:methodType, url:string, body?:any) => {
    const headers = {
        authorization: ""
    };
    //using the axios instance to perform the request that received from each http method
    return axiosAPI({
        method,
        url,
        data: body,
        headers
      }).then(res => {
        return Promise.resolve(res.data);
      })
      .catch(err => {
        return Promise.reject(err);
      });
};

// function to execute the http get request
const get = (url:string) => apiRequest("get",url);

// function to execute the http delete request
const deleteRequest =  (url:string) =>  apiRequest("delete", url);

// function to execute the http post request
const post = (url:string, body:any) => apiRequest("post", url, body);

// function to execute the http put request
const put = (url:string, body:any) => apiRequest("put", url, body);

// function to execute the http path request
const patch = (url:string, body:any) =>  apiRequest("patch", url, body);

// expose your method to other services or actions
const API ={
    get,
    delete: deleteRequest,
    post,
    put,
    patch
};
export default API;
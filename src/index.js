import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";

axios.defaults.baseURL = "http://jsonplaceholder.typicode.com";
axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(requestConfig => {
  console.log("Request Config");
  console.log(requestConfig);
  // Edit request config
  return requestConfig;
}, error => {
    console.log(error); // global log file to optionally send to a server
    return Promise.reject(error); // forwards to request in component to be handled locally with the catch method
});

axios.interceptors.response.use(responseConfig => {
  console.log("Response Config");
  console.log(responseConfig);
  // Edit request config
  return responseConfig;
}, error => {
  console.log(error); // global log file to optionally send to a server
  return Promise.reject(error); // forwards to request in component to be handled locally with the catch method
});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

import axios from "axios";

const client = axios.create();

// client.defaults.baseURL = "https://i8b109.p.ssafy.io:9995/baekgu";
client.defaults.baseURL = "http://localhost:9999/baekgu";

export default client;

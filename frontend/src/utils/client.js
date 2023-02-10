import axios from "axios";

const client = axios.create();

client.defaults.baseURL = "http://localhost:9999/baekgu";

export default client;

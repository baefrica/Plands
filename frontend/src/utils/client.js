import axios from "axios";

const client = axios.create();

client.defaults.baseURL =
  "https://i8b109.p.ssafy.io:9995/baekgu";

export default client;

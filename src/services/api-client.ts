import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://rawg.io/api",
  params: {
    key: "a1e9c9fe026343f99345a05f80b0093e",
  },
});
export default apiClient;

import axios from "axios";

let headers;
let baseURL = process.env.VUE_APP_API_URL || "";

try {
  headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json",
    Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
  };
} catch (e) {
  this.$router.push({ name: "error" });
}

const instance = axios.create({
  baseURL,
  timeout: 0,
  headers,
});

instance.interceptors.response.use(
  (response) => response,
  (error) => error
);

export default instance;

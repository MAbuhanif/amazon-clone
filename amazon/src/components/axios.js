import axios from "axios";
const instance = axios.create({
  // baseURL: "http://localhost:10000",
  baseURL: "https://amazon-by-mundino.cyclic.app/",
  // baseURL: "http://127.0.0.1:5001/clone-54cab/us-central1/api",
});
export default instance;

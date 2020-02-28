import axios from "axios";

export default axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://www.alrd.top/alrd_api"
      : "http://api.scarletyeezy.com/"
});

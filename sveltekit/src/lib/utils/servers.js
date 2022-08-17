import { BASE_URL } from "$lib/config";
import axios from "axios";

axios.defaults.baseURL = BASE_URL;
axios.defaults.withCredentials = true;

//server

export const loginUser = async (data) => {
  try {
    localStorage.removeItem("token");
    const res = await axios.get("/api/server/sortedServers", data);

    return res.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};
import axios from "axios";
import { api_url } from "../../config";

const instance = axios.create({
  baseURL: api_url,
  withCredentials: true,
});

export async function apiCall(method, url, data) {
  // eslint-disable-next-line no-useless-catch
  try {
    const res = await instance[method](url, data);
    return url === "/users/signup" ||
      url === "/users/login" ||
      url === "/users/profile/jobseeker"
      ? res
      : res.data.data;
  } catch (error) {
    // throw error;
  }
}

export default instance;

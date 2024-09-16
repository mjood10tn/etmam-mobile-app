import axiosLib from "axios";
import { getToken } from "../services/TokenService";

const axios = axiosLib.create({
      // baseURL: `https://etmam.qcc.org.sa/api`,
      baseURL: `https://emmpnprwo1.sharedwithexpose.com/api`,
      headers: {
            Accept: "application/json",
      },
});
axios.interceptors.request.use(async (req) => {
      const token = await getToken();
      if (token !== null) {
            req.headers['Authorization'] = `Bearer ${token}`;
      }
      return req;
});
export default axios;
import axios from "axios";
import { useSelector } from "react-redux";
const BASE_URL = import.meta.env.VITE_BASE_URL;

// export const axiosPublic = axios.create({
//   baseURL: BASE_URL,
// });

const useAxios = () => {
  const { token } = useSelector((state) => state.auth);

  const axiosWithToken = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Token ${token}` },
  });
  return { axiosWithToken };
};

export default useAxios;

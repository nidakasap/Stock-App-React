import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const api = {
  get: async (url, token) => {
    try {
      const response = await axios.get(`${BASE_URL}/${url}/`, {
        headers: {
          ...(token && { Authorization: `Token ${token}` }),
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  },
  post: () => {},
};

export default api;

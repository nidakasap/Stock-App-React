import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, registerSuccess } from "../features/authSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        "https://10002.fullstack.clarusway.com/users/",
        userInfo
      );
      console.log(data);
      dispatch(registerSuccess(data));
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };
  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.post(`account/auth/login/`, userInfo);
      dispatch(loginSuccess(data));
      toastSuccessNotify("Login basarili");
      navigate("/stock");
    } catch (err) {
      dispatch(fetchFail());
      toastErrorNotify("Login basarisiz");
    }
  };
  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axiosPublic.post(`account/auth/logout/`);
      dispatch(logoutSuccess());
      toastSuccessNotify("Logout basarili");
      navigate("/");
    } catch (err) {
      dispatch(fetchFail());
      toastErrorNotify("Logout basarili");
    }
  };
  return { register, login, logout };
};

export default useAuthCall;

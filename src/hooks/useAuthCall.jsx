import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, registerSuccess } from "../features/authSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
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
      toastSuccessNotify("Registration successful! ");
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Registration failed. Please try again later.");
    }
  };
  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(`account/auth/login/`, userInfo);
      dispatch(loginSuccess(data));
      toastSuccessNotify("You're now logged in.");
      navigate("/stock");
    } catch (err) {
      dispatch(fetchFail());
      toastErrorNotify(
        "Login failed. Please check your credentials and try again."
      );
    }
  };
  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axios.post(`account/auth/logout/`);
      dispatch(logoutSuccess());
      toastSuccessNotify("You've been successfully logged out.");
      navigate("/");
    } catch (err) {
      dispatch(fetchFail());
      toastErrorNotify("An issue occurred. Please try again.");
    }
  };
  return { register, login, logout };
};

export default useAuthCall;

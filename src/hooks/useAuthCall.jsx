import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, registerSuccess } from "../features/authSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useSelector } from "react-redux";

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((store) => store.auth);
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(`${BASE_URL}users/`, userInfo);
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
      const { data } = await axios.post(`${BASE_URL}/auth/login/`, userInfo);
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
      await axios.get(`${BASE_URL}/auth/logout/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
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

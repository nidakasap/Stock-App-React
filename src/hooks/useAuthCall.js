import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerSuccess, fetchFail, fetchStart } from "../features/authSlice";
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
      dispatch(registerSuccess(data));
      toastSuccessNotify("Register basarili");
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Register basarisiz");
    }
  };

  return { register };
};

export default useAuthCall;

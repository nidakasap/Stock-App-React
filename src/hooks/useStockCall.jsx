import { useDispatch } from "react-redux";
import { fetchStart, fetchFail, getSuccess } from "../features/stockSlice";
import { useSelector } from "react-redux";
import api from "../utils/api";
import useAxios from "./useAxios";

const useStockCall = () => {
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();
  const { token } = useSelector((store) => store.auth);

  const getStockData = async (url) => {
    try {
      dispatch(fetchStart());
      const { data } = await api.get(url, token);
      dispatch(getSuccess({ data: data.data, url }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };
  const deleteStockData = async (url, id) => {
    try {
      await axiosWithToken.delete(`stock/${url}/${id}/`);
      toastSuccessNotify(`Successfuly deleted`);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`Not deleted`);
    } finally {
    }
  };
  const postStockData = async (info, url) => {
    try {
      await axiosWithToken.post(`stock/${url}/`, info);
      toastSuccessNotify(`${url} Successfuly added`);
    } catch (error) {
      console.log(error);
      toastErrorNotify(`${url} Not successful`);
    } finally {
      getStockData(url);
    }
  };
  const putStockData = async (info, url) => {
    try {
      await axiosWithToken.put(`stock/${url}/${info.id}/`, info);
      toastSuccessNotify(`${url} Successfuly update`);
      getStockData(url);
    } catch (error) {
      console.log(error);
      toastErrorNotify(`${url} Not successful`);
    }
  };

  return { getStockData, deleteStockData, postStockData, putStockData };
};

export default useStockCall;

import { useDispatch } from "react-redux";
import { fetchStart, fetchFail, getSuccess } from "../features/stockSlice";
import useAxios from "./useAxios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useStockCall = () => {
  const dispatch = useDispatch();
  const axiosWithToken = useAxios();

  const getStockData = async (url) => {
    try {
      dispatch(fetchStart());
      const { data } = await axiosWithToken(`/${url}`);
      dispatch(getSuccess({ data: data.data, url }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  const deleteStockData = async (url, id) => {
    try {
      await axiosWithToken.delete(`/${url}/${id}`);
      toastSuccessNotify(`Successfuly deleted`);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`Not deleted`);
    } finally {
      getStockData(url);
    }
  };

  const postStockData = async (url, info) => {
    try {
      await axiosWithToken.post(`${url}`, info);
      toastSuccessNotify(`Successfuly added`);
    } catch (error) {
      toastErrorNotify(` Not successful`);
    } finally {
      getStockData(url);
    }
  };

  const putStockData = async (url, info) => {
    try {
      await axiosWithToken.put(`${url}/${info._id}`, info);
      toastSuccessNotify(`Successfuly update`);
      getStockData(url);
    } catch (error) {
      toastErrorNotify(`Not successful`);
    }
  };

  return { getStockData, deleteStockData, postStockData, putStockData };
};

export default useStockCall;

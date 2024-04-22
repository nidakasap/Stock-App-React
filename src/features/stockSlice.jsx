import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "stock",

  initialState: {
    categories: [],
    purchases: [],
    sales: [],
    products: [],
    brands: [],
    firms: [],
    loading: false,
    error: false,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getSuccess: (state, { payload: { data, url } }) => {
      state.loading = false;
      state[url] = data; // state["brands"] - state["firms"]
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchFail, getSuccess, fetchStart } = stockSlice.actions;

export default stockSlice.reducer;

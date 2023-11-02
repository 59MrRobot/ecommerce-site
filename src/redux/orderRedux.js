import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: "order",
  initialState: {
    order: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    startorderProcess: (state) => {
      state.isFetching = true;
    },
    //ADD
    addOrderSuccess: (state, action) => {
      state.isFetching = false;
      state.order = action.payload;
      state.error = false;
    },
    addOrderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    resetOrder: (state) => {
      state.order = null;
      state.isFetching = false;
      state.error = false;
    }
  }
});

export const {
  startorderProcess,
  addOrderSuccess,
  addOrderFailure,
  resetOrder,
} = orderSlice.actions;

export default orderSlice.reducer;
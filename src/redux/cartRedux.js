import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    startCartProcess: (state) => {
      state.isFetching = true;
    },
    //ADD
    addCartSuccess: (state, action) => {
      state.isFetching = false;
      state.cart = action.payload;
      state.error = false;
    },
    addCartFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateCartSuccess: (state, action) => {
      state.isFetching = false;
      state.cart = action.payload;
      state.error = false;
    },
    updateCartFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteCartSuccess: (state, action) => {
      state.isFetching = false;
      state.cart = action.payload;
      state.error = false;
    },
    deleteCartFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    resetCart: (state) => {
      state.cart.products = [];
      state.isFetching = false;
      state.error = false;
    }
  }
});

export const {
  startCartProcess,
  addCartSuccess,
  addCartFailure,
  updateCartSuccess,
  updateCartFailure,
  deleteCartSuccess,
  deleteCartFailure,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
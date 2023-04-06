import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
    category: {
      name: "",
      title: "",
    },
  },
  reducers: {
    startProductProcess: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    //GET ALL
    getProductsSuccess: (state, action) => {
      state.products = action.payload;
      state.isFetching = false;
    },
    getProductsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    setSelectedCategory: (state, action) => {
      state.category = action.payload;
    }
  }
});

export const {
  startProductProcess,
  getProductsSuccess,
  getProductsFailure,
  setSelectedCategory,
} = productsSlice.actions;

export default productsSlice.reducer;
import { publicRequest, userRequest } from "../requestMethods";
import {
  startUserProcess,
  loginFailure,
  loginSuccess,
  registerFailure,
  registerSuccess,
} from "./userRedux"
import {
  startProductProcess,
  getProductsFailure,
  getProductsSuccess,
} from "./productRedux";
import { 
  startCartProcess,
  addCartFailure,
  addCartSuccess,
  updateCartFailure,
  updateCartSuccess,
  deleteCartSuccess,
  deleteCartFailure
} from "./cartRedux";

//USERS
export const login = async (dispatch, user) => {
  dispatch(startUserProcess());

  try {
    const response = await publicRequest.post('/auth/login', user);

    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure());
  }
}

export const register = async (dispatch, user) => {
  dispatch(startUserProcess());

  try {
    const response = await publicRequest.post('/auth/register', user);

    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerFailure());
  }
}

//PRODUCTS
export const getProducts = async (dispatch) => {
  dispatch(startProductProcess());

  try {
    const response = await publicRequest.get('/products');

    dispatch(getProductsSuccess(response.data));
  } catch (error) {
    dispatch(getProductsFailure());
  }
}

export const getNewProducts = async (dispatch) => {
  dispatch(startProductProcess());

  try {
    const response = await publicRequest.get('/products?new=true');

    dispatch(getProductsSuccess(response.data));
  } catch (error) {
    dispatch(getProductsFailure());
  }
}

export const getProductsWithCategory = async (dispatch, category) => {
  dispatch(startProductProcess());

  try {
    const response = await publicRequest.get(`/products?category=${category}`);

    dispatch(getProductsSuccess(response.data));
  } catch (error) {
    dispatch(getProductsFailure());
  }
}

//CARTS
export const addCart = async (dispatch, cart) => {
  dispatch(startCartProcess());

  try {
    const response = await userRequest.post('/carts', cart);

    dispatch(addCartSuccess(response.data));
  } catch (error) {
    dispatch(addCartFailure());
    console.log(error);
  }
}

export const updateCart = async (dispatch, id, cart) => {
  dispatch(startCartProcess());

  try {
    const response = await userRequest.put(`/carts/${id}`, cart);

    dispatch(updateCartSuccess(response.data));
  } catch (error) {
    dispatch(updateCartFailure());
    console.log(error);
  }
}

export const deleteCart = async (dispatch, id) => {
  dispatch(startCartProcess());

  try {
    const response = await userRequest.delete(`/carts/${id}`);
    console.log(response.data.message);

    dispatch(deleteCartSuccess(null));
  } catch (error) {
    dispatch(deleteCartFailure());
    console.log(error);
  }
}
import { publicRequest } from "../requestMethods";
import {
  startProductProcess,
  getProductsFailure,
  getProductsSuccess,
} from "./productsRedux";
import {
  startUserProcess,
  loginFailure,
  loginSuccess,
  registerFailure,
  registerSuccess,
} from "./userRedux"

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
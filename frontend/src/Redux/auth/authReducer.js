import { loadData } from "../../Utils/localStorage";

import {
  GET_LOGIN_FAILED,
  GET_LOGIN_REQUEST,
  GET_LOGIN_SUCCESS,
} from "./actionType";

const token = loadData("token");

const initState = {
  isAuth: token ? true : false,
  token: token && "",
  isLoading: false,
  isError: false,
  user: {},
};
export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case GET_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: true,
        token: payload.token,
        user: payload.user,
      };
    case GET_LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

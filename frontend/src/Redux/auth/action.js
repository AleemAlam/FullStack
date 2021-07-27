import { loginNetworkRequest } from "../../Network/network";
import {
  GET_LOGIN_FAILED,
  GET_LOGIN_REQUEST,
  GET_LOGIN_SUCCESS,
} from "./actionType";

export const getLogin = (email, password) => (dispatch) => {
  dispatch(getLoginRequest());
  loginNetworkRequest(email, password)
    .then((res) => dispatch(getLoginSuccess(res.data)))
    .catch(() => dispatch(getLoginFailed()));
};

const getLoginRequest = () => {
  return { type: GET_LOGIN_REQUEST };
};
const getLoginFailed = () => {
  return { type: GET_LOGIN_FAILED };
};
const getLoginSuccess = (payload) => {
  return { type: GET_LOGIN_SUCCESS, payload };
};

import {
  teacherNetworkRequest,
  classNetworkRequest,
} from "../../Network/network";
import {
  GET_TEACHER_REQUEST,
  GET_TEACHER_SUCCESS,
  GET_TEACHER_FAILED,
  GET_CLASS_REQUEST,
  GET_CLASS_SUCCESS,
  GET_CLASS_FAILED,
} from "./actionType";

export const getTeacher =
  (token, search, page, sorting, order, gender) => (dispatch) => {
    dispatch(getTeacherRequest());
    teacherNetworkRequest(token, search, page, sorting, order, gender)
      .then((res) => dispatch(getTeacherSuccess(res.data)))
      .catch(() => dispatch(getTeacherFailed()));
  };

const getTeacherRequest = () => {
  return { type: GET_TEACHER_REQUEST };
};

const getTeacherSuccess = (payload) => {
  return { type: GET_TEACHER_SUCCESS, payload };
};

const getTeacherFailed = () => {
  return { type: GET_TEACHER_FAILED };
};

export const getClass = (token, id) => (dispatch) => {
  dispatch(getClassRequest());
  classNetworkRequest(token, id)
    .then((res) => dispatch(getClassSuccess(res.data)))
    .catch(() => dispatch(getClassFailed()));
};

const getClassRequest = () => {
  return { type: GET_CLASS_REQUEST };
};

const getClassSuccess = (payload) => {
  return { type: GET_CLASS_SUCCESS, payload };
};

const getClassFailed = () => {
  return { type: GET_CLASS_FAILED };
};

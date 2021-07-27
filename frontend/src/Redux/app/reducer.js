import {
  GET_TEACHER_FAILED,
  GET_TEACHER_REQUEST,
  GET_TEACHER_SUCCESS,
  GET_CLASS_REQUEST,
  GET_CLASS_SUCCESS,
  GET_CLASS_FAILED,
} from "./actionType";

const initState = {
  teachers: [],
  totalTeacher: 0,
  totalPage: 0,
  isLoading: false,
  isError: false,
  classes: [],
  selectedTeacher: null,
};
export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_TEACHER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case GET_TEACHER_SUCCESS:
      return {
        ...state,
        teachers: payload.teachers,
        totalTeachers: payload.totalDoc,
        totalPage: payload.totalPage,
        isLoading: false,
        isError: false,
      };
    case GET_TEACHER_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case GET_CLASS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case GET_CLASS_SUCCESS:
      return {
        ...state,
        selectedTeacher: payload.teacher,
        classes: payload.classes,
        isLoading: false,
        isError: false,
      };
    case GET_CLASS_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./app/reducer";
import { authReducer } from "./auth/authReducer";

const mainReducer = combineReducers({ auth: authReducer, app: reducer });
export const store = createStore(
  mainReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

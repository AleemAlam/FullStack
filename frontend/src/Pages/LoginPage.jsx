import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import Form from "../Components/Form";
import { getLogin } from "../Redux/auth/action";

export default function LoginPage() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const isError = useSelector((state) => state.auth.isError);
  const handleSubmit = (e, { email, password }) => {
    e.preventDefault();
    dispatch(getLogin(email, password));
  };
  if (isAuth) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div>
      <Form handleSubmit={handleSubmit} />
      {isError && <p style={{ color: "red" }}>wrong credentials</p>}
    </div>
  );
}

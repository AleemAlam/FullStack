import React from "react";
import { Route, Switch } from "react-router";
import Navbar from "../Components/Navbar";
import Dashboard from "./Dashboard";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import TeacherDetails from "./TeacherDetails";

export default function Routes() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/teacher/:id">
          <TeacherDetails />
        </Route>
        <Route>
          <h1>Something Went Wrong</h1>
        </Route>
      </Switch>
    </div>
  );
}

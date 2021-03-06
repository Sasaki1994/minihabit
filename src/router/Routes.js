import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "../auth/AuthProvider";
import Top from "../pages/Top";
import New from "../pages/habits/New";
import Edit from "../pages/habits/Edit";
import UserNew from "../pages/users/New";
import Login from "../pages/users/Login";

const Routes = () => {
  return (
    <AuthProvider>
      <Router>
        <PrivateRoute exact path={"/"} component={Top} />
        <PrivateRoute path={"/habits/new"} component={New} />
        <PrivateRoute path={"/habits/:habitId/edit"} component={Edit} />
        <Route path={"/users/sign_up"} component={UserNew} />
        <Route path={"/users/sign_in"} component={Login} />
      </Router>
    </AuthProvider>
  );
};

export default Routes;

import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
import Login from "../pages/users/Login";

const PrivateRoute = ({ component: RouteComponent, ...options }) => {
  const { currentUser } = useContext(AuthContext);
  const Component = currentUser ? RouteComponent : Login;

  return <Route {...options} component={Component} />;
};

export default PrivateRoute;

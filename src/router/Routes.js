import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Top from "../pages/Top";
import New from "../pages/habits/New";
import Edit from "../pages/habits/Edit";
import UserNew from "../pages/users/New";

const Routes = () => {
    return (
        <Router>
          <Route exact path={"/"}>
            <Top />
          </Route>
          <Route path={"/habits/new"}>
            <New />
          </Route>
          <Route path={"/habits/edit"}>
            <Edit />
          </Route>
          <Route path={"/users/new"}>
            <UserNew />
          </Route>
        </Router>
    );
}

export default Routes;
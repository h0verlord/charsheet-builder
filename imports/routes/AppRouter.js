import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import Signup from "../ui/Signup";
import Dashboard from "../ui/Dashboard";
import NotFound from "../ui/notFound";
import Login from "../ui/Login";

export const history = createHistory();

export const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);

const unauthenticatedPages = ["/", "/signup"];
const authenticatedPages = ["/dashboard"];

export const onAuthChange = isAuthenticated => {
  const pathname = history.location.pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if (isUnauthenticatedPage && isAuthenticated) {
    history.replace("/dashboard");
  } else if (isAuthenticatedPage && !isAuthenticated) {
    history.replace("/");
  }
};

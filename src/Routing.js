import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";


export function Main() {
  return (
    <main>
      
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        
      </Switch>
    </main>
  );
}

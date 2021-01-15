import React from 'react'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import { Switch, Route } from "react-router-dom";

export function Main(){
    return(
        <main>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/dash" component={Dashboard}/>
            </Switch>
        </main>
    );
}
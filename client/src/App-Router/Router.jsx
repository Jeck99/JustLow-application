import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {Register,Login,LawersList,AddLawer,EditLawer,LawerDetails,Home} from "../pages";
import {NotFound,PrivateRoute} from "../components";
import AddCase from '../pages/Cases/Add-Case/Add-Case.component';

export default function LawersRouter() {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/add-case" component={AddCase} />
                <PrivateRoute exact path="/home" component={Home} />
                <PrivateRoute exact path="/lawers" component={LawersList} />
                <PrivateRoute exact path="/add-lawer" component={AddLawer} />
                <PrivateRoute exact path="/edit-lawer/:lawerId" component={EditLawer} />
                <PrivateRoute exact path="/lawer-detalis/:lawerId" component={LawerDetails} />
                <Route
                    component={localStorage.jwtToken ? Home : NotFound}
                />
            </Switch>
        </>
    )
}

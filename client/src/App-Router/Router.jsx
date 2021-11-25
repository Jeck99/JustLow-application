import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {Register,Login,LawersList,AddLawer,EditLawer,LawerDetails,Home} from "../pages";
import {NotFound,PrivateRoute} from "../components";

export default function LawersRouter() {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/register" component={Register} />
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

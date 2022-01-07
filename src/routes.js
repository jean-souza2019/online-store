import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Store from './views/store/index';
import Home from './views/home';



export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/store" component={Store} />
            </Switch >
        </BrowserRouter>
    )
}
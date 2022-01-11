import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Store from '../views/store/index';
import Home from '../views/home';
import Cart from '../views/cart/index';



export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/store" component={Store} />
                <Route path="/cart" component={Cart} />
            </Switch >
        </BrowserRouter>
    )
}
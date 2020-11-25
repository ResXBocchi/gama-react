import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Repositories from './pages/Repositories';
import Home from './pages/Home/index'


export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>

                <Route path='/repositories' component={Repositories} />
                <Route path='/' exact component={Home} />
            </Switch>
        </BrowserRouter>
    );
}
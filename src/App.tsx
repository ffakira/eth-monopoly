import React from 'react';
import Nav from './components/Nav';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Home from './views/Home';
import Documentation from './views/Documentation';
import HowtoPlay from './views/HowtoPlay';
import BlogMain from './views/blog/BlogMain';

/**
 * Setting up bootstrap 4.
 * ___( ')> quack!???
 * \____/
 * ~~~~~~~~~~~~~~~~~
 * The duck doesn't seem pleased with jQuery.
 */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js/dist/popper.min';
declare let global: any;
global.jQuery = require('jquery');
require('bootstrap');

function App(): JSX.Element | null {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <React.Fragment>
                        <div className="container">
                            <Route exact path="/">
                                <Home />
                            </Route>

                            <Route exact path="/docs">
                                <Documentation />
                            </Route>

                            <Route exact path="/blog">
                                <BlogMain />
                            </Route>

                            <Route exact path="/howto-play">
                                <HowtoPlay />
                            </Route>
                        </div>
                    </React.Fragment>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

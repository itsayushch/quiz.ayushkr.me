import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Quiz } from './components/Quiz';
import Lander from './components/Lander';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Lander} />
                    <Route exact path="/quiz" component={Quiz} />
                </Switch>
            </Router>
        );
    }
}

render(
    <App />,
    document.getElementById("root")
);
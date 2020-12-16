import React, { useContext } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route , Redirect } from 'react-router-dom';

import ThemeProvider from './theme/Provider';
import { getStyles } from './theme/theme';
import { ThemeContext } from './theme/Provider';

import Quiz from './components/Quiz';
import Lander from './components/Lander';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
    const { mode } = useContext(ThemeContext);
    const styles = getStyles(mode);
    return (
        <>
            <div style={{ background: styles.backgroundColor, color: styles.color }}>
                <Router>
                <Navbar />
                    <Switch>
                        <Route exact path='/' component={Lander} />
                        <Route exact path='/quiz' component={Quiz} />
                        <Redirect to='/' />
                    </Switch>
                </Router>
                <Footer />
            </div>
        </>
    );
}

render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
    ,
    document.getElementById('root')
);
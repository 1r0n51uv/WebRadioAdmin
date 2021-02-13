import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AdminHome from "../pages/adminHome";


class Myrouter extends Component {
    render() {
        return (
            <Router>
                <div>

                    <Route exact path="/home" component={AdminHome}/>
                    <Route exact path="/" component={AdminHome}/>
                </div>
            </Router>
        );
    }
}

export default Myrouter;

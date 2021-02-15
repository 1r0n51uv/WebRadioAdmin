import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Palinsesto from "../pages/palinsesto";
import Navbar from "../components/navbar";
import Banner from "../pages/banner";
import AdminHome from "../pages/adminHome";


class Myrouter extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Route exact path="/home" component={AdminHome}/>
                    <Route exact path="/" component={AdminHome}/>
                    <Route exact path="/palinsesto" component={Palinsesto}/>
                    <Route exact path="/banner" component={Banner}/>
                </div>
            </Router>
        );
    }
}

export default Myrouter;

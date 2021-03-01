import React, {Component} from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Palinsesto from "../pages/palinsesto";
import Navbar from "../components/navbar";
import Banner from "../pages/banner";
import AdminHome from "../pages/adminHome";
import Info from "../pages/info";


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
                    <Route exact path="/info" component={Info}/>
                </div>
            </Router>
        );
    }
}

export default Myrouter;

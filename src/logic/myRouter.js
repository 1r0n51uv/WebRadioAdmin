import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
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
                    <Route  path="/home" component={AdminHome}/>
                    <Route exact path="/" component={AdminHome}/>
                    <Route path="/palinsesto" component={Palinsesto}/>
                    <Route  path="/banner" component={Banner}/>
                    <Route  path="/info" component={Info}/>
                </div>
            </Router>
        );
    }
}

export default Myrouter;

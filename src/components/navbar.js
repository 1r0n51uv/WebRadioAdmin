import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="home">RadioRegioneCampania Admin</Link>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" to="palinsesto">Palinsesto</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="banner">Banner</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="info">Info</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;

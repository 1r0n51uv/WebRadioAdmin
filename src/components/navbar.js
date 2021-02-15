import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="home">RadioRegioneCampania Admin</a>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="palinsesto">Palinsesto</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="banner">Banner</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;

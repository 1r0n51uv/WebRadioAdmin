import React, {Component} from 'react';

class AdminHome extends Component {
    render() {
        return (
            <div>
                <div className="row mx-auto text-center">

                    <h2 style={{marginTop: '5%', paddingBottom: '2%'}}>Web Radio Regione Campania Admin</h2>

                    <hr/>

                    <div className="col-md-6 mx-auto" style={{marginTop: '5%'}}>
                        <a href="palinsesto" style={{textDecoration: 'none'}}>
                        <div className="card mx-auto text-center" style={{backgroundColor: 'green', padding: '2%'}}>
                            <h2 style={{color: 'white'}}>Modifica Palinsesto <i className="far fa-calendar-alt"></i></h2>
                        </div>
                        </a>
                    </div>
                    <div className="col-md-6 mx-auto" style={{marginTop: '5%'}}>
                        <a href="banner" style={{textDecoration: 'none'}}>
                        <div className="card mx-auto text-center" style={{backgroundColor: 'blue', padding: '2%'}}>
                            <h2 style={{color: 'white'}}>Modifica Banner <i className="far fa-images"></i></h2>
                        </div>
                        </a>
                    </div >

                    <div className="col-md-6 mx-auto" style={{marginTop: '5%'}}>
                        <a href="info" style={{textDecoration: 'none'}}>
                        <div className="card mx-auto text-center" style={{backgroundColor: 'orange', padding: '2%'}}>
                            <h2 style={{color: 'white'}}>Modifica Info <i className="fas fa-info-circle"></i></h2>
                        </div>
                        </a>
                    </div>

                </div>
            </div>
        );
    }
}

export default AdminHome;

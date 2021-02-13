import React, {Component} from 'react';
import Palinsesto from "../components/palinsesto";
import SingleProgram from "../components/singleProgram";

class AdminHome extends Component {
    render() {
        return (
            <div>
                <div className="row">

                    <div className="col-md-12 text-center" style={{marginTop: "3%"}}>
                        <h2>Modifica Palinsesto</h2>

                    </div>

                    <div className="col-md-6 mx-auto">
                        <Palinsesto />

                    </div>


                </div>
            </div>
        );
    }
}

export default AdminHome;

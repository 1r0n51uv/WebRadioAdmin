import React, {Component} from 'react';
import Palinsesto from "../components/palinsesto";
import SingleProgram from "../components/singleProgram";
import AddProgram from "../components/addProgram";

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

                        <AddProgram />

                    </div>


                </div>
            </div>
        );
    }
}

export default AdminHome;

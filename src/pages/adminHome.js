import React, {Component} from 'react';
import PalinsestoSingle from "../components/palinsestoSingle";
import SingleProgram from "../components/singleProgram";
import AddProgram from "../components/addProgram";

class AdminHome extends Component {

    render() {
        const days = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica']
        return (
            <div>
                <div className="row">

                    <div className="col-md-12 text-center" style={{marginTop: "3%"}}>
                        <h2>Modifica Palinsesto</h2>

                    </div>

                    <div className="col-md-12 mx-auto">

                        <div className="row">


                            {days.map((day, index) => (
                                <div className="col-md-5 mx-auto">
                                    <PalinsestoSingle
                                        key={index}
                                        day={day}
                                    />
                                </div>
                            ))}

                        </div>

                        <hr/>




                        <AddProgram />

                    </div>


                </div>
            </div>
        );
    }
}

export default AdminHome;

import React, {Component} from 'react';
import {FirestoreCollection} from "react-firestore";
import SingleProgram from "./singleProgram";

class Palinsesto extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="card">
                <div className="card-header"><b>Lunedì</b>
                    <button className="text-right" style={{float: "right"}}>
                        <i className="fas fa-chevron-circle-down" data-bs-toggle="collapse"
                           data-bs-target="#Lunedì" aria-expanded="false" aria-controls="Lunedì"/>
                    </button>

                </div>

                <div className="collapse" id="Lunedì">
                    <FirestoreCollection
                        path="palinsesto"
                        render={({ isLoading, data }) => {
                            return isLoading ? (
                                <h1>loading</h1>
                            ) : (
                                data.map(post => (

                                    <SingleProgram
                                        key={post.id}
                                        title={post.programma}
                                        start={post.inizio}
                                        end={post.fine}
                                        img={post.img}
                                        day={post.giorno}
                                    />

                                ))

                            );
                        }}
                    />
                </div>


            </div>
        );
    }
}

export default Palinsesto;

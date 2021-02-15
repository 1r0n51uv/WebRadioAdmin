import React, {Component} from 'react';
import {FirestoreCollection} from "react-firestore";
import SingleProgram from "./singleProgram";

class PalinsestoSingle extends Component {

    render() {
        return (
            <div className="card" style={{marginTop: '5%'}}>

                <div className="card-header"><b>{this.props.day}</b>
                    <button className="text-right" style={{float: "right"}}>
                        <i className="fas fa-chevron-circle-down" data-bs-toggle="collapse"
                           data-bs-target={"#"+this.props.day} aria-expanded="false" aria-controls={this.props.day}/>
                    </button>
                </div>

                <div className="collapse" id={this.props.day}>
                    <FirestoreCollection
                        path="palinsesto"
                        filter={['giorno', '==', this.props.day]}
                        render={({ isLoading, data }) => {
                            return isLoading ? (
                                <h1>loading</h1>
                            ) : (
                                data.map(post => (
                                    <SingleProgram
                                        id = {post.id}
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

export default PalinsestoSingle;

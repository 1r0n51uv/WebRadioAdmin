import React, {Component} from 'react';
import firebase from "firebase";

class SingleProgram extends Component {

    removeElement = () => {
        firebase.firestore().collection('palinsesto').doc(this.props.id).delete().then(() => {
            window.location.reload()
        });

    }

    render() {
        return (
            <div>
                <div className="card">


                    <div className="row" style={{padding: '2%'}}>

                        <div className="col-md-4" >

                            <img src={this.props.img} className="img-fluid" alt=""/>
                        </div>

                        <div className="col-md-8">
                            <div style={{padding: '2%'}}>
                                <h6><b>Titolo: </b> {this.props.title}</h6>
                                <h6><b>Giorno: </b> {this.props.day}</h6>
                                <h6><b>Inizio: </b> {this.props.start}</h6>
                                <h6><b>Fine: </b> {this.props.end}</h6>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <button onClick={this.removeElement} className="btn btn-sm btn-danger">
                                Rimuovi
                            </button>
                        </div>

                    </div>


                </div>
            </div>
        );
    }
}

export default SingleProgram;

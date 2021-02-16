import React, {Component} from 'react';
import {FirestoreCollection} from "react-firestore";
import SingleProgram from "./singleProgram";
import firebase from "firebase";

class PalinsestoSingle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            palinsesto: []
        }
    }

    compare = (a, b) => {
        // Use toUpperCase() to ignore character casing
        const bandA = parseInt(a.start.substring(0, 2));
        const bandB = parseInt(b.start.substring(0, 2));


        let comparison = 0;
        if (bandA > bandB) {
            comparison = 1;
        } else if (bandA < bandB) {
            comparison = -1;
        }
        return comparison;
    }




    componentDidMount() {
        let palinsesto = []
        firebase.firestore().collection("palinsesto").get().then(value => {
            value.docs.map(doc => {
                palinsesto.push({
                    id: doc.id,
                    title: doc.data()['programma'],
                    start: doc.data()['inizio'],
                    end: doc.data()['fine'],
                    img: doc.data()['img'],
                    day: doc.data()['giorno']
                })
            })
            palinsesto.sort(this.compare)
            this.setState({palinsesto}, () => {
                console.log(this.state.palinsesto)})
        })
    }

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

                    {this.state.palinsesto.map(post => this.props.day === post.day &&
                        (
                            <SingleProgram
                                id={post.id}
                                key={post.id}
                                title={post.title}
                                start={post.start}
                                end={post.end}
                                img={post.img}
                                day={post.day}
                            />
                        )
                    )}
                </div>

            </div>
        );
    }
}

export default PalinsestoSingle;

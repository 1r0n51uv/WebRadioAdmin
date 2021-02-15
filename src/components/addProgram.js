import React, {Component} from 'react';
import firebase from "firebase";
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton';

class AddProgram extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            day: "",
            start1: "",
            start2: "",
            end1: "",
            end2: "",
            img: "",
            image: "",
            username: "",
            avatar: "",
            isUploading: false,
            progress: 0,
            avatarURL: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.createProgram()
    }

    createProgram = () => {
        let days = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica']
        firebase.firestore().collection('palinsesto').add({
            programma: this.state.title,
            giorno: days[this.state.day-1],
            inizio: this.state.start1 + ":" + (this.state.start2 ? (this.state.start2) : ("00")),
            fine: this.state.end1 + ":" + (this.state.end2 ? (this.state.end2) : ("00")),
            img: this.state.avatarURL,
        });
        this.setState({
            title: "",
            day: "",
            start1: "",
            start2: "",
            end1: "",
            end2: "",
            img: "",
            image: "",
            username: "",
            avatar: "",
            isUploading: false,
            progress: 0,
            avatarURL: ""
        });
    }

    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
    handleProgress = progress => this.setState({ progress });
    handleUploadError = error => {
        this.setState({ isUploading: false });
    };

    handleUploadSuccess = (filename, task) => {
        console.log(filename)
        this.setState({ avatar: filename, progress: 100, isUploading: false });
        firebase
            .storage()
            .ref("images")
            .child(filename)
            .getDownloadURL()
            .then(url => {
                this.setState({avatarURL: url});
            });
    };

    render() {
        return (
            <div>
                <div className="card">

                    <form onSubmit={this.handleSubmit}>
                        <div className="row" style={{padding: '2%'}}>


                            <div className="col-md-8">
                                <div style={{padding: '2%'}}>
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">Titolo</label>
                                        <input value={this.state.title} required={true}
                                               onChange={this.handleChange}
                                               type="title" name="title" className="form-control" id="title"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="day" className="form-label">Giorno</label>
                                        <select value={this.state.day} required={true}
                                                onChange={this.handleChange}
                                                className="form-select" name="day" id="day" aria-label="Default select example">
                                            <option selected>Scegli giorno</option>
                                            <option value="1">Lunedì</option>
                                            <option value="2">Martedì</option>
                                            <option value="3">Mercoledì</option>
                                            <option value="4">Giovedì</option>
                                            <option value="5">Venerdì</option>
                                            <option value="6">Sabato</option>
                                            <option value="7">Domenica</option>
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="start" className="form-label">Inizio</label>
                                        <div className="row text-center">
                                            <div className="col-md-4">
                                                <input type="text" value={this.state.start1} required={true}
                                                       onChange={this.handleChange}
                                                       name="start1" className="form-control" id="start1"/>
                                            </div>
                                            <div className="col-md-1">
                                                <h5>:</h5>
                                            </div>
                                            <div className="col-md-4">
                                                <input type="text" value={this.state.start2} required={true}
                                                       onChange={this.handleChange}
                                                       name="start2" className="form-control" id="start2"/>
                                            </div>


                                        </div>


                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="end" className="form-label">Fine</label>
                                        <div className="row text-center">
                                            <div className="col-md-4">
                                                <input type="text" value={this.state.end1} required={true}
                                                       onChange={this.handleChange}
                                                       name="end1" className="form-control" id="end"/>
                                            </div>
                                            <div className="col-md-1">
                                                <h5>:</h5>
                                            </div>
                                            <div className="col-md-4">
                                                <input type="text" value={this.state.end2} required={true}
                                                       onChange={this.handleChange}
                                                       name="end2" className="form-control" id="end"/>
                                            </div>


                                        </div>


                                    </div>
                                    <div className="form-group">
                                        {this.state.avatarURL ? (<img src={this.state.avatarURL}/>) : (
                                            <div>
                                                {this.state.isUploading && <p>Progress: {this.state.progress} %</p>}
                                                <CustomUploadButton
                                                    accept="image/*"
                                                    name="avatar"
                                                    randomizeFilename
                                                    storageRef={firebase.storage().ref("images")}
                                                    onUploadStart={this.handleUploadStart}
                                                    onUploadError={this.handleUploadError}
                                                    onUploadSuccess={this.handleUploadSuccess}
                                                    onProgress={this.handleProgress}
                                                    style={{backgroundColor: 'blue', color: 'white', padding: 10, borderRadius: 4}}
                                                >
                                                    Carica Foto
                                                </CustomUploadButton>

                                            </div>
                                        )}

                                    </div>
                                </div>


                            </div>

                            <div className="col-md-12 text-center">
                                <button className="btn btn-lg btn-success" type="submit">Inserisci</button>
                            </div>

                        </div>

                    </form>
                </div>
            </div>
        );
    }
}


export default AddProgram;

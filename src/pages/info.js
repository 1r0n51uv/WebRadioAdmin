import React, {Component} from 'react';
import CustomUploadButton from "react-firebase-file-uploader/lib/CustomUploadButton";
import firebase from "firebase";

class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            description: "",
            readioStatus: "",
            backImg: "",
            avatar: "",
            isUploading: false,
            progress: 0,
            avatarURL: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount() {
        firebase.firestore().collection("info").get().then(value => {
            value.docChanges().map(val => {
                this.setState({
                    id: val.doc.id,
                    description: val.doc.data()['description'],
                    radioStatus: val.doc.data()['radioStatus'],
                    backImg: val.doc.data()['backgroundImage'],
                }, () => {

                })
            })
        })
    }

    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
    handleProgress = progress => this.setState({ progress });
    handleUploadError = error => {
        this.setState({ isUploading: false });
    };

    handleUploadSuccess = (filename) => {
        console.log(filename)
        this.setState({ avatar: filename, progress: 100, isUploading: false });
        firebase
            .storage()
            .ref("images")
            .child(filename)
            .getDownloadURL()
            .then(url => {
                this.setState({backImg: url});
            });
    };

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }



    updateInfo = () => {
        firebase.firestore().collection("info").doc(this.state.id).set({
            backgroundImage: this.state.backImg,
            description: this.state.description,
            radioStatus: this.state.radioStatus
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.updateInfo();
    }

    render() {
        return (
            <div className="row mx-auto">
                <div className="col-md-6 mx-auto text-center" style={{marginTop: '5%'}}>
                    <div className="card text">

                        <div className="card-header">Modifica info

                        </div>

                        <form onSubmit={this.handleSubmit}>
                            <div className="row mx-auto" style={{padding: '2%'}}>

                                <div className="col-md-8 mx-auto">
                                    <div style={{padding: '2%'}}>
                                        <div className="mb-3">
                                            <label htmlFor="description" className="form-label">Descrizione</label>
                                            <textarea rows={5} value={this.state.description}
                                                      onChange={this.handleChange}
                                                      type="text" name="description" className="form-control" id="description"/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="description" className="form-label">Radio Status</label>
                                            <input value={this.state.radioStatus}
                                                   onChange={this.handleChange}
                                                   type="text" name="radioStatus" className="form-control" id="radioStatus"/>
                                        </div>

                                        <div className="form-group">
                                            {this.state.backImg && <img className="img-fluid" src={this.state.backImg}/>}
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
                                                    Cambia sfondo
                                                </CustomUploadButton>

                                            </div>


                                        </div>
                                    </div>


                                </div>

                                <div className="col-md-6"/>
                                <div className="col-md-6" style={{marginTop: '5%'}}>
                                    <button className="btn btn-lg btn-success" type="submit">Salva</button>
                                </div>

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Info;

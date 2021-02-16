import React, {Component} from 'react';
import {FirestoreCollection} from "react-firestore";
import SingleProgram from "../components/singleProgram";
import firebase from "firebase";
import CustomUploadButton from "react-firebase-file-uploader/lib/CustomUploadButton";

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            avatar: "",
            isUploading: false,
            progress: 0,
            avatarURL: ""
        }
    }


    removeElement = (id) => {
        firebase.firestore().collection('banner').doc(id).delete();
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
            .ref("banner")
            .child(filename)
            .getDownloadURL()
            .then(url => {
                firebase.firestore().collection('banner').add({
                    img: url
                });
            });
    };

    render() {
        return (
            <div className="row mx-auto">

                <div className="col-md-5 mx-auto">
                    <FirestoreCollection
                        path="banner"
                        render={({ isLoading, data }) => {
                            return isLoading ? (
                                <h1>loading</h1>
                            ) : (
                                data.map(post => (

                                    <div className="card"
                                         key={post.id}>

                                        <img
                                            src={post.img}
                                            className="img-fluid"
                                        />

                                        <button className="btn btn-sm btn-danger" onClick={() => this.removeElement(post.id)}>Rimuovi</button>

                                    </div>

                                ))

                            );
                        }}
                    />


                </div>
                <div className="col-md-5 mx-auto" style={{marginTop: '5%'}}>
                    <form action="">
                        <div className="form-group">

                                <div>
                                    {this.state.isUploading && <p>Progress: {this.state.progress} %</p>}
                                    <label>Il banner deve avere dimensione 1300x400</label>
                                    <br/>
                                    <CustomUploadButton
                                        accept="image/*"
                                        name="avatar"
                                        randomizeFilename
                                        storageRef={firebase.storage().ref("banner")}
                                        onUploadStart={this.handleUploadStart}
                                        onUploadError={this.handleUploadError}
                                        onUploadSuccess={this.handleUploadSuccess}
                                        onProgress={this.handleProgress}
                                        style={{backgroundColor: 'blue', color: 'white', padding: 10, borderRadius: 4}}
                                    >
                                        Carica Banner
                                    </CustomUploadButton>

                                </div>

                        </div>
                    </form>
                </div>

            </div>
        );
    }
}

export default Banner;

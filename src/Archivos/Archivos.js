import React, { Component } from 'react';
import firebase from 'firebase';

class FileUpLoad extends Component{
    constructor(){
        super();
        this.state = {
        };
        this.handleUpLoad = this.handleUpLoad.bind(this);
    }

    handleUpLoad (event){
        const file = event.target.files[0];
        debugger;
        const storageRef = firebase.storage().ref(`Cursos/EXPERTO EN RIESGO POR LEVANTAMIENTO MANUAL DE CARGAS/Inscritos/Luis Ivan De La Vega/${file.name}`);
        const task = storageRef.getDownloadURL(file);


        task.on('state_changed', snapshot => {
            debugger;
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100; 
            this.setState({
                UpLoadValue: percentage
            })
        }, error => {
            console.log(error.message) 
        }, () => {
            this.setState({
                UpLoadValue:100,

            });
        });
    }

    render(){
        return(
            <div>
                <br/>
                <p>Subir Documento</p>
                <progress value={this.state.UpLoadValue} max="100"></progress>
                <br/>
                <input type="file" onChange={this.handleUpLoad}/>
            </div>
        );
    }
}

export default FileUpLoad;
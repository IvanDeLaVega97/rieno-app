import React, { Component } from 'react';
import firebase from 'firebase';
import {CardActionArea, CardActions} from '@material-ui/core'

class AutentificaciónGoogle extends Component {

    constructor(props) {
        super(props);
        this.handleAuth = this.handleAuth.bind(this);
        this.Login = this.Login.bind(this);
        this.state = {
            user: null
        };
    }

    handleAuth() {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then(result => { console.log(`${result.user} `) })
            .catch(error => console.log(`Error ${error.code}: ${error.massage}`));
    }

    Login() {
        this.handleAuth();
        if (this.state.user) {
            console.log("ps pal if");
            return (console)
        }
        else {
            this.handleAuth();
        }
    }

    render() {
        return (
            <div>
                <CardActionArea onClick={this.Login}>
                    <CardActions>
                        <img style={{ marginLeft: "8%" }} height="20%" width="100%" src="https://firebasestorage.googleapis.com/v0/b/rieno-c0fd1.appspot.com/o/gmail-logo.png?alt=media&token=0d91020e-cb6f-4975-887c-f7616d38fd74" />
                    </CardActions>
                </CardActionArea>
            </div>
        )
    }

}

export default AutentificaciónGoogle;
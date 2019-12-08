import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Image } from '@material-ui/core';
import firebase from 'firebase';

class App extends Component {

    useStyles = makeStyles({
        card: {
            maxWidth: 500,
            height: 600,
            marginTop: 50
        },
        media: {
            height: 250,
        },
    });

    constructor() {
        super();
        this.state = {
            user: null
        };

        this.handleAuth = this.handleAuth.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({
                user
            });
        });
    };

    handleAuth() {
        const provider = new firebase.auth.GoogleAuthProvider();
        console.log(`ha iniciado sesión`)

        firebase.auth().signInWithPopup(provider)
            .then(result => console.log(`${result.user.email, result.user.phoneNumber, result.user.photoURL, result.user.displayName} ha iniciado sesión`))
            .catch(error => console.log(`Error ${error.code}: ${error.massage}`));
    }

    loginU() {
        if (this.state.user) {
            return (
                <div>
                    <img src={this.state.user.photoURL} alt={this.state.user.displayName}></img>
                    <p> {this.state.user.displayName}!</p>
                    <Button onClick={this.handleLogout}>Salir</Button>
                </div>
            );
        } else {
            return(
            <Button onClick={this.handleAuth}></Button>
            );
        }
    };

    handleLogout() {
        firebase.auth().signOut()
            .then(result => console.log(`${result.user.email} Ha Salido`))
            .catch(error => console.log(`Error ${error.code}: ${error.massage}`));
    }

    render() {
        
        return (
            <body>
                <div align="center">
                    <Card className={this.useStyles.card}>
                        <br />
                        <Typography gutterBottom variant="h5" component="h2" align="center">
                            Registro
                  </Typography>
                        <CardMedia
                            className={this.useStyles.media}
                            image="https://firebasestorage.googleapis.com/v0/b/rieno-c0fd1.appspot.com/o/undraw_authentication_fsn5.svg?alt=media&token=f340490f-b905-47bd-84a7-8827365199f2"
                            title="Registro de Usuario"
                            size="center"
                        />
                        <CardContent>
                            <br />
                            <Typography variant="body2" component="p">
                                Registro con Autentificación de Google
                  </Typography>
                        </CardContent>
                        <CardActionArea onClick={this.handleAuth}>
                            <CardActions>
                                <img style={{ marginLeft: "8%" }} height="20%" width="100%" src="https://firebasestorage.googleapis.com/v0/b/rieno-c0fd1.appspot.com/o/gmail-logo.png?alt=media&token=0d91020e-cb6f-4975-887c-f7616d38fd74" />
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </div>
            </body>
        );
    }
}

export default App;
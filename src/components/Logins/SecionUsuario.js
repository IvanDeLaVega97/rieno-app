import React, { Component } from 'react';
import firebase from 'firebase';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import MediaCard from './Registro';
import AppBarUser from '../../Plataforma/Usuario/AppBarUser'
import Helpers from '../../Plataforma/Usuario/helpers';
let Cursos = ''
class App extends Component {
    constructor() {
        super();
        this.state = {
            user: null
        };

        this.handleAuth = this.handleAuth.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

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

    async componentWillMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ user });
        });

        try{

            let userNamePath = "/Cursos"
            return firebase.database().ref(userNamePath).once('value', (snapshot) => {
            console.log(snapshot.toJSON());
            if (snapshot.val()) {
                Cursos = snapshot.val()                
            }
        })
            /*let user = await firebase.auth().currentUser
            Helpers.getCurso( (name) => {
                this.setState({
                    userName: name
                })
            })*/
        }
        catch(error){
            console.log(error);
        }
    }

    handleAuth() {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then(result => { console.log(`${result.user.displayName} `) })
            .catch(error => console.log(`Error ${error.code}: ${error.massage}`));
    }

    handleLogout() {
        firebase.auth().signOut()
            .then(result => { console.log(` ha salido `) })
            .catch(error => console.log(`Error ${error.code}: ${error.massage}`));
    }

    

    renderLoginButton() {
        if (this.state.user) {
            const UsuarioL = `Usuario/${this.state.user.uid}`;
            
            //<button onClick={this.handleLogout}></button>
            return (
                <div>
                    <Redirect to={UsuarioL}/>
                    <AppBarUser Nombre={this.state.user.displayName} imagen={this.state.user.photoURL}/>
                </div>
            );
        }
        else {
            return(
                <div align="center">
                <MediaCard>
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
                        <CardActionArea>
                        <CardActions>
                        <button onClick={this.handleAuth}>Login</button>
                        </CardActions>
                    </CardActionArea>
                    </Card>
                </MediaCard>
            </div>
                
            );
        }
    }

    render() {
        return (
            <div align="center">
            {this.renderLoginButton()}
            </div>
        )
    }
}

export default App;



/*
class App extends Component {
    constructor() {
        super();
        this.state = {
            user: null
        };

        this.handleAuth = this.handleAuth.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

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

    componentWillMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ user });
        })
    }

    handleAuth() {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then(result => { console.log(`${result.user.displayName} `) })
            .catch(error => console.log(`Error ${error.code}: ${error.massage}`));
    }

    handleLogout() {
        firebase.auth().signOut()
            .then(result => { console.log(` ha salido `) })
            .catch(error => console.log(`Error ${error.code}: ${error.massage}`));
    }

    renderLoginButton() {
        if (this.state.user) {
            const UsuarioL = `/Usuario/${this.state.user.uid}`;
            console.log("logiado0000000000000");
            return (
                <Redirect to="Usuario/123">
                    <CardActionArea onClick={this.handleLogout}>
                        <CardActions>
                            <img src={this.state.user.photoURL} alt={this.state.user.displayName} />
                            <p> hola {this.state.user.displayName}!</p>
                            {}
                        </CardActions>
                    </CardActionArea>
                </Redirect>
            );
        }
        else {
            console.log("no logiado");
            return (
                <CardActionArea onClick={this.handleAuth}>
                    <CardActions>
                        <img style={{ marginLeft: "8%" }} height="20%" width="100%" src="https://firebasestorage.googleapis.com/v0/b/rieno-c0fd1.appspot.com/o/gmail-logo.png?alt=media&token=0d91020e-cb6f-4975-887c-f7616d38fd74" />
                    </CardActions>
                </CardActionArea>
            );
        }
    }

    render() {
        return (
            <div align="center">
                <MediaCard>
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
                        {
                            this.renderLoginButton()
                        }
                    </Card>
                </MediaCard>
            </div>
        )
    }
}

export default App;
 */
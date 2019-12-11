import React, { Component } from 'react';
import firebase from 'firebase';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Grid } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import MediaCard from './Registro';
import AppBarUser from '../../Plataforma/Usuario/AppBarUser'
import Helpers from '../../Plataforma/Usuario/helpers';
import Cursos from '../Cursos';
import { textAlign } from '@material-ui/system';
import { DB_CONFIG } from '../config/config';
import 'firebase/database';

let Cursos2 = ''
class App extends Component {
    constructor() {
        super();
        this.state = {
            user: null,
            Curso: [

            ]
        };

        this.app = firebase.initializeApp(DB_CONFIG);
        this.db = this.app.database().ref().child('Cursos');
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
        const { Curso } = this.state;
        this.db.on('child_added', snap => {
            Curso.push({
                CursoID: snap.key,
                CursoContenido: snap.val().CursoContenido
            })
            this.setState({ Curso })
        });
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ user });
        });

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
            return (
                <div>
                    <Redirect to={UsuarioL} />
                    <AppBarUser Nombre={this.state.user.displayName} imagen={this.state.user.photoURL} />
                    <span style={{ textAlign: "center", fontSize: 40 }}>Cursos</span>
                    <div>
                        {
                            this.state.Curso.map(CartaCurso => {
                                return (
                                    <Grid style={{ marginLeft: 20, marginRight:20, marginTop: 0 }}>
                                        <br />
                                        <Cursos key={CartaCurso.CursoID} CursoID={CartaCurso.CursoID} CursoContenido={CartaCurso.CursoContenido} />
                                    </Grid>
                                )
                            })
                        }
                    </div>
                </div>
            );
        }
        else {
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
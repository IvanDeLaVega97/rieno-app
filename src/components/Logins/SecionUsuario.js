import React, { Component } from 'react';
import firebase from 'firebase';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Grid } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import MediaCard from './Registro';
import AppBarUser from '../../Plataforma/Usuario/AppBarUser';
import Cursos from '../Cursos';
import { DB_CONFIG } from '../config/config';
import TABS from '../AppBar/TABS'


class App extends Component {
    constructor() {
        super();
        this.state = {
            user: null,
            Curso: [

            ]
        };

        //this.app = firebase.initializeApp(DB_CONFIG);
        //this.db = this.app.database().ref().child('Cursos');
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

    RenderCursos() {
        return (
            <div>
                {
                    this.state.Curso.map(CartaCurso => {
                        return (
                            <Grid style={{ marginLeft: 20, marginRight: 20, marginTop: 0 }}>
                                <br />
                                <Cursos key={CartaCurso.CursoID} CursoID={CartaCurso.CursoID} CursoContenido={CartaCurso.CursoContenido} />
                            </Grid>
                        )
                    })
                }
            </div>
        );
    }

    renderLoginButton() {
        if (this.state.user) {
            const UsuarioL = `Usuario/${this.state.user.uid}`;
            return (
                <div>
                    <Redirect to={UsuarioL} />
                    <AppBarUser Nombre={this.state.user.displayName} imagen={this.state.user.photoURL} />
                    <TABS />
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

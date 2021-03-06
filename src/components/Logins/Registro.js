import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Link } from '@material-ui/core';
import Firebasedatos from './FirebaseDatosUser'
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles({
  card: {
    maxWidth: 500,
    height: 600,
    marginTop: 50
  },
  media: {
    height: 250,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <body>
      <div align="center">
        <Card className={classes.card}>
          <br />
          <Typography gutterBottom variant="h5" component="h2" align="center">
            Registro
          </Typography>
          <CardMedia
            className={classes.media}
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
          <Firebasedatos/>
        </Card>
      </div>
    </body>
  );
}















/*
const useStyles = makeStyles({
  card: {
    maxWidth: 500,
    height: 600,
    marginTop: 50
  },
  media: {
    height: 250,
  },
});
class App extends new MediaCard {
  constructor() {
    super();
    this.state = {
      user: null
    };

    this.handleAuth = this.handleAuth.bind(this);
  }

  componentwillMount (){
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  handleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => { console.log(`${result.user.emailVerified} ${result.user.uid} ${result.user.email} ${result.user.photoURL} ${result.user.displayName} ha iniciado sesión`) })
      .catch(error => console.log(`Error ${error.code}: ${error.massage}`));
  }

  Login() {
    if (this.state.user) {
      console.log(this.state.user.uid);
      return (<Redirect to="/Usuario/" />)
    }
    else {
      this.handleAuth();
    }
  }


  render() {
    return (
      <body>
        <div align="center">
          <Card className={useStyles.card}>
            <br />
            <Typography gutterBottom variant="h5" component="h2" align="center">
              Registro
          </Typography>
            <CardMedia
              className={useStyles.media}
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
            <CardActionArea onClick={this.Login}>
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


*/
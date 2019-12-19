import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import firebase from 'firebase';
import { Alert } from 'reactstrap';
import Link2 from "react-router-dom/Link";
import {Redirect} from "react-router-dom";
 
var Nombre="";
var Contraseña="";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        ErgoRed
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


//export default function SignUp() {
  export default class SignUp extends React.Component{

  Usuario = () => {
    var Correo = document.getElementById("email").value.slice(0,(document.getElementById("email").value.length-4))

    firebase.database().ref('Usuarios/'+ Correo+'/Nombre').once('value', (data) =>{
      Nombre = data.toJSON();
      firebase.database().ref('Usuarios/'+ Correo+'/Contraseña').once('value', (data) =>{
        Contraseña=data.toJSON();
        if (Contraseña === document.getElementById("password").value) {
          document.location.href="/Usuario";
        }else{
          console.log("NO ES");
        }
        console.log(Contraseña);
      })
      console.log(Nombre);
    })
    
  }

  AdminI = () => {
    var Correo = document.getElementById("email").value.slice(0,(document.getElementById("email").value.length-4))
    
      firebase.database().ref('Admin/Admin/Contraseña').once('value', (data) =>{
        Contraseña=data.toJSON();
        debugger;
        if (Contraseña === document.getElementById("password").value) {
          document.location.href="/Admin/Ujsde5fsEt845R1Yu2";
        }else{
          console.log("NO ES");
        }
      })

    
  }

  render(){
  return (
    <Container style={{marginTop:100, backgroundColor:"white", borderRadius:"15px"}} component="main" maxWidth="xs">
      <CssBaseline />
      <div  className={useStyles.paper}>
        <Avatar style={{top:30, left:"45%", backgroundColor:"red"}} className={useStyles.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography style={{marginTop:50}} component="h1" variant="h5">
          Iniciar Sesión
        </Typography>
        <form className={useStyles.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Correo Electrónico"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Contraseña:"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <br/>
          <Button
            onClick={() => this.Usuario()}
            fullWidth
            variant="contained"
            color="primary"
          >
            Iniciar Sesión
          </Button>
          <br/>
          <p/>
          <Button
            onClick={() => this.AdminI()}
            fullWidth
            variant="contained"
            color="primary"
          >
            Iniciar Sesión Administrador
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
}



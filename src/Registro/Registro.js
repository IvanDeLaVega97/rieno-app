import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import firebase from 'firebase';
import { Alert } from 'reactstrap';
import {Redirect} from 'react-router-dom';
 

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


export default function SignUp() {
  const classes = useStyles();

  const AddMensaje = () => {
    let Correo = document.getElementById("email").value.slice(0,(document.getElementById("email").value.length-4))
    const db = firebase.database().ref('/Usuarios/'+ Correo);

    let Nombre = document.getElementById("firstName").value;
    let Apellidos = document.getElementById("lastName").value;
    let Telefono = document.getElementById("phone").value;
    let Contraseña = document.getElementById("password").value;
    let Institucion = document.getElementById("organization").value;
    let Pais = document.getElementById("country-name").value;
    let Municipio = document.getElementById("city").value;
    let Licenciatura = document.getElementById("licenciatura").value;
    let Doctorado = document.getElementById("Doctorado").value;
    let LineaInvestigacion = document.getElementById("Linea de investigacion").value;
    let LineaGeneracion = document.getElementById("Lineas de Generacion").value;
    
    debugger;
    if (Nombre !== "" && Apellidos !== "" && Telefono !== "" && Contraseña !== "" && Institucion !== "" && Pais !== "" && Municipio !== "" && Licenciatura !== "" && Doctorado !== "" && LineaInvestigacion !== "" && LineaGeneracion !== "") {
      db.child("Nombre").set(Nombre);
      db.child("Apellidos").set(Apellidos);
      db.child("Telefono").set(Telefono);
      db.child("Contraseña").set(Contraseña);
      db.child("Institucion").set(Institucion);
      db.child("Pais").set(Pais);
      db.child("Municipio").set(Municipio);
      db.child("Licenciatura").set(Licenciatura);
      db.child("Doctorado").set(Doctorado);
      db.child("Línea de investigación").set(LineaInvestigacion);
      db.child("cuerpo academico").set(document.getElementById("cuerpo academico").value);
      db.child("Líneas de Generación").set(LineaGeneracion);
      document.location.href="/Usuario";
    }
    else{
      return(
        <Alert isOpen={true}>Hola</Alert>
      );
    }
  }

  return (
    <Container style={{backgroundColor:"white", borderRadius:"15px"}} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registrarse
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Nombre(s)"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Apellido(s)"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12} sm={7}>
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
            <Grid item xs={12} sm={5}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="Teléfono celular:"
                name="phone"
                autoComplete="phone"
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
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="organization"
                label="Institución:"
                name="organization"
                autoComplete="organization"
              />
              </Grid>
              <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="country-name"
                label="País:"
                name="country-name"
                autoComplete="country-name"
              />
              </Grid>
              <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="state"
                label="Estado:"
                name="state"
                autoComplete="country-name"
              />
              </Grid>
              <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="city"
                label="Municipio:"
                name="city"
                autoComplete="city-name"
              />
              </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="Licenciatura"
                label="Licenciatura:"
                type="text"
                id="licenciatura"
                autoComplete="Licenciatura"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="Maestria"
                label="Maestria:"
                type="text"
                id="Maestria"
                autoComplete="Maestria"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="Doctorado"
                label="Doctorado:"
                type="text"
                id="Doctorado"
                autoComplete="Doctorado"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="Línea de investigación"
                label="Línea de investigación:"
                type="text"
                id="Linea de investigacion"
                autoComplete="Línea de investigación"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="cuerpo academico"
                label="cuerpo académico: (Opcional)"
                type="text"
                id="cuerpo academico"
                autoComplete="cuerpo académico"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="Líneas de Generación"
                label="Líneas de Generación:"
                type="text"
                id="Lineas de Generacion"
                autoComplete="Líneas de Generación"
              />
            </Grid>
          </Grid>
          <Button
            onClick={() => AddMensaje()}
            fullWidth
            variant="contained"
            color="primary"
          >
            Registrarse
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                ¿Ya estás registrado? Iniciar sesión
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}


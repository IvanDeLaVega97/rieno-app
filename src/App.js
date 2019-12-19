import React, {Fragment } from 'react';
import Appbar3 from './components/AppBar/Appbar3';
import TABS from './components/AppBar/TABS';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Registro from './components/Logins/Registro';
import Pie from './components/Body/Pie';
import Usuario from './Plataforma/Usuario/PrincipalUsuario';
import Registro from './Registro/Registro';
import firebase from 'firebase';
import { DB_CONFIG } from './components/config/config';
import InicioSesion from './InicioSesion/InicioSesion';
import LandingPage from './PantallaPrincipal/LandingPage';
import Profile from './PerfilUsuario/PerfilUsuario';
import PerfilAdmin from './PerfilAdmin/PerfilAdmin';
import Archivo from './Archivos/Archivos';

function App() {
  firebase.initializeApp(DB_CONFIG);
  return (
    <Router>
        <Switch>
          <Route path="/" exact component={Principal} />
          <Route path="/Registro" component={Registro} />
          <Route path="/Admin/Ujsde5fsEt845R1Yu2" exact component={PerfilAdmin} />
          <Route path="/InicioSesion" component={InicioSesion} />
          <Route path="/Usuario" component={Profile} />
        </Switch>
    </Router>
  );
}
export default App;

const Principal = () =>
  <Fragment>
    <LandingPage/>
  </Fragment>
  //
  //<Login/>
//<Registro/>
  //<Profile/>
  //<PerfilAdmin/>

  /*<Appbar3/>
    <TABS/>
    <Pie/> */

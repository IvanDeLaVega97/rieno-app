import React, {Fragment } from 'react';
import Appbar3 from './components/AppBar/Appbar3';
import TABS from './components/AppBar/TABS';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Registro from './components/Logins/Registro';
import Pie from './components/Body/Pie';
import Usuario from './Plataforma/Usuario/PrincipalUsuario';
import Registro from './components/Logins/SecionUsuario';
import firebase from 'firebase';
import { DB_CONFIG } from './components/config/config';
import PantallaCurso from './PantallaCurso/PantallaCurso';
import PantallaCursoAdmin from './PantallaCursoAdmin/PantallaCursoAdmin';
import LandingPage from './PantallaPrincipal/LandingPage'


function App() {
  firebase.initializeApp(DB_CONFIG);
  return (
    <Router>
        <Switch>
          <Route path="/" exact component={Principal} />
          <Route path="/Usuario" component={Registro} />
          <Route path="/Curso/Admin" component={PantallaCursoAdmin} />
          <Route path="/Curso" component={PantallaCurso} />
        </Switch>
    </Router>
  );
}
export default App;

const Principal = () =>
  <Fragment>
    <LandingPage/>
  </Fragment>

  /*<Appbar3/>
    <TABS/>
    <Pie/> */

import React, {Fragment } from 'react';
import Appbar3 from './components/AppBar/Appbar3';
import TABS from './components/AppBar/TABS';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Registro from './components/Logins/Registro';
import Pie from './components/Body/Pie';
import Usuario from './Plataforma/Usuario/PrincipalUsuario';
import Registro from './components/Logins/SecionUsuario';


function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact component={Principal} />
          <Route path="/Usuario" component={Registro} />
          <Route path="/Registro" component={Usuario} />
        </Switch>
    </Router>
  );
}
export default App;

const Principal = () =>
  <Fragment>
    <Appbar3/>
    <TABS/>
    <Pie/>
  </Fragment>

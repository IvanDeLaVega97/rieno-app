import React, { Component, Fragment } from 'react';
import Appbar3 from './components/AppBar/Appbar3';
import TABS from './components/AppBar/TABS';
import Body from './components/Body/Body'
import './App.css';


function App() {
  return (
    <Fragment>
      <Appbar3/>
      <TABS/>
    </Fragment>
  );
}
export default App;
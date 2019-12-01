import React, { Component, Fragment } from 'react';
import Appbar3 from './components/AppBar/Appbar3';
import TABS from './components/AppBar/TABS';
import Body from './components/Body/Body'
import cxs from "cxs/component";
import cxsStyles from "cxs";
import './App.css';

const Heading1 = cxs("h1")({
  position: "relative",
  textAlign: "center",
  color: "white",
  marginTop: 50
});

function App() {
  return (
    <Fragment>
      <Appbar3/>
      <TABS/>
    </Fragment>
  );
}
export default App;
import React, { Component } from 'react';
import AppBarU from './AppBarUser';
import firebase from 'firebase';

class Usuario extends Component{
  constructor(){
    super();
    this.state = {
      uploadValue: 0
    }
  }

  render(){
    return(
      <div>
        <AppBarU />
      </div>
    )
  }
}

export default Usuario;
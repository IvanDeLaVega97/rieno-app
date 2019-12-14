import React, { Component } from 'react';
import firebase from 'firebase';
import CompIntegrantes from './CompIntegrantes';
import 'firebase/database';
import { Grid } from '@material-ui/core';

class App extends Component {
    constructor() {
        super();
        this.state = {
            user: null,
            Integrantes: [

            ],
        };
        this.db = firebase.database().ref().child('Cursos/EXPERTO EN RIESGO POR LEVANTAMIENTO MANUAL DE CARGAS/Inscritos/');
    }

    componentWillMount() {
        
        const { Integrantes } = this.state;
        this.db.on('child_added', snap => {
            Integrantes.push({
                Inscrito: snap.key,
                //TareaDes: snap.val().toString()
            })
            this.setState({ Integrantes })
        });

    }

    render(){
        return(
            <div>
                {
                    this.state.Integrantes.map(CartaCurso => {
                        return (
                            <Grid style={{ marginLeft: 20, marginRight: 20, marginTop: 0 }}>
                                <br />
                                <CompIntegrantes key={CartaCurso.Inscrito} Inscrito={CartaCurso.Inscrito} />
                            </Grid>
                        )
                    })
                }
            </div>
        )
    }
}

export default App;

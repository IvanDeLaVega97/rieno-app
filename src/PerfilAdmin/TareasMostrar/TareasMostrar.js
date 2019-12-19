import React, { Component } from 'react';
import firebase from 'firebase';
import Cursos from './Cursos';
import 'firebase/database';
import { Grid } from '@material-ui/core';

class App extends Component {
    constructor() {
        super();
        this.state = {
            user: null,
            Tarea: [

            ],
        };
        this.db = firebase.database().ref().child('Cursos/EXPERTO EN RIESGO POR LEVANTAMIENTO MANUAL DE CARGAS/Tareas/');
    }

    componentWillMount() {
        
        const { Tarea } = this.state;
        this.db.on('child_added', snap => {
            Tarea.push({
                TareaTitulo: snap.key,
                TareaDes: snap.val().toString()
            })
            this.setState({ Tarea })
        });

    }

    render(){
        return(
            <div>
                {
                    this.state.Tarea.map(CartaCurso => {
                        return (
                            <Grid style={{ marginLeft: 20, marginRight: 20, marginTop: 0 }}>
                                <br />
                                <Cursos key={CartaCurso.TareaTitulo} TareaTitulo={CartaCurso.TareaTitulo} TareaDes={CartaCurso.TareaDes} />
                            </Grid>
                        )
                    })
                }
            </div>
        )
    }
}

export default App;

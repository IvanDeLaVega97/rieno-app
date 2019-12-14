
import React, { Component } from 'react';
import firebase from 'firebase';
import Cursos from '../../components/Cursos';
import 'firebase/database';
import { Grid } from '@material-ui/core';
import { DB_CONFIG } from '../../components/config/config';

class App extends Component {
    constructor() {
        super();
        this.state = {
            user: null,
            Curso: [

            ],
        };
        this.db = firebase.database().ref().child('Cursos');
    }

    componentWillMount() {
        
        const { Curso } = this.state;
        this.db.on('child_added', snap => {
            Curso.push({
                CursoID: snap.key,
                CursoContenido: snap.val().toString()
            })
            this.setState({ Curso })
        });

    }

    render(){
        return(
            <div>
                {
                    this.state.Curso.map(CartaCurso => {
                        return (
                            <Grid style={{ marginLeft: 20, marginRight: 20, marginTop: 0 }}>
                                <br />
                                <Cursos key={CartaCurso.CursoID} CursoID={CartaCurso.CursoID} CursoContenido={CartaCurso.CursoContenido} />
                            </Grid>
                        )
                    })
                }
            </div>
        )
    }
}

export default App;

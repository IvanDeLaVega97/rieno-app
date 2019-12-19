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
            Contador:0,
            Nombre:[],
            Apellidos:[],
            Pais:[],
            Contraseña:[],
            Doctorado:[],
            Institucion:[],
            Licenciatura:[],
            LineaInvestigacion:[],
            LineaGeneracion:[],
            Municipio:[],
            Telefono:[],
            cuerpoacademico:[],
        };
        this.db = firebase.database().ref().child('Usuarios/');
    }

    componentWillMount() {
        debugger;
        const { Integrantes } = this.state;
        firebase.database().ref('Usuarios').on('child_added', (data) =>{

            Integrantes.push(data.key)
            this.Datos();
          });
    }

    Datos(){
        debugger;
        const { Nombre, Apellidos, Pais, Contraseña, Doctorado, Institucion, Licenciatura, LineaInvestigacion, LineaGeneracion, Municipio, Telefono, cuerpoacademico, 
        } = this.state;

        firebase.database().ref('Usuarios/'+this.state.Integrantes+'/Apellidos/').once('value', (data2) =>{
            Apellidos.push({
                Apellidos: data2.val(),
            })
        });
        firebase.database().ref('Usuarios/'+this.state.Integrantes+'/Contraseña/').once('value', (data2) =>{
            Contraseña.push({
                Contraseña: data2.val(),
            })
        });
        firebase.database().ref('Usuarios/'+this.state.Integrantes+'/Doctorado/').once('value', (data2) =>{
            Doctorado.push({
                Doctorado: data2.val(),
            })
        });
        firebase.database().ref('Usuarios/'+this.state.Integrantes+'/Institucion/').once('value', (data2) =>{
            Institucion.push({
                Institucion: data2.val(),
            })
        });
        firebase.database().ref('Usuarios/'+this.state.Integrantes+'/Licenciatura/').once('value', (data2) =>{
            Licenciatura.push({
                Licenciatura: data2.val(),
            })
        });
        firebase.database().ref('Usuarios/'+this.state.Integrantes+'/Línea de investigación/').once('value', (data2) =>{
            LineaInvestigacion.push({
                LineaInvestigacion: data2.val(),
            })
        });
        firebase.database().ref('Usuarios/'+this.state.Integrantes+'/Líneas de Generación/').once('value', (data2) =>{
            LineaGeneracion.push({
                LineaGeneracion: data2.val(),
            })
        });
        firebase.database().ref('Usuarios/'+this.state.Integrantes+'/Municipio/').once('value', (data2) =>{
            Municipio.push({
                Municipio: data2.val(),
            })
        });
        firebase.database().ref('Usuarios/'+this.state.Integrantes+'/Nombre/').once('value', (data2) =>{
            Nombre.push({
                Nombre: data2.val(),
            })
        });
        firebase.database().ref('Usuarios/'+this.state.Integrantes+'/Pais/').once('value', (data2) =>{
            Pais.push({
                Pais: data2.val(),
            })
        });
        firebase.database().ref('Usuarios/'+this.state.Integrantes+'/Telefono/').once('value', (data2) =>{
            Telefono.push({
                Telefono: data2.val(),
            })
        });
        firebase.database().ref('Usuarios/'+this.state.Integrantes+'/cuerpo academico/').once('value', (data2) =>{
            cuerpoacademico.push({
                cuerpoacademico: data2.val(),
            })
        });
    }


    render(){
        return(
            <div>
                {
                    
                    this.state.Integrantes.map(CartaCurso => {
                        return (
                            <div style={{ marginLeft: 20, marginRight: 20, marginTop: 0 }}>
                                <br />
                                <CompIntegrantes Apellidos={this.state.Apellidos[0].valueOf().Apellidos} Contraseña={this.state.Contraseña[0].valueOf().Contraseña} Doctorado={this.state.Doctorado[0].valueOf().Doctorado} Institucion={this.state.Institucion[0].valueOf().Institucion} Licenciatura={this.state.Licenciatura[0].valueOf().Licenciatura} LineaInvestigacion={this.state.LineaInvestigacion[0].valueOf().LineaInvestigacion} LineaGeneracion={this.state.LineaGeneracion[0].valueOf().LineaGeneracion} Nombre={this.state.Nombre[0].valueOf().Nombre} Pais={this.state.Pais[0].valueOf().Pais} Telefono={this.state.Telefono[0].valueOf().Telefono} cuerpoacademico={this.state.cuerpoacademico[0].valueOf().cuerpoacademico} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default App;

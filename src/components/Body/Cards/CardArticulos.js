import React, { Fragment } from 'react';
import { Grid, Paper } from '@material-ui/core';
import CarD from './Card'

const style = {
    Paper: { padding: 12, marginTop: 10, marginBottom: 10, textAlign: 'center' },
    frid: { padding: 12, spacing: 10 }
}

export default props =>
    <Fragment>
        <Paper style={style.Paper}>
            Articulos
        </Paper>
        
        <Grid container spacing={24} justify='center' >
            <CarD Titulo="De la ergonomía a la e-ergonomía: ¿desafío conceptual o amenaza real?" style={style.frid} />
            <p style={{marginLeft:20, marginTop: 20}}/>
            <CarD Titulo="The High Cost of Ignoring Ergonomic Work Practices" style={style.frid} />
            <p style={{marginLeft:20, marginTop: 20}}/>
            <CarD Titulo="------------Trabajo a turnos y nocturno" style={style.frid} />
            <p style={{marginLeft:20, marginTop: 20}}/>
        </Grid>

        <br/>

        <Grid container spacing={24} justify='center' >
            <CarD Titulo="¿Qué es la ergonomía participativa?" style={style.frid} />
            <p style={{marginLeft:20, marginTop: 20}}/>
            <CarD Titulo="Epidemiología aplicada a la Ergonomía" style={style.frid} />
            <p style={{marginLeft:20, marginTop: 20}}/>
        </Grid>

    </Fragment>
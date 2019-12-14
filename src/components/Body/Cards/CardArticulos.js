import React, { Fragment } from 'react';
import { Grid, Paper, Divider } from '@material-ui/core';
import CarD from './Card'

const style = {
    Paper: { padding: 12, marginTop: 10, marginBottom: 10, textAlign: 'center' },
}

export default props =>
    <Fragment>
        <Paper style={style.Paper}>
            Articulos
        </Paper>
        
            <CarD Titulo="De la ergonomía a la e-ergonomía: ¿desafío conceptual o amenaza real?"  />
            <p style={{marginLeft:20, marginTop: 20}}/>
            <Divider/>
            <br/>
            <CarD Titulo="The High Cost of Ignoring Ergonomic Work Practices"  />
            <p style={{marginLeft:20, marginTop: 20}}/>
            <Divider/>
            <br/>
            <CarD Titulo="Trabajo a turnos y nocturno"  />
            <p style={{marginLeft:20, marginTop: 20}}/>
            <Divider/>
            <br/>
            <CarD Titulo="Epidemiología aplicada a la Ergonomía"  />
            <p style={{marginLeft:20, marginTop: 20}}/>
            <Divider/>
            <br/>

    </Fragment>
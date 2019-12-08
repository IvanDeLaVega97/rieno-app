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
            Cursos
            </Paper>
        <Grid container spacing={24} justify='center' >
            <CarD style={style.frid} />
        </Grid>
        <Grid container spacing={24} justify='center' >
            <CarD style={style.frid} />
        </Grid>
    </Fragment>
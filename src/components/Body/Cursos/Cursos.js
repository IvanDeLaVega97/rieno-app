import React, { Fragment } from 'react';
import { Grid, Paper } from '@material-ui/core';
import CarD from './Card'

const style = {
    Paper:{padding:12, marginTop:10, marginBottom:10, textAlign:'center'}
}

export default props =>
        <Fragment>
            <Paper style={style.Paper}>
            Cursos
            </Paper>
            <Grid container spacing={24} justify='center' >
                <CarD style={{}}/>
                <br/>
                <CarD/>
            </Grid>
        </Fragment>
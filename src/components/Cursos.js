import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import RegistroCE from '../Plataforma/Usuario/RegistroaCursos/RegistroCE';

class Cursos extends Component {
    constructor(props) {
        super(props);
        this.CursoID = props.CursoID;
        this.CursoContenido = props.CursoContenido;
    }

    render() {
        const classes = makeStyles({
            card: {
                minWidth: 275,
            },
            bullet: {
                display: 'inline-block',
                margin: '0 2px',
                transform: 'scale(0.8)',
            },
            title: {
                fontSize: 14,
            },
            pos: {
                marginBottom: 12,
            },
        });
        return (
                <Card className={classes.card} container spacing={24} justify='center'>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Curso
                    </Typography>
                        <Typography variant="h5" component="h2">
                            {this.CursoID}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            {this.CursoContenido}
                     </Typography>
                        <Typography variant="body2" component="p">
                            well meaning and kindly.
                    <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent> 
                    <CardActions>
                        <Button onClick={console} style={{marginLeft:"5%"}} size="small">Registrarse</Button>
                        <Button style={{marginLeft:"75%"}} size="small">Mostrar Mas </Button>
                    </CardActions>
                </Card> 
        );
    }
}

export default Cursos;
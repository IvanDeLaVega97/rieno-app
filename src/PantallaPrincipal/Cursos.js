import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
  } from "reactstrap";

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
                <Card style={{boxShadow:"1px 1px 10px black", borderRadius:"10px", height:"200px" }} className="card-profile card-plain" container spacing={24} justify='center'>
                    <CardBody>
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

                    </CardContent> 
                    </CardBody>
                </Card> 
        );
    }
}

export default Cursos;

/*
<Col md="4">
                <Card className="card-profile card-plain">
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Epidemiología aplicada a la Ergonomía</CardTitle>
                      </div>
                    </a>
                    <p className="card-description text-justify">
                    SEMAC es una asociación civil formada por ergonomistas mexicanos con cláusula de admisión para extranjeros, que tiene entre sus objetivos principales: Promover, propiciar y patrocinar programas educativos, conferencias, cursos, congresos, y eventos que enriquezcan la cultu...
                    </p>
                  </CardBody>
                  <CardFooter  className="text-center">
                    <Button
                    style={{backgroundColor:"white", color:"black"}}
                    className="btn-just-icon btn-neutral"
                      color="link"
                      href="http://www.semac.org.mx/index.php/articulos-y-noticias/articulos/79-epidemiologia-aplicada-a-la-ergonomia.html"
                    >
                      <i className="fa fa-twitter" />Ir
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
*/
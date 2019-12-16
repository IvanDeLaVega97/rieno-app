
import React, { Component } from 'react';
import firebase from 'firebase';
import Cursos from './Cursos';
import 'firebase/database';
import { Grid } from '@material-ui/core';
import {
    Row,
    Col
} from "reactstrap";

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

    render() {
        return (
            <Row>
                {
                    this.state.Curso.map(CartaCurso => {
                        return (
                            <Col md="4">
                                <Cursos key={CartaCurso.CursoID} CursoID={CartaCurso.CursoID} CursoContenido={CartaCurso.CursoContenido} />
                            </Col>
                        )
                    })
                }
            </Row>
        )
    }
}

export default App;
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
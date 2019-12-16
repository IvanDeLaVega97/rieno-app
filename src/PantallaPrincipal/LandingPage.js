import React from "react";

// reactstrap components
import {
  Button,
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

// core components
import ExamplesNavbar from "../components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "../components/Headers/LandingPageHeader.js";
import DemoFooter from "../components/Footers/DemoFooter";
import "../assets/css/bootstrap.min.css";
import "../assets/scss/paper-kit.scss";
import "../assets/demo/demo.css";
import CursosB from './CursosB';

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className="main" id="1">
        <div className="section text-center">
          <Container >
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Quienes Somos</h2>
                <h5 className="description" style={{textAlign:"justify"}}>
                Somos una red de investigación conformada por 19 universidades e institutos tecnológicos, con mas de 60 miembros. Nuestra tarea es promover, propiciar y patrocinar programas educativos, conferencias, cursos, congresos y eventos que enriquezcan la cultura de la ergonomía a nivel nacional e internacional.
                </h5>
                <br />
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <img
                        alt="..."
                        src={require('../foto/Miembros.png')}
                    />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Mas de 60 Miembros</h4>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info" style={{marginBottom: -5}}>
                  <img
                        alt="..."
                        src={require('../foto/Instituciones.png')}
                    />
                  </div>
                  <br style={{marginTop:-30}}/>
                  <div className="description">
                    <h4 className="info-title">19 Instituciones</h4>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                  <img
                        alt="..."
                        src={require('../foto/Tecnologico.png')}
                    />
                  </div>
                  <div className="description">
                    <h4 style={{marginTop:45}} className="info-title">13 Tecnologicos</h4>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                  <img
                        alt="..."
                        src={require('../foto/Universidades.png')}
                    />
                  </div>
                  <div className="description">
                    <h4 style={{marginTop:45}} className="info-title">6 Universidades</h4>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div id="2" className="section section-dark text-center">
          <Container>
            <h2 className="title">Artículos</h2>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">De la ergonomía a la e-ergonomía</CardTitle>
                      </div>
                    </a>
                    <p style={{marginBottom:"21.4%"}} className="card-description text-center">
                    La evolución más reciente de la ergonomía, bajo la influencia de la irrupción constante e omnipresente de las Tecnologías de la Información.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                    href ="https://www.prevencionintegral.com/comunidad/blog/sociedad-ergonomistas-mexico/2014/01/16/ergonomia-ergonomia-desafio-conceptual-o"
                    style={{backgroundColor:"white", color:"black"}}
                      className="btn-just-icon btn-neutral"
                      color="link"
                    >
                      <i className="fa fa-twitter" />Ir
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Ignoring Ergonomics Can Be Costly</CardTitle>
                      </div>
                    </a>
                    <p style={{marginBottom:"8.2%"}} className="card-description text-justify">
                    Ergonomics is the study of work. From an Occupational Safety and Health Administration perspective, it is the process of designing the job to fit the employee—rather than forcing the employee’s body to fit the job.
                    </p>
                  </CardBody>
                  <CardFooter  className="text-center">
                    <Button
                    style={{backgroundColor:"white", color:"black"}}
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="https://waterwelljournal.com/ignoring-ergonomics-can-be-costly/"
                    >
                        
                      <i className="fa fa-twitter" />Ir
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
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
            </Row>
          </Container>
        </div>
        <div id="3" className="section landing-section">
          <Container>
          <h2 style={{marginBottom:"-2%"}} className="text-center">Cursos</h2>
                <CursosB/>
          </Container>
        </div>




        <div id="4" className="section section-dark text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 style={{color:"white"}} className="text-center">Contactos</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label style={{color:"white"}}>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label style={{color:"white"}}>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label style={{color:"white"}}>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
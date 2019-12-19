
import React from "react";
import Link2 from "react-router-dom/Link";
// nodejs library that concatenates strings
import classnames from "classnames";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Button
} from "reactstrap";
import {Link} from 'react-scroll';

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };


    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };

  });
  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            to="/index"
            target="_blank"
            title="Organización RIENO"
            tag={Link}
          >
            RIENO
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
          <NavItem>
              <NavLink>
                <Link style={{cursor: "pointer"}} to="1" smooth={true} duration={1000}>
                <i className="nc-icon nc-book-bookmark" /> Quienes Somos
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/index" tag={Link}>
              <Link style={{cursor: "pointer"}} to="2" smooth={true} duration={1000}>
                <i className="nc-icon nc-layout-11" /> Articulos 
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
              <Link style={{cursor: "pointer"}} to="3" smooth={true} duration={1000}> 
                <i className="nc-icon nc-layout-11" /> Cursos
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link style={{cursor: "pointer"}} to="4" smooth={true} duration={1000}>
                <i className="nc-icon nc-book-bookmark" /> Contacto
                </Link>
              </NavLink>
            </NavItem>
            <Link2 to="InicioSesion">
            <Button
              style={{color:"grey"}}
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
            >
              <i className="fa fa-play" />
              Iniciar Sesión
            </Button>
            </Link2>
            <Link2 to="Registro">
            <Button
              style={{color:"grey"}}
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
            >
              <i className="fa fa-play" />
              Registrarse
            </Button>
            </Link2>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default ExamplesNavbar;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Articulo from './Cursos/Articulos/Articulos';
import { createMuiTheme, responsiveFontSizes, MuiThemeProvider, MenuList, MenuItem, Grid, Paper, Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: "80%",
    marginRight: "-5%",
    maxWidth: "100%",
    backgroundColor: theme.palette.background.paper,
    borderRadius: 5,
    boxShadow: "10px",
    marginTop: "0%"
  },
  card: { minWidth: 275 },
  bullet: { display: 'inline-block', margin: '0 2px', transform: 'scale(0.8)' },
  title: { fontSize: 14 },
  pos: { marginBottom: 12, },
  Paper: { padding: 12, marginTop: 10, marginBottom: 10, textAlign: 'center' },
  frid: { padding: 12, spacing: 10 }
}));

const Body = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);
  return (
    <div style={{ backgroundColor: "white" }}>
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <MenuList>
              <Articulo Nombre="- Sociedad de Ergonomistas de México" URL="http://www.semac.org.mx" />
              <Divider />
              <Articulo Nombre="- Asociación Internacional de Ergonomía" URL="https://www.iea.cc" />
              <Divider width="100%" />
              <Articulo Nombre="- Unión Latinoamericana de Ergonomía" URL="http://www.ulaergo.net" />
              <Divider width="100%" />
              <Articulo Nombre="- Asociación de Ergonomía Argentina" URL="http://www.adeargentina.org.ar" />
              <Divider width="100%" />
              <Articulo Nombre="- Sociedad Brasileña de Ergonomía" URL="http://www.abergo.org.br" />
              <Divider width="100%" />
              <Articulo Nombre="- Sociedad Chilena de Ergonomía" URL="https://www.sochergo.cl" />
              <Divider width="100%" />
              <Articulo Nombre="- Sociedad Colombiana de Ergonomía" URL="http://www.saludocupacional.com.co/" />
              <Divider width="100%" />
              <Articulo Nombre="- Sociedad Peruana de Ergonomía" URL="http://sopergo.com/v2/" />
              <Divider width="100%" />
              <Articulo Nombre="- Federación Nacional de Salud en el Trabajo" URL="http://www.fenastac.org.mx" />
              <Divider width="100%" />
              <Articulo Nombre="- International Society for Occupational Ergonomics & Safety" URL="http://isoes.info" />
              <Divider width="100%" />
              <Articulo Nombre="- Sociedad Científica Ecuatoriana de Ergonomia" URL="http://www.soceergo.org" />
              <Divider width="100%" />
            </MenuList>
          </Paper>
        </div>
      </MuiThemeProvider>
    </div>
  );
};

export default Body;

/*
<Grid container spacing={24} justify='center'>
        <div className={classes.root}>
          <List style={{ width: "100%", backgroundColor: "orange" }} component="nav" aria-label="secondary mailbox folders">
            <p style={{ textAlign: "center" }}>-Enlaces de Interes-</p>
            <Divider width="100%" />
            <Articulo Nombre="● Sociedad de Ergonomistas de México" URL="http://www.semac.org.mx" />
            <Divider width="100%" />
            <Articulo Nombre="● Asociación Internacional de Ergonomía" URL="https://www.iea.cc" />
            <Divider width="100%" />
            <Articulo Nombre="● Unión Latinoamericana de Ergonomía" URL="http://www.ulaergo.net" />
            <Divider width="100%" />
            <Articulo Nombre="● Asociación de Ergonomía Argentina" URL="http://www.adeargentina.org.ar" />
            <Divider width="100%" />
            <Articulo Nombre="● Sociedad Brasileña de Ergonomía" URL="http://www.abergo.org.br" />
            <Divider width="100%" />
            <Articulo Nombre="● Sociedad Chilena de Ergonomía" URL="https://www.sochergo.cl" />
            <Divider width="100%" />
            <Articulo Nombre="● Sociedad Colombiana de Ergonomía" URL="http://www.saludocupacional.com.co/" />
            <Divider width="100%" />
            <Articulo Nombre="● Sociedad Peruana de Ergonomía" URL="http://sopergo.com/v2/" />
            <Divider width="100%" />
            <Articulo Nombre={<Typography>"● Federación Nacional de Salud en el Trabajo"</Typography>} URL="http://www.fenastac.org.mx" />
            <Divider width="100%" />
            <Articulo Nombre="● International Society for Occupational Ergonomics & Safety" URL="http://isoes.info" />
            <Divider width="100%" />
            <Articulo Nombre="● Sociedad Científica Ecuatoriana de Ergonomia" URL="http://www.soceergo.org" />
            <Divider width="100%" />
          </List>
        </div>
      </Grid>
*/
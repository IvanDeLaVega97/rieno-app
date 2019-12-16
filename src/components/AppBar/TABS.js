import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
//import { Picture, FullsizePicture } from 'react-responsive-picture';
import CardArticulos from '../Body/Cards/CardArticulos';
import Registro from '../Logins/Registro';
import BodyInicio from '../Body/BodyInicio';
import { Box, Tab, Tabs, Typography, makeStyles } from '@material-ui/core';
import CursosB from '../../Plataforma/Cursos/CursosB';
import Paper from '@material-ui/core/Paper/Paper'


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#263238',
    },
    secondary: {
      main: '#263238',
    },
    type: 'dark'
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#000000',
    width: "auto"
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Paper className={classes.root}>
          <Tabs indicatorColor={'#C30368'} value={value} onChange={handleChange} aria-label="simple tabs example" centered className={classes.root} >
            <Tab style={{ width: "20%", fontSize: "70%" }} label="Inicio" {...a11yProps(0)} NamePage="Inicio" />
            <Tab style={{ width: "20%", fontSize: "70%" }} label="Articulos" {...a11yProps(1)} NamePage="Articulos" />
            <Tab style={{ width: "20%", fontSize: "70%" }} label="Quienes Somos" {...a11yProps(2)} NamePage="Quienes Somos" />
            <Tab style={{ width: "20%", fontSize: "70%" }} label="Cursos" {...a11yProps(3)} NamePage="Cursos" />
            <Tab style={{ width: "20%", fontSize: "70%" }} label="Contacto" {...a11yProps(4)} NamePage="Contacto" />
          </Tabs>
        </Paper>
      </MuiThemeProvider>
      <TabPanel value={value} index={0}>
        <div style={{ height: 1000, width: "90%", marginLeft: "3.5%" }}>
          <BodyInicio />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CardArticulos />
      </TabPanel>
      <TabPanel value={value} index={2}>

  <Typography variant="h5" component="h3">
    This is a sheet of paper.
  </Typography>
  <Typography component="p">
    Paper can be used to build surface or other elements for your application.
  </Typography>



      </TabPanel>
      <TabPanel value={value} index={3}>
        <p style={{backgroundColor: "black", height:50, textAlign: "center"}}>
        <span style={{ textAlign: "center", fontSize: 40, color:"white"}}>Cursos</span>
        </p>
        <CursosB />
      </TabPanel>
      <TabPanel value={value} index={4}>
      </TabPanel>
    </div>
  );
}

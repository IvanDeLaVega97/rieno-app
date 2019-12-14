import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AppbaR from './APPBAR';
import TareaMostrar from '../Cursos-Agregar/TareasMostrar/TareasMostrar';
import Integrantes from '../Integrantes/Integrantes';

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
    '& > *': {
      margin: theme.spacing(1),
    },
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
      <AppbaR Curso="La Importancia DE ERGO"/>
        <Tabs centered value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Tablón" {...a11yProps(0)} />
          <Tab label="Archivos de Clase" {...a11yProps(1)} />
          <Tab label="Personas" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div>
          <TareaMostrar/>
      </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Archivos de Clase
      </TabPanel>
      <TabPanel value={value} index={2}>
        Personas
        <Integrantes/>
      </TabPanel>
    </div>
  );
}
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Picture,  FullsizePicture} from 'react-responsive-picture';
import Cursos from '../Body/Cursos/Cursos'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper/Paper'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
      primary:{
        main: '#263238',
      },
      secondary:{
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
    },
  }));

  const EstiloTextoTabs = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      color: '#C30368',
      indicator: {
        backgroundColor: 'orange'
      }
  }}));
  
  export default function SimpleTabs() {
    const classes = useStyles();
    const classes2 = EstiloTextoTabs();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <div>
          <MuiThemeProvider theme={theme}>
        <Paper className={classes.root}>
          <Tabs indicatorColor={'#C30368'} value={value} onChange={handleChange} aria-label="simple tabs example" centered className={classes.root} >
            <Tab label="Inicio" {...a11yProps(0)} />
            <Tab label="Blog" {...a11yProps(1)} />
            <Tab label="Quienes Somos" {...a11yProps(2)} textColor="secundary"/>
            <Tab label="Cursos" {...a11yProps(3)} />
            <Tab label="Contacto" {...a11yProps(4)} />
          </Tabs>
        </Paper>
        </MuiThemeProvider>
        <TabPanel value={value} index={0}>
          <div style={{ height: 400}}>
          <FullsizePicture center={true} src="https://firebasestorage.googleapis.com/v0/b/rieno-c0fd1.appspot.com/o/Img%20Principal.png?alt=media&token=158038ef-e461-4da3-8218-c64c5671d79e">
          </FullsizePicture>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
        </TabPanel>
        <TabPanel value={value} index={3}>
        <Cursos/>
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Three
        </TabPanel>
      </div>
    );
  }
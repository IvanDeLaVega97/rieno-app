import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, } from '@material-ui/core';
//import Registro from '../../components/Logins/Registro';
import {Link, Redirect} from 'react-router-dom'; 

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            RIENO
          </Typography>
          <Link to="/Usuario">
          <Button color="inherit" style={{color: 'black', backgroundColor:'#CCCCCC' }}>Inicio & Registro</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

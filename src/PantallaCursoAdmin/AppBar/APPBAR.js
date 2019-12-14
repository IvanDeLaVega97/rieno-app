import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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

export default function ButtonAppBar({Curso}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h7" className={classes.title}>
            ADMINISTRADOR
          </Typography>
          <Typography edge="center" variant="h8" className={classes.title}>
            {Curso}
          </Typography>
          <Button color="inherit">Cerrar Sesión</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {CardActionArea, CardContent, Typography, Divider} from '@material-ui/core';
//import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  card: {
    maxWidth: "100%",
    margin: "lem",
    boxSizing: "border-box"
  },
  media: {
    height: 25,
  },
});

export default function MediaCard({Titulo, Texto}) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
          <h4 style={{ textAlign: 'center', fontSize:15}}>{Titulo}</h4>
        <CardContent>
          <Divider/>
          <Typography variant="body2" component="p">
  <h5 style={{ textAlign: 'center', }}>{Texto}</h5>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
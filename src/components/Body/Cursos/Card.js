import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: "350px",
    margin: "lem",
    boxSizing: "border-box"
  },
  media: {
    height: 25,
  },
});

export default function MediaCard() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Curso abc"
        >
            <h1 style={{textAlign:'center',}}>Curso</h1>
        </CardMedia>
        <CardContent>
          <Typography variant="body2" component="p">
              <h5 style={{textAlign:'center',}}>Esta bien perroncicimo es te curso de ergonomia nombre wey al 100</h5>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
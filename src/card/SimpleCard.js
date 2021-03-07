import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(3),
    right: theme.spacing(6),
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function SimpleCard(prueba) {
  const classes = useStyles();
  console.log(prueba)
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h1">
          {prueba.prueba.id}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {prueba.prueba.name}  {prueba.prueba.lastName}
        </Typography>
        <Typography variant="body2" component="p">
          {prueba.prueba.email}
        </Typography>
      </CardContent>
    </Card>
  );
}
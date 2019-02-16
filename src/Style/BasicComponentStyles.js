import React, { useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    width: 135,
    height: 135,
    textAlign: 'center'
  },
  cardActions: {
    justifyContent: 'center'
  }
}));

export default function BasicComponentStyles() {
  const classes = useStyles();
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    setCount(count + 1);
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h2">{count}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" onClick={onIncrement}>
          Increment
        </Button>
      </CardActions>
    </Card>
  );
}

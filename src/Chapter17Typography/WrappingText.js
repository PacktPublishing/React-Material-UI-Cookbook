import React, { Fragment } from 'react';
import clsx from 'clsx';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  paper: {
    minWidth: 300,
    padding: theme.spacing(2),
    margin: theme.spacing(3)
  },
  fixedHeight: { height: 100 },
  responsive: {
    [theme.breakpoints.down('xs')]: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }
});

const WrappingText = withStyles(styles)(({ classes }) => (
  <Fragment>
    <Paper className={classes.paper}>
      <Typography noWrap>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore
      </Typography>
    </Paper>
    <Paper className={clsx(classes.paper, classes.fixedHeight)}>
      <Typography className={classes.responsive}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque
        ipsa quae ab illo inventore veritatis et quasi architecto
        beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
        quia voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi
        nesciunt.
      </Typography>
    </Paper>
  </Fragment>
));

export default WrappingText;

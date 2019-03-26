import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  paper: {
    width: 200,
    height: 200,
    padding: theme.spacing(1)
  }
});

const MyPaper = withStyles(styles)(
  ({ horizontalAlign, verticalAlign, classes, ...props }) => (
    <Grid
      container
      component={Paper}
      className={classes.paper}
      alignContent={verticalAlign}
      justify={horizontalAlign}
      {...props}
    />
  )
);

const MyTypography = ({
  horizontalAlign,
  verticalAlign,
  ...props
}) => <Grid item component={Typography} {...props} />;

const AligningText = ({ ...props }) => (
  <MyPaper {...props}>
    <MyTypography {...props}>Text</MyTypography>
  </MyPaper>
);

export default AligningText;

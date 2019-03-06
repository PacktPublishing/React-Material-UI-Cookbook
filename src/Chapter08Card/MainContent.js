import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  content: {
    marginTop: theme.spacing(1)
  }
});

const MainContent = withStyles(styles)(({ classes }) => (
  <Card className={classes.card}>
    <CardContent>
      <Typography variant="h4">Subject Title</Typography>
      <Typography variant="subtitle1">
        A little more about subject
      </Typography>
      <Typography className={classes.content}>
        Even more information on the subject, contained within the
        card. You can fit a lot of information here, but don't try to
        overdo it.
      </Typography>
    </CardContent>
  </Card>
));

export default MainContent;

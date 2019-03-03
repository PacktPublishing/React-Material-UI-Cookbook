import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import PersonIcon from '@material-ui/icons/Person';

const styles = theme => ({
  card: {
    maxWidth: 400
  }
});

const MyCardHeader = withStyles(styles)(({ classes }) => (
  <Card className={classes.card}>
    <CardHeader
      title="Ron Swanson"
      subheader="Legend"
      avatar={
        <Avatar>
          <PersonIcon />
        </Avatar>
      }
    />
    <CardContent>
      <Typography variant="caption">Joined 2009</Typography>
      <Typography>
        Some filler text about the user. There doesn't have to be a
        lot - just enough so that the text spans at least two lines.
      </Typography>
    </CardContent>
  </Card>
));

export default MyCardHeader;

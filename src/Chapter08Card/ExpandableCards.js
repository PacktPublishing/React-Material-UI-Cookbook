import React, { useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';

import PersonIcon from '@material-ui/icons/Person';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 400
  },
  expand: {
    marginLeft: 'auto'
  }
}));

const ExpandIcon = ({ expanded }) =>
  expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />;

export default function ExpandableCards() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
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
      <CardActions disableActionSpacing>
        <IconButton>
          <ContactMailIcon />
        </IconButton>
        <IconButton>
          <ContactPhoneIcon />
        </IconButton>
        <IconButton
          className={classes.expand}
          onClick={toggleExpanded}
        >
          <ExpandIcon expanded={expanded} />
        </IconButton>
      </CardActions>
      <Collapse in={expanded}>
        <CardContent>
          <Typography>
            Even more filler text about the user. It doesn't fit in
            the main content area of the card, so this is what the
            user will see when they click the expand button.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

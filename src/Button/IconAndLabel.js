import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import Delete from '@material-ui/icons/Delete';
import FileUpload from '@material-ui/icons/FileUpload';
import KeyboardVoice from '@material-ui/icons/KeyboardVoice';
import Save from '@material-ui/icons/Save';
import Send from '@material-ui/icons/Send';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
});

const IconLabelButtons = ({ classes }) => (
  <div>
    <Button
      className={classes.button}
      variant="raised"
      color="secondary"
    >
      Delete
      <Delete className={classes.rightIcon} />
    </Button>
    <Button
      className={classes.button}
      variant="raised"
      color="primary"
    >
      Send
      <Send className={classes.rightIcon} />
    </Button>
    <Button
      className={classes.button}
      variant="raised"
      color="default"
    >
      Upload
      <FileUpload className={classes.rightIcon} />
    </Button>
    <Button
      className={classes.button}
      variant="raised"
      disabled
      color="secondary"
    >
      <KeyboardVoice className={classes.leftIcon} />
      Talk
    </Button>
    <Button className={classes.button} variant="raised" size="small">
      <Save
        className={classNames(classes.leftIcon, classes.iconSmall)}
      />
      Save
    </Button>
  </div>
);

IconLabelButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IconLabelButtons);

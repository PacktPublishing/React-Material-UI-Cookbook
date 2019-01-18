import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import AccountBalance from '@material-ui/icons/AccountBalance';
import AccountBalanceOutlined from '@material-ui/icons/AccountBalanceOutlined';
import Backup from '@material-ui/icons/Backup';
import BackupOutlined from '@material-ui/icons/BackupOutlined';
import Build from '@material-ui/icons/Build';
import BuildOutlined from '@material-ui/icons/BuildOutlined';

const items = [
  {
    name: 'AccountBalance',
    Icon: AccountBalanceOutlined,
    CheckedIcon: AccountBalance
  },
  {
    name: 'Backup',
    Icon: BackupOutlined,
    CheckedIcon: Backup
  },
  {
    name: 'Build',
    Icon: BuildOutlined,
    CheckedIcon: Build
  }
];

const styles = theme => ({});

export default withStyles(styles)(
  class CustomizingCheckboxItems extends Component {
    constructor() {
      super();
      this.state = items.reduce(
        (state, item) => ({ ...state, [item.name]: false }),
        {}
      );
    }

    onChange = event => {
      this.setState({ [event.target.name]: event.target.checked });
    };

    render() {
      return (
        <FormGroup>
          {items.map(({ name, Icon, CheckedIcon }, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={this.state[name]}
                  onChange={this.onChange}
                  inputProps={{ name }}
                  icon={<Icon fontSize="small" />}
                  checkedIcon={<CheckedIcon fontSize="small" />}
                />
              }
              label={name}
            />
          ))}
        </FormGroup>
      );
    }
  }
);

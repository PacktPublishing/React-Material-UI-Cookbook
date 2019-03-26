import React, { useState, useEffect } from 'react';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import AccountBalance from '@material-ui/icons/AccountBalance';
import AccountBalanceOutlined from '@material-ui/icons/AccountBalanceOutlined';
import Backup from '@material-ui/icons/Backup';
import BackupOutlined from '@material-ui/icons/BackupOutlined';
import Build from '@material-ui/icons/Build';
import BuildOutlined from '@material-ui/icons/BuildOutlined';

const initialItems = [
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

export default function CustomizingCheckboxItems() {
  const [items, setItems] = useState({});

  useEffect(() => {
    setItems(
      initialItems.reduce(
        (state, item) => ({ ...state, [item.name]: false }),
        {}
      )
    );
  }, []);

  const onChange = e => {
    setItems({ [e.target.name]: e.target.checked });
  };

  return (
    <FormGroup>
      {initialItems.map(({ name, Icon, CheckedIcon }, index) => (
        <FormControlLabel
          key={index}
          control={
            <Checkbox
              checked={items[name] || false}
              onChange={onChange}
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

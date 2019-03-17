import React, { Fragment, useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import LinearProgress from '@material-ui/core/LinearProgress';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  dialog: { minHeight: 200 },
  select: { width: '100%' }
}));

const fetchItems = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
      ]);
    }, 3000);
  });

const MaybeLinearProgress = ({ loading, ...props }) =>
  loading ? <LinearProgress {...props} /> : null;

const MaybeSelect = ({ loading, ...props }) =>
  loading ? null : <Select {...props} />;

export default function APIIntegration() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState('');

  const onShowItems = () => {
    setOpen(true);
    setLoading(true);

    fetchItems().then(items => {
      setLoading(false);
      setItems(items);
    });
  };

  const onClose = () => {
    setOpen(false);
  };

  const onSelect = e => {
    setSelected(e.target.value);
  };

  return (
    <Fragment>
      <Button color="primary" onClick={onShowItems}>
        Select Item
      </Button>
      <Dialog
        open={open}
        classes={{ paper: classes.dialog }}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle>Select Item</DialogTitle>
        <DialogContent>
          <MaybeLinearProgress loading={loading} />
          <MaybeSelect
            value={selected}
            onChange={onSelect}
            className={classes.select}
            loading={loading}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {items.map(item => (
              <MenuItem key={item.id} index={item.id} value={item.id}>
                {item.name}
              </MenuItem>
            ))}
          </MaybeSelect>
        </DialogContent>
        <DialogActions>
          <Button
            disabled={loading}
            onClick={onClose}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            disabled={loading}
            variant="contained"
            onClick={onClose}
            color="primary"
          >
            Select
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}

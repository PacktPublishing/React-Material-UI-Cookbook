import React, { Fragment, Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import LinearProgress from '@material-ui/core/LinearProgress';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  dialog: { minHeight: 200 },
  select: { width: '100%' }
});

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

export default withStyles(styles)(
  class APIIntegration extends Component {
    state = {
      open: false,
      loading: false,
      items: [],
      selected: ''
    };

    onShowItems = () => {
      this.setState({ open: true, loading: true });

      fetchItems().then(items => {
        this.setState({ loading: false, items });
      });
    };

    onClose = () => {
      this.setState({ open: false });
    };

    onSelect = e => {
      this.setState({ selected: e.target.value });
    };

    render() {
      const { classes } = this.props;

      return (
        <Fragment>
          <Button color="primary" onClick={this.onShowItems}>
            Select Item
          </Button>
          <Dialog
            open={this.state.open}
            classes={{ paper: classes.dialog }}
            maxWidth="xs"
            fullWidth
          >
            <DialogTitle>Select Item</DialogTitle>
            <DialogContent>
              <MaybeLinearProgress loading={this.state.loading} />
              <MaybeSelect
                value={this.state.selected}
                onChange={this.onSelect}
                className={classes.select}
                loading={this.state.loading}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {this.state.items.map(item => (
                  <MenuItem index={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
              </MaybeSelect>
            </DialogContent>
            <DialogActions>
              <Button
                disabled={this.state.loading}
                onClick={this.onClose}
                color="primary"
              >
                Cancel
              </Button>
              <Button
                disabled={this.state.loading}
                variant="contained"
                onClick={this.onClose}
                color="primary"
              >
                Select
              </Button>
            </DialogActions>
          </Dialog>
        </Fragment>
      );
    }
  }
);

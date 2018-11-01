import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';

const styles = theme => ({
  root: { margin: theme.spacing.unit * 2, textAlign: 'center' },
  button: {}
});

const StartButton = ({ row, onClick }) => (
  <IconButton
    onClick={onClick}
    color={row.status === 'off' ? 'primary' : 'default'}
    disabled={row.status === 'running'}
  >
    <PlayArrowIcon fontSize="small" />
  </IconButton>
);

const StopButton = ({ row, onClick }) => (
  <IconButton
    onClick={onClick}
    color={row.status === 'running' ? 'primary' : 'default'}
    disabled={row.status === 'off'}
  >
    <StopIcon fontSize="small" />
  </IconButton>
);

export default withStyles(styles)(
  class extends Component {
    state = {
      rows: [
        {
          id: 1,
          name: 'First Item',
          status: 'running'
        },
        {
          id: 2,
          name: 'Second Item',
          status: 'off'
        },
        {
          id: 3,
          name: 'Third Item',
          status: 'off'
        },
        {
          id: 4,
          name: 'Fourth Item',
          status: 'running'
        },
        {
          id: 5,
          name: 'Fifth Item',
          status: 'off'
        }
      ]
    };

    toggleStatus = id => () =>
      this.setState(state => {
        const rows = [...state.rows];
        const index = rows.findIndex(row => row.id === id);
        const row = rows[index];

        rows[index] = {
          ...row,
          status: row.status === 'running' ? 'off' : 'running'
        };

        return { ...state, rows };
      });

    render() {
      const { classes } = this.props;

      return (
        <Paper className={classes.root}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.rows.map(row => {
                return (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>
                      <StartButton
                        row={row}
                        onClick={this.toggleStatus(row.id)}
                      />
                      <StopButton
                        row={row}
                        onClick={this.toggleStatus(row.id)}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
);

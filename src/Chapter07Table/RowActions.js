import React, { useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';

const useStyles = makeStyles(theme => ({
  root: { margin: theme.spacing(2), textAlign: 'center' },
  button: {}
}));

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

export default function RowActions() {
  const classes = useStyles();
  const [rows, setRows] = useState([
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
  ]);

  const toggleStatus = id => () => {
    const newRows = [...rows];
    const index = rows.findIndex(row => row.id === id);
    const row = rows[index];

    newRows[index] = {
      ...row,
      status: row.status === 'running' ? 'off' : 'running'
    };
    setRows(newRows);
  };

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
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  <StartButton
                    row={row}
                    onClick={toggleStatus(row.id)}
                  />
                  <StopButton
                    row={row}
                    onClick={toggleStatus(row.id)}
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

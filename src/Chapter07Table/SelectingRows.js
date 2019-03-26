import React, { useState, Fragment } from 'react';

import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

const useStyles = makeStyles(theme => ({
  root: { margin: theme.spacing(2), textAlign: 'center' },
  card: { margin: theme.spacing(2), maxWidth: 300 }
}));

export default function SelectingRows() {
  const classes = useStyles();
  const [columns, setColumns] = useState([
    { name: 'Name', active: false },
    { name: 'Created', active: false },
    { name: 'High', active: false, numeric: true },
    { name: 'Low', active: false, numeric: true },
    { name: 'Average', active: true, numeric: true }
  ]);
  const [rows, setRows] = useState([
    {
      id: 1,
      name: 'First Item',
      created: new Date(),
      high: 2935,
      low: 1924,
      average: 2429.5
    },
    {
      id: 2,
      name: 'Second Item',
      created: new Date(),
      high: 439,
      low: 231,
      average: 335
    },
    {
      id: 3,
      name: 'Third Item',
      created: new Date(),
      high: 8239,
      low: 5629,
      average: 6934
    },
    {
      id: 4,
      name: 'Fourth Item',
      created: new Date(),
      high: 3203,
      low: 3127,
      average: 3165
    },
    {
      id: 5,
      name: 'Fifth Item',
      created: new Date(),
      high: 981,
      low: 879,
      average: 930
    }
  ]);

  const onRowClick = id => () => {
    const newRows = [...rows];
    const index = rows.findIndex(row => row.id === id);
    const row = rows[index];

    newRows[index] = { ...row, selected: !row.selected };
    setRows(newRows);
  };

  const selections = () => rows.filter(row => row.selected).length;

  const selectedLow = () =>
    rows
      .filter(row => row.selected)
      .reduce((total, row) => total + row.low, 0);

  const selectedHigh = () =>
    rows
      .filter(row => row.selected)
      .reduce((total, row) => total + row.high, 0);

  const selectedAverage = () => (selectedLow() + selectedHigh()) / 2;

  return (
    <Fragment>
      <Card className={classes.card}>
        <CardHeader title={`(${selections()}) rows selected`} />
        <CardContent>
          <Grid container direction="column">
            <Grid item>
              <Grid container justify="space-between">
                <Grid item>
                  <Typography>Low</Typography>
                </Grid>
                <Grid item>
                  <Typography>{selectedLow()}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container justify="space-between">
                <Grid item>
                  <Typography>High</Typography>
                </Grid>
                <Grid item>
                  <Typography>{selectedHigh()}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container justify="space-between">
                <Grid item>
                  <Typography>Average</Typography>
                </Grid>
                <Grid item>
                  <Typography>{selectedAverage()}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Paper className={classes.root}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.name}
                  align={column.numeric ? 'right' : 'inherit'}
                >
                  {column.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow
                key={row.id}
                onClick={onRowClick(row.id)}
                selected={row.selected}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.created.toLocaleString()}</TableCell>
                <TableCell align="right">{row.high}</TableCell>
                <TableCell align="right">{row.low}</TableCell>
                <TableCell align="right">{row.average}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Fragment>
  );
}

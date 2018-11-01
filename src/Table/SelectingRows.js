import React, { Component, Fragment } from 'react';

import { withStyles } from '@material-ui/core/styles';
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

const styles = theme => ({
  root: { margin: theme.spacing.unit * 2, textAlign: 'center' },
  card: { margin: theme.spacing.unit * 2, maxWidth: 300 }
});

export default withStyles(styles)(
  class extends Component {
    state = {
      columns: [
        { name: 'Name', active: false },
        { name: 'Created', active: false },
        { name: 'High', active: false, numeric: true },
        { name: 'Low', active: false, numeric: true },
        { name: 'Average', active: true, numeric: true }
      ],
      rows: [
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
      ]
    };

    onRowClick = id => () => {
      this.setState(state => {
        const rows = [...state.rows];
        const index = rows.findIndex(row => row.id === id);
        const row = rows[index];

        rows[index] = { ...row, selected: !row.selected };

        return { ...state, rows };
      });
    };

    get selections() {
      return this.state.rows.filter(row => row.selected).length;
    }

    get selectedLow() {
      return this.state.rows
        .filter(row => row.selected)
        .reduce((total, row) => total + row.low, 0);
    }

    get selectedHigh() {
      return this.state.rows
        .filter(row => row.selected)
        .reduce((total, row) => total + row.high, 0);
    }

    get selectedAverage() {
      return (this.selectedLow + this.selectedHigh) / 2;
    }

    render() {
      const { classes } = this.props;

      return (
        <Fragment>
          <Card className={classes.card}>
            <CardHeader
              title={`(${this.selections}) rows selected`}
            />
            <CardContent>
              <Grid container direction="column">
                <Grid item>
                  <Grid container justify="space-between">
                    <Grid item>
                      <Typography>Low</Typography>
                    </Grid>
                    <Grid item>
                      <Typography>{this.selectedLow}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container justify="space-between">
                    <Grid item>
                      <Typography>High</Typography>
                    </Grid>
                    <Grid item>
                      <Typography>{this.selectedHigh}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container justify="space-between">
                    <Grid item>
                      <Typography>Average</Typography>
                    </Grid>
                    <Grid item>
                      <Typography>{this.selectedAverage}</Typography>
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
                  {this.state.columns.map(column => (
                    <TableCell
                      key={column.name}
                      numeric={column.numeric}
                    >
                      {column.name}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.rows.map(row => (
                  <TableRow
                    key={row.id}
                    onClick={this.onRowClick(row.id)}
                    selected={row.selected}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>
                      {row.created.toLocaleString()}
                    </TableCell>
                    <TableCell numeric>{row.high}</TableCell>
                    <TableCell numeric>{row.low}</TableCell>
                    <TableCell numeric>{row.average}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Fragment>
      );
    }
  }
);

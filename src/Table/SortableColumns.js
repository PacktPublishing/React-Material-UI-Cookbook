import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';

const comparator = (prop, desc = true) => (a, b) => {
  const order = desc ? -1 : 1;

  if (a[prop] < b[prop]) {
    return -1 * order;
  }

  if (a[prop] > b[prop]) {
    return 1 * order;
  }

  return 0 * order;
};

const styles = theme => ({
  root: { margin: theme.spacing.unit * 2, textAlign: 'center' }
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

    onSortClick = index => () =>
      this.setState(state => ({
        columns: state.columns.map((column, i) => ({
          ...column,
          active: index === i,
          order:
            (index === i &&
              (column.order === 'desc' ? 'asc' : 'desc')) ||
            undefined
        })),
        rows: state.rows
          .slice()
          .sort(
            comparator(
              state.columns[index].name.toLowerCase(),
              state.columns[index].order === 'desc'
            )
          )
      }));

    render() {
      const { classes } = this.props;

      return (
        <Paper className={classes.root}>
          <Table>
            <TableHead>
              <TableRow>
                {this.state.columns.map((column, index) => (
                  <TableCell
                    key={column.name}
                    numeric={column.numeric}
                  >
                    <TableSortLabel
                      active={column.active}
                      direction={column.order}
                      onClick={this.onSortClick(index)}
                    >
                      {column.name}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.rows.map(row => (
                <TableRow key={row.id}>
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
      );
    }
  }
);

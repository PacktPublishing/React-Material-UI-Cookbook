import React, { Component, Fragment } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import SearchIcon from '@material-ui/icons/Search';

const fetchData = () =>
  new Promise(resolve => {
    const items = [
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
    ];

    setTimeout(() => resolve(items), 1000);
  });

const styles = theme => ({
  root: { margin: theme.spacing.unit * 2, textAlign: 'center' },
  progress: { margin: theme.spacing.unit * 2 },
  search: { marginLeft: theme.spacing.unit * 2 }
});

const MaybeLoading = withStyles(styles)(
  ({ classes, loading }) =>
    loading ? <CircularProgress className={classes.progress} /> : null
);

export default withStyles(styles)(
  class extends Component {
    state = { search: '', items: [], loading: true };

    componentDidMount() {
      fetchData().then(items =>
        this.setState({ items, loading: false })
      );
    }

    onSearchChange = e => this.setState({ search: e.target.value });

    render() {
      const { classes } = this.props;

      return (
        <Fragment>
          <TextField
            value={this.state.search}
            onChange={this.onSearchChange}
            className={classes.search}
            id="input-search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          />
          <Paper className={classes.root}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Created</TableCell>
                  <TableCell numeric>High</TableCell>
                  <TableCell numeric>Low</TableCell>
                  <TableCell numeric>Average</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.items
                  .filter(
                    item =>
                      !this.state.search ||
                      item.name.includes(this.state.search)
                  )
                  .map(item => {
                    return (
                      <TableRow key={item.id}>
                        <TableCell component="th" scope="row">
                          {item.name}
                        </TableCell>
                        <TableCell>
                          {item.created.toLocaleString()}
                        </TableCell>
                        <TableCell numeric>{item.high}</TableCell>
                        <TableCell numeric>{item.low}</TableCell>
                        <TableCell numeric>{item.average}</TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
            <MaybeLoading loading={this.state.loading} />
          </Paper>
        </Fragment>
      );
    }
  }
);

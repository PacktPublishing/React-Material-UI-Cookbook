import React, { Fragment, Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => ({
  appBar: {
    position: 'relative'
  },
  flex: {
    flex: 1
  }
});

const Transition = props => <Slide direction="up" {...props} />;

const id = (function*() {
  let id = 0;
  while (true) {
    id += 1;
    yield id;
  }
})();

const rowData = (name, calories, fat, carbs, protein) => ({
  id: id.next().value,
  name,
  calories,
  fat,
  carbs,
  protein
});

const rows = [
  rowData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  rowData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  rowData('Eclair', 262, 16.0, 24, 6.0),
  rowData('Cupcake', 305, 3.7, 67, 4.3),
  rowData('Gingerbread', 356, 16.0, 49, 3.9)
];

export default withStyles(styles)(
  class FullScreenDialogs extends Component {
    state = { open: false };

    handleClickOpen = () => {
      this.setState({ open: true });
    };

    handleClose = () => {
      this.setState({ open: false });
    };

    render() {
      const { classes } = this.props;

      return (
        <Fragment>
          <Button
            variant="outlined"
            color="primary"
            onClick={this.handleClickOpen}
          >
            Export Data
          </Button>
          <Dialog
            fullScreen
            open={this.state.open}
            onClose={this.handleClose}
            TransitionComponent={Transition}
          >
            <AppBar className={classes.appBar}>
              <Toolbar>
                <IconButton
                  color="inherit"
                  onClick={this.handleClose}
                  aria-label="Close"
                >
                  <CloseIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  color="inherit"
                  className={classes.flex}
                >
                  Export Data
                </Typography>
                <Button color="inherit" onClick={this.handleClose}>
                  Export
                </Button>
              </Toolbar>
            </AppBar>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat (g)</TableCell>
                  <TableCell align="right">Carbs (g)</TableCell>
                  <TableCell align="right">Protein (g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">
                      {row.calories}
                    </TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Dialog>
        </Fragment>
      );
    }
  }
);

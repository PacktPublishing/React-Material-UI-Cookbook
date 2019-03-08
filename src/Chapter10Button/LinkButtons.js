import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  content: {
    margin: theme.spacing(2)
  }
});

const NavButton = ({ color, ...props }) => (
  <Switch>
    <Route
      exact
      path={props.to}
      render={() => (
        <Button color="primary" component={Link} {...props} />
      )}
    />
    <Route
      path="/"
      render={() => <Button component={Link} {...props} />}
    />
  </Switch>
);

const LinkButtons = withStyles(styles)(({ classes }) => (
  <Grid container direction="column" className={classes.container}>
    <Grid item>
      <Grid container>
        <Grid item>
          <NavButton to="/">Home</NavButton>
        </Grid>
        <Grid item>
          <NavButton to="/page1">Page 1</NavButton>
        </Grid>
        <Grid item>
          <NavButton to="/page2">Page 2</NavButton>
        </Grid>
      </Grid>
    </Grid>
    <Grid item className={classes.content}>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Typography>home content</Typography>}
        />
        <Route
          path="/page1"
          render={() => <Typography>page 1 content</Typography>}
        />
        <Route
          path="/page2"
          render={() => <Typography>page 2 content</Typography>}
        />
      </Switch>
    </Grid>
  </Grid>
));

export default LinkButtons;

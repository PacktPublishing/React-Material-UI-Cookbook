import React, { Fragment, Component, Children } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  tabContent: {
    padding: theme.spacing.unit * 2
  }
});

class TabContainer extends Component {
  static defaultProps = {
    value: 0
  };

  static getDerivedStateFromProps(props, state) {
    return {
      ...state,
      value: state.value === undefined ? props.value : state.value
    };
  }

  state = {};

  onChange = (e, value) => {
    this.setState({ value });
  };

  render() {
    const { children } = this.props;

    return (
      <Fragment>
        <Tabs value={this.state.value} onChange={this.onChange}>
          {Children.map(children, child => (
            <Tab label={child.props.label} />
          ))}
        </Tabs>
        {Children.map(
          children,
          (child, index) =>
            index === this.state.value ? child : null
        )}
      </Fragment>
    );
  }
}

const TabContent = withStyles(styles)(({ classes, children }) => (
  <Typography component="div" className={classes.tabContent}>
    {children}
  </Typography>
));

export default withStyles(styles)(({ classes }) => (
  <div className={classes.root}>
    <TabContainer value={1}>
      <TabContent label="Item One">Item One Content</TabContent>
      <TabContent label="Item Two">Item Two Content</TabContent>
      <TabContent label="Item Three">Item Three Content</TabContent>
    </TabContainer>
  </div>
));

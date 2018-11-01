import React, { Component, Fragment } from 'react';

import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const MaybeProgress = ({ loading }) =>
  loading ? <LinearProgress /> : null;

const styles = theme => ({
  panelDetails: { flexDirection: 'column' }
});

const fetchPanelContent = index =>
  new Promise(resolve =>
    setTimeout(
      () =>
        resolve(
          [
            'First panel content...',
            'Second panel content...',
            'Third panel content...',
            'Fourth panel content...'
          ][index]
        ),
      1000
    )
  );

export default withStyles(styles)(
  class extends Component {
    state = {
      panels: [
        { title: 'First Panel Title' },
        { title: 'Second Panel Title' },
        { title: 'Third Panel Title' },
        { title: 'Fourth Panel Title' }
      ]
    };

    onChange = index => (e, expanded) => {
      if (!this.state.panels[index].content && expanded) {
        fetchPanelContent(index).then(content =>
          this.setState(state => {
            const panels = [...state.panels];
            panels[index] = { ...panels[index], content };
            return { panels };
          })
        );
      }
    };

    render() {
      const { classes } = this.props;

      return (
        <Fragment>
          {this.state.panels.map((panel, index) => (
            <ExpansionPanel
              key={index}
              onChange={this.onChange(index)}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{panel.title}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.panelDetails}>
                <MaybeProgress loading={!panel.content} />
                <Typography>{panel.content}</Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          ))}
        </Fragment>
      );
    }
  }
);

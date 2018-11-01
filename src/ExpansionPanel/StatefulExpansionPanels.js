import React, { Component, Fragment } from 'react';

import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({});

export default withStyles(styles)(
  class extends Component {
    state = {
      expanded: 0,
      panels: [
        {
          title: 'First Panel Title',
          content: 'First panel content...'
        },
        {
          title: 'Second Panel Title',
          content: 'Second panel content...'
        },
        {
          title: 'Third Panel Title',
          content: 'Third panel content...'
        },
        {
          title: 'Fourth Panel Title',
          content: 'Fourth panel content...'
        }
      ]
    };

    onChange = expanded => () => this.setState({ expanded });

    render() {
      return (
        <Fragment>
          {this.state.panels
            .filter(panel => !panel.hidden)
            .map((panel, index) => (
              <ExpansionPanel
                expanded={index === this.state.expanded}
                disabled={panel.disabled}
                onChange={this.onChange(index)}
              >
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography>{panel.title}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>{panel.content}</Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            ))}
        </Fragment>
      );
    }
  }
);

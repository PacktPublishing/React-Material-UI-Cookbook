import React, { Fragment, Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Car from '@material-ui/icons/DirectionsCar';
import CarOutlined from '@material-ui/icons/DirectionsCarOutlined';
import Bus from '@material-ui/icons/DirectionsBus';
import BusOutlined from '@material-ui/icons/DirectionsBusOutlined';
import Train from '@material-ui/icons/Train';
import TrainOutlined from '@material-ui/icons/TrainOutlined';

const styles = theme => ({});

export default withStyles(styles)(
  class RadioButtonTypes extends Component {
    state = { value: 'train' };

    onChange = event => {
      this.setState({ value: event.target.value });
    };

    render() {
      return (
        <FormControl component="fieldset">
          <FormLabel component="legend">Travel Mode</FormLabel>
          <RadioGroup
            name="travel"
            value={this.state.value}
            onChange={this.onChange}
            row
          >
            <FormControlLabel
              value="car"
              control={
                <Radio
                  color="primary"
                  icon={<CarOutlined />}
                  checkedIcon={<Car />}
                />
              }
              label="Car"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="bus"
              control={
                <Radio
                  color="primary"
                  icon={<BusOutlined />}
                  checkedIcon={<Bus />}
                />
              }
              label="Bus"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="train"
              control={
                <Radio
                  color="primary"
                  icon={<TrainOutlined />}
                  checkedIcon={<Train />}
                />
              }
              label="Train"
              labelPlacement="bottom"
            />
          </RadioGroup>
        </FormControl>
      );
    }
  }
);

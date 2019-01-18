import React, { Fragment, Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  control: { margin: theme.spacing.unit * 2, minWidth: 200 }
});

export default withStyles(styles)(
  class ControllingSelectsWithState extends Component {
    state = {
      categories: [
        { label: 'Category 1', id: 1 },
        { label: 'Category 2', id: 2 },
        { label: 'Category 3', id: 3 }
      ],
      products: [
        { label: 'Product 1', id: 1, category: 1 },
        { label: 'Product 2', id: 2, category: 1 },
        { label: 'Product 3', id: 3, category: 1 },
        { label: 'Product 4', id: 4, category: 2 },
        { label: 'Product 5', id: 5, category: 2 },
        { label: 'Product 6', id: 6, category: 2 },
        { label: 'Product 7', id: 7, category: 3 },
        { label: 'Product 8', id: 8, category: 3 },
        { label: 'Product 9', id: 9, category: 3 }
      ]
    };

    onChange = event => {
      this.setState(state => {
        const collection = state[event.target.name].map(item => ({
          ...item,
          selected: false
        }));
        const index = collection.findIndex(
          item => item.id === event.target.value
        );

        collection[index] = { ...collection[index], selected: true };

        return { ...state, [event.target.name]: collection };
      });
    };

    render() {
      const { classes } = this.props;
      const category = this.state.categories.find(
        category => category.selected
      ) || { id: '' };
      const product = this.state.products.find(
        product => product.selected
      ) || { id: '' };

      return (
        <Fragment>
          <FormControl className={classes.control}>
            <InputLabel htmlFor="categories">Category</InputLabel>
            <Select
              value={category.id}
              onChange={this.onChange}
              inputProps={{
                name: 'categories',
                id: 'categories'
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.state.categories.map(category => (
                <MenuItem key={category.id} value={category.id}>
                  {category.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl
            className={classes.control}
            disabled={category.id === ''}
          >
            <InputLabel htmlFor="Products">Product</InputLabel>
            <Select
              value={product.id}
              onChange={this.onChange}
              inputProps={{
                name: 'products',
                id: 'values'
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.state.products
                .filter(product => product.category === category.id)
                .map(product => (
                  <MenuItem key={product.id} value={product.id}>
                    {product.label}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Fragment>
      );
    }
  }
);

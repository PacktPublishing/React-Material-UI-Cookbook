import React, { Fragment, useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  control: { margin: theme.spacing(2), minWidth: 200 }
}));

export default function ControllingSelectsWithState() {
  const classes = useStyles();

  const [categories, setCategories] = useState([
    { label: 'Category 1', id: 1 },
    { label: 'Category 2', id: 2 },
    { label: 'Category 3', id: 3 }
  ]);

  const [products, setProducts] = useState([
    { label: 'Product 1', id: 1, category: 1 },
    { label: 'Product 2', id: 2, category: 1 },
    { label: 'Product 3', id: 3, category: 1 },
    { label: 'Product 4', id: 4, category: 2 },
    { label: 'Product 5', id: 5, category: 2 },
    { label: 'Product 6', id: 6, category: 2 },
    { label: 'Product 7', id: 7, category: 3 },
    { label: 'Product 8', id: 8, category: 3 },
    { label: 'Product 9', id: 9, category: 3 }
  ]);

  const setters = {
    categories: setCategories,
    products: setProducts
  };
  const collections = { categories, products };

  const onChange = e => {
    const setCollection = setters[e.target.name];
    const collection = collections[e.target.name].map(item => ({
      ...item,
      selected: false
    }));
    const index = collection.findIndex(
      item => item.id === e.target.value
    );

    collection[index] = { ...collection[index], selected: true };
    setCollection(collection);
  };

  const category = categories.find(category => category.selected) || {
    id: ''
  };
  const product = products.find(product => product.selected) || {
    id: ''
  };

  return (
    <Fragment>
      <FormControl className={classes.control}>
        <InputLabel htmlFor="categories">Category</InputLabel>
        <Select
          value={category.id}
          onChange={onChange}
          inputProps={{
            name: 'categories',
            id: 'categories'
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {categories.map(category => (
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
          onChange={onChange}
          inputProps={{
            name: 'products',
            id: 'values'
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {products
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

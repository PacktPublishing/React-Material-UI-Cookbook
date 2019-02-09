import React, { Fragment } from 'react';

import Typography from '@material-ui/core/Typography';

export default ({ color }) => (
  <Fragment>
    <Typography variant="display1" color={color}>
      display1 variant
    </Typography>
    <Typography variant="display2" color={color}>
      display2 variant
    </Typography>
    <Typography variant="display3" color={color}>
      display3 variant
    </Typography>
    <Typography variant="display4" color={color}>
      display4 variant
    </Typography>
    <Typography variant="h1" color={color}>
      h1 variant
    </Typography>
    <Typography variant="h2" color={color}>
      h2 variant
    </Typography>
    <Typography variant="h3" color={color}>
      h3 variant
    </Typography>
    <Typography variant="h4" color={color}>
      h4 variant
    </Typography>
    <Typography variant="h5" color={color}>
      h5 variant
    </Typography>
    <Typography variant="h6" color={color}>
      h6 variant
    </Typography>
    <Typography variant="subtitle1" color={color}>
      subtitle1 variant
    </Typography>
    <Typography variant="subtitle2" color={color}>
      subtitle2 variant
    </Typography>
    <Typography variant="body1" color={color}>
      body1 variant
    </Typography>
    <Typography variant="body2" color={color}>
      body2 variant
    </Typography>
    <Typography variant="headline" color={color}>
      headline variant
    </Typography>
    <Typography variant="title" color={color}>
      title variant
    </Typography>
    <Typography variant="subheading" color={color}>
      subheading variant
    </Typography>
    <Typography variant="caption" color={color}>
      caption variant
    </Typography>
    <Typography variant="button" color={color}>
      button variant
    </Typography>
    <Typography variant="overline" color={color}>
      overline variant
    </Typography>
  </Fragment>
);

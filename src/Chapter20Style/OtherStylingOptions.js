import React, { Fragment } from 'react';

import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

import styles from './OtherStylingOptions.module.css';

const MyStyledButton = styled(Button)({
  margin: 16,
  paddingTop: 16,
  paddingBottom: 16
});

const OtherStylingOptions = () => (
  <Fragment>
    <Button style={{ margin: 16 }}>My Default Button</Button>
    <MyStyledButton variant="contained">
      My Contained Button
    </MyStyledButton>
    <Button
      className={styles.primaryContained}
      variant="contained"
      color="primary"
    >
      My Contained Primary Button
    </Button>
  </Fragment>
);

export default OtherStylingOptions;

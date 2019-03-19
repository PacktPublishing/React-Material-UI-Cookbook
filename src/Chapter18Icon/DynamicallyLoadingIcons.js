import React, { lazy, Suspense, Fragment } from 'react';

import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const categories = {
  Action: [
    lazy(() => import('@material-ui/icons/ThreeDRotation')),
    lazy(() => import('@material-ui/icons/Accessibility')),
    lazy(() => import('@material-ui/icons/AccessibilityNew')),
    lazy(() => import('@material-ui/icons/Accessible')),
    lazy(() => import('@material-ui/icons/AccessibleForward')),
    lazy(() => import('@material-ui/icons/AccountBalance')),
    lazy(() => import('@material-ui/icons/AccountBalanceWallet')),
    lazy(() => import('@material-ui/icons/AccountBox')),
    lazy(() => import('@material-ui/icons/AccountCircle'))
  ],
  Alert: [
    lazy(() => import('@material-ui/icons/AddAlert')),
    lazy(() => import('@material-ui/icons/Error')),
    lazy(() => import('@material-ui/icons/ErrorOutline')),
    lazy(() => import('@material-ui/icons/NotificationImportant')),
    lazy(() => import('@material-ui/icons/Warning'))
  ],
  Av: [
    lazy(() => import('@material-ui/icons/FourK')),
    lazy(() => import('@material-ui/icons/AddToQueue')),
    lazy(() => import('@material-ui/icons/Airplay')),
    lazy(() => import('@material-ui/icons/Album')),
    lazy(() => import('@material-ui/icons/ArtTrack')),
    lazy(() => import('@material-ui/icons/AvTimer')),
    lazy(() => import('@material-ui/icons/BrandingWatermark')),
    lazy(() => import('@material-ui/icons/CallToAction')),
    lazy(() => import('@material-ui/icons/ClosedCaption'))
  ],
  Communication: [
    lazy(() => import('@material-ui/icons/AlternateEmail')),
    lazy(() => import('@material-ui/icons/Business')),
    lazy(() => import('@material-ui/icons/Call')),
    lazy(() => import('@material-ui/icons/CallEnd')),
    lazy(() => import('@material-ui/icons/CallMade')),
    lazy(() => import('@material-ui/icons/CallMerge')),
    lazy(() => import('@material-ui/icons/CallMissed')),
    lazy(() => import('@material-ui/icons/CallMissedOutgoing')),
    lazy(() => import('@material-ui/icons/CallReceived'))
  ]
};

const styles = theme => ({
  icon: { margin: theme.spacing(3) }
});

const DynamicallyLoadingIcons = withStyles(styles)(
  ({ category, classes }) => (
    <Suspense fallback={<CircularProgress />}>
      {categories[category].map((Icon, index) => (
        <Icon key={index} className={classes.icon} />
      ))}
    </Suspense>
  )
);

export default DynamicallyLoadingIcons;

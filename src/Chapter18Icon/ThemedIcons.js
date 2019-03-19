import React, { lazy, Suspense, Fragment } from 'react';

import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const themes = {
  Filled: [
    lazy(() => import('@material-ui/icons/Attachment')),
    lazy(() => import('@material-ui/icons/Cloud')),
    lazy(() => import('@material-ui/icons/CloudCircle')),
    lazy(() => import('@material-ui/icons/CloudDone')),
    lazy(() => import('@material-ui/icons/CloudDownload')),
    lazy(() => import('@material-ui/icons/CloudOff')),
    lazy(() => import('@material-ui/icons/CloudQueue')),
    lazy(() => import('@material-ui/icons/CloudUpload')),
    lazy(() => import('@material-ui/icons/CreateNewFolder')),
    lazy(() => import('@material-ui/icons/Folder')),
    lazy(() => import('@material-ui/icons/FolderOpen')),
    lazy(() => import('@material-ui/icons/FolderShared'))
  ],
  Outlined: [
    lazy(() => import('@material-ui/icons/AttachmentOutlined')),
    lazy(() => import('@material-ui/icons/CloudOutlined')),
    lazy(() => import('@material-ui/icons/CloudCircleOutlined')),
    lazy(() => import('@material-ui/icons/CloudDoneOutlined')),
    lazy(() => import('@material-ui/icons/CloudDownloadOutlined')),
    lazy(() => import('@material-ui/icons/CloudOffOutlined')),
    lazy(() => import('@material-ui/icons/CloudQueueOutlined')),
    lazy(() => import('@material-ui/icons/CloudUploadOutlined')),
    lazy(() => import('@material-ui/icons/CreateNewFolderOutlined')),
    lazy(() => import('@material-ui/icons/FolderOutlined')),
    lazy(() => import('@material-ui/icons/FolderOpenOutlined')),
    lazy(() => import('@material-ui/icons/FolderSharedOutlined'))
  ],
  Rounded: [
    lazy(() => import('@material-ui/icons/AttachmentRounded')),
    lazy(() => import('@material-ui/icons/CloudRounded')),
    lazy(() => import('@material-ui/icons/CloudCircleRounded')),
    lazy(() => import('@material-ui/icons/CloudDoneRounded')),
    lazy(() => import('@material-ui/icons/CloudDownloadRounded')),
    lazy(() => import('@material-ui/icons/CloudOffRounded')),
    lazy(() => import('@material-ui/icons/CloudQueueRounded')),
    lazy(() => import('@material-ui/icons/CloudUploadRounded')),
    lazy(() => import('@material-ui/icons/CreateNewFolderRounded')),
    lazy(() => import('@material-ui/icons/FolderRounded')),
    lazy(() => import('@material-ui/icons/FolderOpenRounded')),
    lazy(() => import('@material-ui/icons/FolderSharedRounded'))
  ],
  TwoTone: [
    lazy(() => import('@material-ui/icons/AttachmentTwoTone')),
    lazy(() => import('@material-ui/icons/CloudTwoTone')),
    lazy(() => import('@material-ui/icons/CloudCircleTwoTone')),
    lazy(() => import('@material-ui/icons/CloudDoneTwoTone')),
    lazy(() => import('@material-ui/icons/CloudDownloadTwoTone')),
    lazy(() => import('@material-ui/icons/CloudOffTwoTone')),
    lazy(() => import('@material-ui/icons/CloudQueueTwoTone')),
    lazy(() => import('@material-ui/icons/CloudUploadTwoTone')),
    lazy(() => import('@material-ui/icons/CreateNewFolderTwoTone')),
    lazy(() => import('@material-ui/icons/FolderTwoTone')),
    lazy(() => import('@material-ui/icons/FolderOpenTwoTone')),
    lazy(() => import('@material-ui/icons/FolderSharedTwoTone'))
  ],
  Sharp: [
    lazy(() => import('@material-ui/icons/AttachmentSharp')),
    lazy(() => import('@material-ui/icons/CloudSharp')),
    lazy(() => import('@material-ui/icons/CloudCircleSharp')),
    lazy(() => import('@material-ui/icons/CloudDoneSharp')),
    lazy(() => import('@material-ui/icons/CloudDownloadSharp')),
    lazy(() => import('@material-ui/icons/CloudOffSharp')),
    lazy(() => import('@material-ui/icons/CloudQueueSharp')),
    lazy(() => import('@material-ui/icons/CloudUploadSharp')),
    lazy(() => import('@material-ui/icons/CreateNewFolderSharp')),
    lazy(() => import('@material-ui/icons/FolderSharp')),
    lazy(() => import('@material-ui/icons/FolderOpenSharp')),
    lazy(() => import('@material-ui/icons/FolderSharedSharp'))
  ]
};

const styles = theme => ({
  icon: { margin: theme.spacing(3) }
});

const ThemedIcons = withStyles(styles)(({ theme, classes }) => (
  <Suspense fallback={<CircularProgress />}>
    {themes[theme].map((Icon, index) => (
      <Icon fontSize="large" key={index} className={classes.icon} />
    ))}
  </Suspense>
));

export default ThemedIcons;

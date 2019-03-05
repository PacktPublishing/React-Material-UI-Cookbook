import React, { Fragment, useState } from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import CloseIcon from '@material-ui/icons/Close';

const withMessage = Wrapped =>
  function WithMessage(props) {
    const [queue, setQueue] = useState([]);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');

    const sendMessage = msg => {
      const newQueue = [...queue, msg];
      if (newQueue.length === 1) {
        setOpen(true);
        setMessage(msg);
      }
    };

    const onClose = () => {
      setOpen(false);
    };

    const onExit = () => {
      const [msg, ...rest] = queue;

      if (msg) {
        setQueue(rest);
        setOpen(true);
        setMessage(msg);
      }
    };

    return (
      <Fragment>
        <Wrapped message={sendMessage} {...props} />
        <Snackbar
          key={message}
          open={open}
          message={message}
          autoHideDuration={4000}
          onClose={onClose}
          onExit={onExit}
        />
      </Fragment>
    );
  };

const QueuingSnackbars = withMessage(({ message }) => {
  const [counter, setCounter] = useState(0);

  const onClick = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
    message(`Message ${newCounter}`);
  };

  return <Button onClick={onClick}>Message</Button>;
});

export default QueuingSnackbars;

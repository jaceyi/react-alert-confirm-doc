import React from 'react';
import AlertConfirm, { Button } from 'react-alert-confirm';

const Alert = () => {
  const openAlert = () => {
    AlertConfirm.alert(<span>Supports passing in a ReactNode</span>);
  };

  return (
    <div>
      <Button onClick={openAlert}>Alert</Button>
    </div>
  );
};

export default Alert;

// demo-ignore-start
Alert.title = 'Alert';
Alert.desc = (
  <span>
    Use <code>AlertConfirm.alert()</code> to show a alert modal dialog.
  </span>
);
// demo-ignore-end

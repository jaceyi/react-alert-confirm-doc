import React from 'react';
import AlertConfirm, { Button } from 'react-alert-confirm';

const Confirm = () => {
  const openConfirm = async () => {
    const [action] = await AlertConfirm('This is the confirmation popup !');
    action && console.log('ok');
  };

  return (
    <div>
      <Button styleType="primary" onClick={openConfirm}>
        Confirm
      </Button>
    </div>
  );
};

export default Confirm;

// demo-ignore-start
Confirm.title = 'Confirm';
Confirm.desc = (
  <span>
    Use <code>AlertConfirm()</code> to show a confirmation modal dialog, can used <code>async/await</code> to synchronous mode call.
  </span>
);
// demo-ignore-end

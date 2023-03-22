import React from 'react';
import AlertConfirm, { Button } from 'react-alert-confirm';

const Confirm = () => {
  const openBasic = async () => {
    const [action] = await AlertConfirm('This is a normal string.');
    action && console.log('ok');
  };
  const openComplex = async () => {
    const [action] = await AlertConfirm({
      title: 'Are you sure?',
      desc: 'This action cannot be undone.',
      okText: "Yes, I'm sure",
      cancelText: 'No'
    });
    action && console.log('ok');
  };

  return (
    <div>
      <Button onClick={openBasic}>Basic Confirm</Button>
      <Button
        styleType="primary"
        onClick={openComplex}
        style={{ marginLeft: 10 }}
      >
        Complex Confirm
      </Button>
    </div>
  );
};

export default Confirm;

// demo-ignore-start
Confirm.title = 'Confirm';
Confirm.desc = (
  <span>
    Use <code>AlertConfirm()</code> to show a confirmation modal dialog, can
    used <code>async/await</code> to synchronous mode call.
  </span>
);
// demo-ignore-end

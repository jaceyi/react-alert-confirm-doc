import React, { useState } from 'react';
import AlertConfirm, { Button } from 'react-alert-confirm';

const Basic = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <AlertConfirm
        maskClosable
        title="Do you Want to delete these items?"
        desc="Some descriptions"
        visible={visible}
        okText="Yes"
        onOk={() => {
          setVisible(false);
          AlertConfirm.alert('Click Yes');
        }}
        cancelText="No"
        onCancel={() => setVisible(false)}
      />
      <Button onClick={() => setVisible(!visible)}>Show JSX Render</Button>
    </div>
  );
};

export default Basic;

// demo-ignore-start
Basic.title = 'Basic';
Basic.desc = 'React component mode rendering.';
// demo-ignore-end

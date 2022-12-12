import React from 'react';
import AlertConfirm, { Button } from 'react-alert-confirm';

const CustomPopup = () => {
  const open = async () => {
    const [action] = await AlertConfirm({
      custom: dispatch => (
        <div className="custom-popup">
          <div>Custom popup</div>
          <div style={{ marginTop: 10 }}>
            <button onClick={() => dispatch(false)}>Close</button>
          </div>
        </div>
      )
    });
    console.log(action);
  };

  return (
    <div>
      <Button onClick={open}>Custom Popup</Button>
    </div>
  );
};

export default CustomPopup;

// demo-ignore-start
CustomPopup.title = 'Custom Popup';
CustomPopup.desc = 'Customize popup content.';
// demo-ignore-end

import React from 'react';
import AlertConfirm, { Button } from 'react-alert-confirm';

const CustomFooter = () => {
  const open = async () => {
    const [action, instance] = await AlertConfirm({
      title: 'Custom',
      desc: <span>Supports passing in a ReactNode</span>,
      footer: dispatch => {
        return (
          <>
            <span className="pointer" onClick={() => dispatch('cancel')}>
              Cancel
            </span>
            <Button onClick={() => dispatch('delete')} styleType="danger">
              Delete
            </Button>
          </>
        );
      },
      closeBefore: async action => {
        if (action === 'delete') {
          const [isOK] = await AlertConfirm({
            title: (
              <div>
                <span className="red">Delete error !</span>
              </div>
            ),
            desc: (
              <em className="pointer" onClick={() => AlertConfirm.closeAll()}>
                Click here to close all popup
              </em>
            )
          });
          if (!isOK) return Promise.reject();
        }
      }
    });
    console.log(action, instance);
  };

  return (
    <div>
      <Button styleType="primary" onClick={open}>
        Custom Footer
      </Button>
    </div>
  );
};

export default CustomFooter;

// demo-ignore-start
CustomFooter.title = 'Custom Footer';
CustomFooter.desc = 'Customize footer content.';
// demo-ignore-end

import React from 'react';
import AlertConfirm, { Button } from 'react-alert-confirm';

const ChangeLang = () => {
  const changeLang = async () => {
    if (AlertConfirm.config().lang === 'zh') {
      const [action] = await AlertConfirm('Change language to English');
      if (action) {
        AlertConfirm.config({
          lang: 'en'
        });
        AlertConfirm.alert('Config changed successfully!');
      }
    } else {
      const [action] = await AlertConfirm('Change language to 中文');
      if (action) {
        AlertConfirm.config({
          lang: 'zh'
        });
        AlertConfirm.alert('配置更新成功！');
      }
    }
  };

  const openConfirm = async () => {
    const [action] = await AlertConfirm('This is the confirmation popup !');
    action && console.log('ok');
  };

  return (
    <div>
      <Button onClick={changeLang}>Change language</Button>
      <Button
        styleType="primary"
        style={{ marginLeft: 10 }}
        onClick={openConfirm}
      >
        Confirm
      </Button>
    </div>
  );
};

export default ChangeLang;

// demo-ignore-start
ChangeLang.title = 'Change language';
ChangeLang.desc = (
  <span>
    Change language, use <code>okText/cancelText</code> customize button text.
  </span>
);
// demo-ignore-end

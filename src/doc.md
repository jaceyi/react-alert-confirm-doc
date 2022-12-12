## Installing

```bash
yarn add react-alert-confirm
# or
npm install react-alert-confirm --save
```

## Usage

```typescript
import 'react-alert-confirm/lib/style.css';
import AlertConfirm from 'react-alert-confirm';
```

## Imperative API

函数调用传参 API

| Property      | Description                                                                         | Type                         | Default               |
| ------------- | ----------------------------------------------------------------------------------- | ---------------------------- | --------------------- |
| type          | AlertConfirm type                                                                   | `'confirm'` &#124; `'alert'` | `'confirm'`           |
| zIndex        | The `z-index` of the AlertConfirm                                                   | `number`                     | `1000`                |
| style         | Style of floating layer                                                             | `CSSProperties`              | -                     |
| className     | The class name of the container of the floating layer                               | `string`                     | -                     |
| maskStyle     | Style for mask element                                                              | `CSSProperties`              | -                     |
| maskClassName | The class name of the container of mask                                             | `string`                     | -                     |
| maskClosable  | Whether to close the modal dialog when the mask is clicked                          | `boolean`                    | `false`               |
| custom        | Customize floating layer content                                                    | [Render Type](#types)        | -                     |
| title         | The AlertConfirm dialog's title                                                     | [Render Type](#types)        | -                     |
| desc          | The AlertConfirm dialog's description                                               | [Render Type](#types)        | -                     |
| footer        | The AlertConfirm dialog's footer, set `null` to not display                         | [Render Type](#types)        | OK and Cancel buttons |
| lang          | Languages                                                                           | `'zh'` &#124; `'en'`         | `'en'`                |
| okText        | Text of the OK button                                                               | `ReactNode`                  | `'OK'`                |
| cancelText    | Text of the Cancel button                                                           | `ReactNode`                  | `'Cancel'`            |
| onOk          | Specify a function that will be called when a user clicks mask or Cancel button     | `function(e)`                | -                     |
| onCancel      | Specify a function that will be called when a user clicks the OK button             | `function(e)`                | -                     |
| closeBefore   | Specify a function that will be called when dispatch action [Usage](#custom-footer) | [CloseBefore Type](#types)   | -                     |
| closeAfter    | Specify a function that will be called when modal is closed completely              | `function(e)`                | -                     |

## Render JSX Props

Includes [Imperative Options](#imperative-api)

当组件使用时传参比 [Imperative API](#imperative-api) 多了下面几个选项

| Property | Description                                | Type                    | Default   |
| -------- | ------------------------------------------ | ----------------------- | --------- |
| visible  | Whether the AlertConfirm is visible or not | `boolean`               | `'false'` |
| dispatch | Events dispatch                            | [Dispatch Type](#types) | -         |

## Advanced

### Custom Footer

**closeBefore**: Specify a function that will be called when dispatch action, You can also just return a promise and when the promise is resolved, the modal dialog will also be closed.

**closeBefore**: 对话框触发 `Action` 之后调用，可以在里面判断 `Action` 可以使用 Promise 做异步逻辑，返回 `Promise.resolve()` 时将关闭对话框。

```typescript jsx
import AlertConfirm, { Button } from 'react-alert-confirm';

AlertConfirm({
  title: 'Confirm',
  desc: 'This action will delete the product!',
  footer(dispatch) {
    return (
      <>
        <span onClick={() => dispatch('cancel')}>
          Cancel
        </span>
        <Button onClick={() => dispatch('delete')} styleType="danger">
          Delete
        </Button>
      </>
    );
  },
  async closeBefore(action) {
    if (action === 'delete') {
      await deleteProduct(); // some async events ...;
      // promise is resolved close
    }
    // auto close
  }
});
```

### Return Values

```typescript jsx
const [action, instance] = await AlertConfirm('Alert info');
```

### closeAll

Close all `AlertConfirm` dialog

```typescript jsx
import AlertConfirm from 'react-alert-confirm';

AlertConfirm.closeAll();
```

### Global config

The global configuration optional parameters are the same as those of [Imperative API](#imperative-api)

```typescript jsx
import AlertConfirm from 'react-alert-confirm';

// update config
AlertConfirm.config({
  lang: 'zh', // language
  zIndex: 1024
});

// get config
AlertConfirm.config();
```

## Button

The Button also contains all attributes of the `ButtonHTMLAttributes`

相比 HTML `button` 多了下面一个参数用来预设按钮样式

| Property  | Description       | Type                                             | Default     |
| --------- | ----------------- | ------------------------------------------------ | ----------- |
| styleType | Button style type | `'default'` &#124; `'primary'` &#124; `'danger'` | `'default'` |

## Types

```typescript
type Action = boolean | string | number;
type Dispatch = (action: Action) => void;
type Render = ReactNode | ((dispatch: Dispatch) => ReactNode);
type CloseBefore = (action: Action) => Promise<any> | void;
```

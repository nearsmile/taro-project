## 使用说明

```jsx
// 按需引入需要在 app.scss 中引入对应样式 checkbox.scss
import { ClCheckbox } from "mp-colorui";
```

## 一般用法

<CodeShow componentName='checkbox' />

## 参数说明

### Checkbox 参数

| 参数          | 说明                          | 类型            | 可选值                                                      | 默认值       |
| ------------- | ----------------------------- | --------------- | ----------------------------------------------------------- | ------------ |
| title         | _form 类型下，复选框标题设置_ | string          | -                                                           | -            |
| type          | _复选框类型选择_              | string          | _`normal`_,_`form`_                                         | _`normal`_   |
| shape         | _复选框形状设置_              | string          | _`normal`_,_`round`_                                        | _`normal`_   |
| color         | _复选框选中色设置_            | string          | 参考文档 [默认色-标准色](/mp-colorui-doc/home/color#标准色) | _`green`_    |
| direction     | _复选框排列类型_              | string          | _`vertical`_,_`horizontal`_                                 | _`vertical`_ |
| checkboxGroup | _复选框每一项设置_            | checkboxGroup[] | [详情](/mp-colorui-doc/form/checkbox#checkboxgroup)         | []           |

### checkboxGroup

| 参数     | 说明                                        | 类型    | 可选值             | 默认值    |
| -------- | ------------------------------------------- | ------- | ------------------ | --------- |
| checked  | _是否选中_                                  | boolean | _`true`_,_`false`_ | _`false`_ |
| key      | _复选框的 key 设置，显示于复选框外_         | string  | -                  | -         |
| value    | _复选框的 value 设置，该参数为选中时的参数_ | string  | -                  | -         |
| disabled | _禁用_                                      | boolean | -                  | `false`   |

### Checkbox 事件

| 事件名称 | 说明             | 参数返回 |
| -------- | ---------------- | -------- |
| onChange | _选择改变时触发_ | value[]  |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/package/formPackage/checkbox/index" />

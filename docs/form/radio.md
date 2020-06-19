## 使用说明

```jsx
// 按需引入需要在 app.scss 中引入对应样式 radio.scss
import { ClRadio } from "mp-colorui";
```

## 一般用法

<CodeShow componentName='radio' />

## 参数说明

### Radio 参数

| 参数         | 说明                    | 类型         | 可选值                                                      | 默认值       |
| ------------ | ----------------------- | ------------ | ----------------------------------------------------------- | ------------ |
| type         | _单选框类型_            | string       | _`normal`_,_`form`_,_`list`_                                | _`normal`_   |
| direction    | _单选框方向_            | string       | _`vertical`_,_`horizontal`_                                 | _`vertical`_ |
| shape        | _单选框形状_            | string       | _`normal`_,_`radio`_                                        | _`normal`_   |
| title        | _type 为 form 时的标题_ | string       | -                                                           | -            |
| color        | _选中颜色_              | string       | 参考文档 [默认色-标准色](/mp-colorui-doc/home/color#标准色) | _`green`_    |
| checkedValue | 选中的 Value 值         | string       | -                                                           | -            |
| radioGroup   | _单选框组_              | radioGroup[] | [详情](/mp-colorui-doc/form/radio#radiogroup)               | []           |
| disabled     | _禁用_                  | boolean      | -                                                           | `false`      |

### radioGroup

| 参数  | 说明                 | 类型   | 可选值 | 默认值 |
| ----- | -------------------- | ------ | ------ | ------ |
| key   | _选项框的显示标题_   | string | -      | -      |
| value | _选中的时的传递的值_ | string | -      | -      |

### Radio 事件

| 事件名称 | 说明               | 参数返回 |
| -------- | ------------------ | -------- |
| onChange | _选项发生改变事件_ | value    |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/package/formPackage/radio/index" />

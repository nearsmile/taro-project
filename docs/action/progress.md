## 使用说明

```jsx
// 按需引入需要在 app.scss 中引入对应样式 progress.scss
import { ClProgress } from "mp-colorui";
```

## 一般用法

<CodeShow componentName='progress' />

## 参数说明

### Progress 参数

| 参数      | 说明                             | 类型    | 可选值                                        | 默认值     |
| --------- | -------------------------------- | ------- | --------------------------------------------- | ---------- |
| shape     | _进度条形状_                     | string  | _`normal`_,_`radius`_,_`round`_               | _`normal`_ |
| bgColor   | _进度条背景色_                   | string  | 参考文档 [默认色](/mp-colorui-doc/home/color) | _`blue`_   |
| size      | _进度条大小设置_                 | string  | _`normal`_,_`small`_,_`xsmall`_               | _`normal`_ |
| stripe    | _进度条条纹（渐变色无条纹效果）_ | string  | _`true`_,_`false`_                            | _`false`_  |
| animation | _进度条动画_                     | boolean | _`true`_,_`false`_                            | _`false`_  |
| percent   | _进度条百分比_                   | number  | 0-100                                         | 0          |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/package/actionPackage/progress/index" />

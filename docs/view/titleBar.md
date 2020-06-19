## 使用说明

```jsx
// 按需引入需要在 app.scss 中引入对应样式 titleBar.scss
import { ClTitleBar } from "mp-colorui";
```

## 一般用法

<CodeShow componentName='titleBar' />

## 参数说明

### TitleBar 参数

| 参数          | 说明                                     | 类型    | 可选值                                                         | 默认值           |
| ------------- | ---------------------------------------- | ------- | -------------------------------------------------------------- | ---------------- |
| bgColor       | _标题栏背景色_                           | string  | 参考文档 [默认色](/mp-colorui-doc/home/color)                  | _`white`_        |
| textColor     | _文字颜色_                               | string  | 参考文档 [默认色-标准色](/mp-colorui-doc/home/color#标准色)    | _`green`_        |
| type          | _子标题类型_                             | string  | _`border-title`_,_`sub-title`_,_`icon`_                        | _`border-title`_ |
| subTitle      | _子标题，仅 type 为 sub-title 时设置_    | string  | -                                                              | -                |
| subTitleColor | _子标题颜色_                             | string  | 参考文档 [默认色-标准色](/mp-colorui-doc/home/color#标准色)    |                  |
| borderColor   | _子边线，仅 type 为 border-title 时设置_ | string  | 参考文档 [默认色](/mp-colorui-doc/home/color)                  | _`green`_        |
| borderLong    | _子边线长度_                             | number  | -                                                              | 20               |
| icon          | _仅 type 为 icon 时设置，图标_           | string  | 参考文档 [Icon-_iconName_](/mp-colorui-doc/base/icon#iconname) | -                |
| iconColor     | _图标颜色_                               | string  | 参考文档 [Icon-_iconName_](/mp-colorui-doc/base/icon#iconname) | _`green`_        |
| title         | _标题_                                   | string  | -                                                              | -                |
| renderRight   | _标题栏右侧自定义渲染_                   | Element | -                                                              | -                |

<FloatPhone url="https://yinliangdream.github.io/mp-colorui-h5-demo/#/package/viewPackage/titleBar/index" />

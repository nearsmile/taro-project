## 使用说明

```jsx
// 按需引入需要在 app.scss 中引入对应样式 input.scss
import { ClInput } from "mp-colorui";
```

## 一般用法

<CodeShow componentName='input' />

## 参数说明

### Input 参数

| 参数              | 说明                                                                                                          | 类型            | 可选值                                                                 | 默认值    |
| ----------------- | ------------------------------------------------------------------------------------------------------------- | --------------- | ---------------------------------------------------------------------- | --------- |
| type              | _输入框类型_                                                                                                  | string          | _`text`_,_`number`_,_`password`_,<br />_`idcard`_,_`digit`_            | _`text`_  |
| title             | _输入框标题_                                                                                                  | string          | -                                                                      | -         |
| maxLength         | _最大输入长度_                                                                                                | number          | -                                                                      | _-1_      |
| disabled          | _禁止输入_                                                                                                    | boolean         | _`true`_,_`false`_                                                     | _`false`_ |
| adjustPosition    | _键盘弹起时，是否自动上推页面_                                                                                | boolean         | _`true`_,_`false`_                                                     | _`false`_ |
| icon              | _输入框后置 icon_                                                                                             | Object          | 参考文档 [Icon-Icon 参数](/mp-colorui-doc/base/icon#icon-参数)         | {}        |
| button            | _输入框后置按钮_                                                                                              | Object          | 参考文档 [button-Button 参数](/mp-colorui-doc/base/button#button-参数) | {}        |
| image             | _输入框后置图片 url_                                                                                          | string          | -                                                                      | -         |
| renderCustomRight | _自定义按钮右边的内容，请传入自定义内容_                                                                      | Element         | -                                                                      | -         | base: process.env.BASE_URL, |
| value             | _输入框默认值，不同于 defaultValue，该值在每次改变的时候都会进行初始化，所以要避免在 onChange 事件里修改该值_ | string          | -                                                                      | -         |
| defaultValue      | _输入框初始值，不同于 value，该值只会初始化一次_                                                              | string          | -                                                                      | -         |
| titleWidth        | _标题栏的宽度_                                                                                                | number\| string | `auto`                                                                 | `auto`    |
| align             | _文字对齐位置_                                                                                                | string          | `left`,`right`,`center`,`none`                                         | `none`    |
| pattern           | _表现形式_                                                                                                    | string          | `normal`,`material`                                                    | `normal`  |
| autoFocus         | _自动聚焦_                                                                                                    | boolean         | -                                                                      | `false`   |
| autoComplete      | _是否为自动补全模式_                                                                                          | boolean         | -                                                                      | `false`   |
| completes         | _补全的提示数组_                                                                                              | string[]        | -                                                                      | []        |
| completeLoading   | _异步等待过程中的 Loading_                                                                                    | boolean         | -                                                                      | `false`   |
| clear             | _清除按钮_                                                                                                    | boolean         | -                                                                      | `false`   |

### Input 事件

| 事件名称      | 说明                         | 参数返回   |
| ------------- | ---------------------------- | ---------- |
| onIconClick   | _输入框后置 icon 的点击事件_ | Event 对象 |
| onImageClick  | _输入框后置图片点击事件_     | Event 对象 |
| onChange      | _输入框内容改变时触发_       | value      |
| onBlur        | _失去焦点时触发_             | value      |
| onFocus       | _获得焦点时触发_             | value      |
| onTouchResult | 点击补全项时触发             | value      |

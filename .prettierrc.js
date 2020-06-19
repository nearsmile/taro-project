// 可以批量格式化项目
// package.json的scripts配置"format": "prettier --write \"src/**/*.vue\""
// 配置 editor.formatOnSave选项可以开启保存时自动format
module.exports = {
  // 字符串使用单引号
  singleQuote: true, // true表示开启强制使用单引号
  // 每行末尾自动添加分号
  semi: true, // 结尾是否使用分号
  // 箭头函数参数括号 默认avoid 可选 avoid| always
  // avoid 能省略括号的时候就省略 例如x => x
  // always 总是有括号
  arrowParens: false,
  singleQuote: true,
  // 对象中打印空格 默认true
  // true: { foo: bar }
  // false: {foo: bar}
  bracketSpacing: true,
  bracketSpacing: true,
  // tab缩进大小,默认为2
  tabWidth: 2,
  // 换行长度，默认80
  printWidth: 150,
  useTabs: false,
  htmlWhitespaceSensitivity: 'strict',
  // 设置为true时,将多行JSX元素的 > 放在最后一行的末尾，而不是单独放在下一行
  /*
    <button
       className="prettier-class"
       id="prettier-id"
       onClick={this.handleClick}>
       Click Here
    </button>
     */
  // 设置为false时
  /*
    <button
        className="prettier-class"
        id="prettier-id"
        onClick={this.handleClick}
    >
        Click Here
    </button>
     */
  jsxBracketSameLine: true,
  // 不让prettier使用tslint的代码格式进行校验
  tslintIntegration: false
}

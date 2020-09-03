### webpack
- webpack
- webpack-merge
- webpack-dev-server
- webpack-cli

### babel
- @babel/core
- @babel/preset-env
- @babel/preset-react
- babel-loader
- @babel/plugin-syntax-dynamic-import // `import()`
- @babel/plugin-proposal-class-properties // `class 的方法使用箭头函数`
- babel-plugin-import // antd 的 plugin, 用来对 ant 做 tree-shaking


### css
- less
- less-loader
- px2rem-loader
- postcss-loader
- autoprefixer
- css-loader
- style-loader / mini-css-extract-plugin.loader
- postcss-px-to-viewport
- cssnano

### img
- url-loader // base64 + file-loader
- file-loader

### 其他 loader
- raw-loader // 读取文件内容
- json5-loader // 读取 json5 格式


### react
- react
- react-dom
- react-loader
- react-router-dom
- redux
- react-redux


### plugins
- clean-webpack-plugin
- copy-webpack-plugin
- html-webpack-plugin
- webpack.dllPlugin
- webpack.dllReferencePlugin
- mini-css-extract-plugin
- friendly-errors-webpack-plugin // 需要 `devServer.quiet = true`
- speed-measure-webpack-plugin // 分析个阶段打包时间
- webpack-bundle-analyzer // 可视化打包结果
- optimize-css-assets-webpack-plugin // 压缩 css
- terser-webpack-plugin // 压缩 js

### npm script
- --config webpack.conf.js
- --colors
- --progress

### build

### server
- friendly-errors-webpack-plugin

## 项目

### css
- normalize.css // 样式初始化
- animate.css // 各种动画效果

### iconfont
- https://www.iconfont.cn/ // 阿里的 iconfont

### react UI 库
- antd
- antd-mobile

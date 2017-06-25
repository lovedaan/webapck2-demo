# 练习webpack2

webpack是当下非常流行的模块打包器，我自己看文档琢磨出一份简单的配置项，对es6转es5做编译，图片小于某大小时用base64代替，减少http请求，大图片做压缩处理，css配置less编译，对css做编译后分离处理，使用webpack-dev-server实时刷新浏览器。

## Build Setup

``` bash
# 先下载安装项目依赖包
npm/cnpm install

# 启动服务器 会自动在浏览器打开 localhost:9000
npm run dev

# 可以看一下编译打包后的代码，在dist文件夹下
npm run build



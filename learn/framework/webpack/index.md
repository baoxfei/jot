## 零碎点

1. css-loader的作用

    ```css
      .my-class {
        color: blue;
      }
      
    ```

  编译成

  ```js
    module.exports = {
    'my-class': '_2rH9g9fwI54IQUknjpj1Kr',
    };
  ```

- CSS 解析： 首先，css-loader 会解析 styles.css 文件的内容，包括其中的 CSS 规则、选择器、属性等。
- 处理依赖关系： 如果 styles.css 文件中通过 @import 等方式引入了其他 CSS 文件，css-loader 会处理这些依赖关系，确保这些引用的文件也会被一同处理。
  
- 生成 JavaScript 模块： 接下来，css-loader 将解析后的 CSS 内容转换成 JavaScript 模块的形式。这个模块通常包含一个对象，对象中的属性对应于 CSS 类名，属性值是经过一定处理的唯一标识符。

- 处理 CSS 文件中的 URL： 如果 styles.css 中包含像 background: url('image.jpg'); 这样的图片引用，css-loader 会处理这些 URL，并根据配置将它们转换为正确的路径，以确保在构建后能够加载这些图片。

- 与其他 loader 配合使用： 在 Webpack 配置中，我们使用了 style-loader 和 css-loader，它们一起工作以将 CSS 样式注入到页面中。css-loader 负责处理 CSS，而 style-loader 负责将样式以 <style> 标签的形式插入到页面的 <head> 中。

1. webpack plugin
   可以知道plugin 如何注册 可以在哪个生命周期注册  主要依据tap... 事件发布订阅来进行响应
   [详解](https://juejin.cn/post/7057074787285205023)

## 理想连线网络技术股份有限公司

 1. 主导全相交互平台部分模块(组织管理，事务管理等)的重构和迭代
 2. 主导荣阳咨询官网/后台管理系统的开发
 3. 日常技术分享和带实习生

## 全相交互平台

项目描述：全相交互平台目前偏重于企业主角度出发的企业行政管理，让组织机构内部及机构与机构之间的行政管理与生产合作更加纯粹、直接与有效。产品主要功能：组织管理，联勤指挥，办公通讯，任务管理以及事务管理

责任描述：
  主导组织管理的底层重构,支持组织架构的紧凑排序，部门之间的合并、排序、交换，纵横排序等功能
  主导数据面板/工作台的开发

主要技术：
主应用 React +  Ts + Webpack + Redux + Eslint + Prettier
子应用：Icejs + Ts + Husky + Eslint + Prettier + Stylelint
  
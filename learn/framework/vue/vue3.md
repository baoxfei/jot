# 零碎点

  1. 选项式和组合式
  2. 引入 Import maps  / es模块引入

   ```js
    // es模块引入
    import Vue from 'https://...'
   ```

  3. createApp template  根组件模版
  4. 应用配置

   ```js
   app.config.errorHandler
   app.component
   ```

  5. 模版语法 受限的全局访问

   ```js
    app.config.globalProperties
   ```

  6. 计算属性 应只做计算 不产生副作用（请求，更改dom）

   ```js
   computed: {
    fullName: {
      get() {

      },
      set() {}
    }
   }
   ```

   7. 属性绑定 可以是对象

   ```js
   <div v-bind="a"></div>
   data() {
    return {
      id: '',
      style: ''
    }
   }
   ```

   透穿 $attrs.class
   一般都是组件和根结点的属性透传
   组件之间的透穿（组件如果声明props emit  则说明这些属性会在该组件进行消费 不会透穿）
   多个根结点 不会发生透穿

   8. 表单绑定

   ```js
    // 复选框
   'true-value'
   'false-value'
   // 事件
   oninput
   onchange
   // 自定义输入组件 
   export default {
    props: ['modelValue'],
    emits: ['update:modelValue'],
    computed: {
      modelValue: {
        set() {
          this.$emit('update:modelValue', value)
        }
      }
    }
   }
   ```

   9. 避免用箭头函数定义声明周期
   10. 侦听器

   ```js
   // 默认情况下，用户创建的侦听器回调，都会在 Vue 组件更新之前被调用。这意味着你在侦听器回调中访问的 DOM 将是被 Vue 更新之前的状态。
   // 回调函数的初次执行就发生在 created 钩子之前。Vue 此时已经处理了 data、computed 和 methods 选项，所以这些属性在第一次调用时就是可用的。
   ```

   11. 组件组册  组件注册和普通的导入有什么区别
   12. camelCase  kebab-case  PascalCase
   13. 插槽

   ```js
   // 默认内容
  <slot>'默认内容'</slot>
   ```

   14. 依赖注入

   ```js
   // 注入别名
   inject: {
    other: {
      from: 'message'
    }
   }
   ```

   15. 响应式 ref和reactive

   ```js
   // 一个 ref 会在作为响应式对象的属性被访问或修改时自动解包
   // 当 ref 作为响应式数组或原生集合类型(如 Map) 中的元素被访问时，它不会被解包
   // 在模版中 只有顶级的 ref 属性才会被解包
   ```

   16. 自定义指令 directives 指令钩子
   17. 插件 配合app.config.globalProperties app.provide app.component 实现一个自定义的功能
   18. 动画 Transition TranstionGroup

---
title: react
tags: 
notebook: content
---

<div>1. [https://react.iamkasong.com/preparation/jsx.html#react-createelement](https://react.iamkasong.com/preparation/jsx.html#react-createelement)</div>
<div>

    const childrenLength = arguments.length - 2;

2\. 递归</div>

<div>递 beginwork 区分 mount和和update阶段</div>

<div>归complete</div>

3. react 合成事件
  1. e.target 获取不到 因为17之前
    使用事件池的概念，即SyntheticEvent的事件是放在事件池中进行处理的，也就是每个事件可以被复用，即当事件被调用后，他的属性会被置空，如果需要在事件处理函数执行过后（setTimeout之类的延时），获取属性值，那就要用到event.persist()方法
     v17 开始，e.persist() 将不再生效，因为 SyntheticEvent 不再放入事件池
  2. 特殊合成事件
    - 过渡事件
    - 拖拽事件
    - 指针事件
    - 。。。


4. 工作中记录
  1. 疑问 当前更新没有将value依赖加进去是否能获取最新的值 不行 只有当searchParams更新的时候会获取当前的上下文  更新最新的值  那什么时候才会获取过去的值？


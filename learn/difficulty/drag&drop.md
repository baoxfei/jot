---
title: 拖拽初学习
tags: 
notebook: drag&drop
---

# 实现拖拽的必要条件

  1. 拖拽元素设置draggable true
  2. 目标元素 设置drop 和 dragend e.preventDefault  设置目标元素

    ```
      <div ondragover="return false">
      <div ondragover="event.preventDefault()">
    ```

  3. 设置拖拽 跟随的效果
    - DataTransfer.setDataImage
  4. 拖到目标元素的放置效果
    - DataTransfer.dropEffect
    - DataTransfer.effectAllowed
  5. 设置数据
    DataTransfer.setData

# 拖拽的事件的触发时机

  1. 整体生命周期
    dragstart -> drag -> dragenter -> dragover ->  dragleave  -> drop -> dragend

# 拖拽问题

  1. 如果有mousemove mouseover 监听 会略去 drag事件 设置draggable也是无效
  2. react在document监听mouseover 会影响 draggable
  3. dragleave 和 dragenter 会在同一个监听下触发多次
    - 原因：enter和leave的是 监听的元素 的子元素 会造成多次触发
    - 解决方法：在 leave 监听事件里设置 如下；若触发的是子元素则 return

    ```js
      e?.target?.contains(e.relatedTarget)
    ```

  4. 图片默认行为就是可以拖拽

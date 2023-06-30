---
title: canvas2d学习
tags: 
notebook: canvas
---
# canvas2d学习
  ## 基本用法

   1. 首先要有上下文
   > 一个canvas可以有多个渲染上下文 渲染上下文是用来绘制和处理要展示的内容
   > 渲染方式：2d,webgl...
   ```js
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')
   ```
  ## 绘制基本图案
   ### 绘制矩形
   * **主要api**
      1. fillRect  填充
      2. strokeRect 线条
      3. clearRect 清除
   ### 样式
   * fillStyle 颜色
   * strokeStyle 颜色
   * globalAlpha 透明度
   ### 绘制路径
   * **主要api**
      1. beginPath  通常设置路径起点  使用moveTo
      2. closePath 不是必需的 当时用fill 时会自动填充 当使用stroke 不会自动闭合 需要调用该函数
      3. stroke
      4. fill


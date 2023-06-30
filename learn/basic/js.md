---
title: js
tags: 上传 下载 请求
notebook: js
---

## get请求
  1. 传递数组
  ```js
  GET http://localhost:8080/users?roleIds=1&roleIds=2
  GET http://localhost:8080/users?roleIds[0]=1&roleIds[1]=2
  GET http://localhost:8080/users?roleIds[]=1&roleIds[]=2
  GET http://localhost:8080/users?roleIds=1,2
  ```

  2. get请求数据如何序列化
  > [参考链接](https://blog.csdn.net/kelly0721/article/details/126421563)

   - 自己手动
   - qs 插件 qs.stringfy
   - axios请求拦截器 paramsSerializer 里面配置qs
   - 参数转译

  3. string 方法
   - 查询类 include indexOf lastIndexOf startsWidth endsWidth
   - 取值类 charAt(下标)  at
   - 正则相关 match replace replaceAll matchAll search
   - 转码 charCodeAt (codePointAt 对于四个字节存储的字符 Unicode码)  toLowerCase toUpperCase
   - 字符串操作 slice (substring)  substr repeat padStart(length, str)尾部补全 padEnd  trim trimStart trimEnd split concat

## 下载 downloadjs file-save
  > [参考链接](https://zhuanlan.zhihu.com/p/450942203)

  1. 前端下载是使用 base64流/Blob 来下载文件的
    - 下载 a标签 有download 属性 同源可下载 跨域则跳转链接  ajax 下载
    - 跨域 form表单和/iframe

## 上传 断点上传

---
title: only-office
tags:
notebook:
---

```js
    /**
     * 最终为了生成List 格式如下
     * Alias: "职级调整"
     * Columns: (3) [{…}, {…}, {…}]
     * ControlType: "group"
     * GroupKey: "ino92"
     * IsListHelp: null
     * Name: "zjtz_pjue"
     * NamedSource: "zjtz_pjue"
     * bulletFrameFlag: null
     * protoArray: null
     */
    // 下面的listItem转
    1. 判断当前item 是否有 组 这个概念  （组：选择了名称自动将 关联的信息同步到关联组件上去）
    2. 处理当前的item是否有（protoArray 可以弹窗搜索 对应的）有哪些字段
    {
      bulletFrameFlag
:
null
child
:
(3) [{…}, {…}, {…}]
controlType
:
6
dictId
:
null
groupKey
:
"ino92"
isSelectInput
:
null
path
:
null
propertyName
:
""
protoArray
:
null
relationKey
:
null
selectInputKey
:
null
varName
:
"职级调整"
varSymbol
:
"zjtz_pjue"
    }
```

```
1. 搜索
  1. onMessage 响应 根据点击的组件确定（弹窗里渲染的组件） 打开弹窗
  2. 搜索 根据传入的值 从后端拿接口 根据取得的数据
    依据初始化确定的值Map{ key: 'userList', value: { origin: 'origin', relation: { 'currentOrgName': 'key', 'currentPostName': "dqgw_n3bv" }, } }
    反转数据'' (key <=> value) 接口来的数据 添加 KEY LISTKEY
    'dqgw_n3bv': 'currentPostName'

```

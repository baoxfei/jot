---
title: 
tags: 
notebook: mysql
---

  1. 查找mysql 的进程id 杀掉
  ```bash
  ps -ef | grep mysqld
  sodo kill mysqld
  ```
  [参考链接](https://blog.csdn.net/girl23zhouzhou/article/details/118151821)

  2. 连接失败 报错
  > 错误如下
  >> 1045 - Access denied for user ‘root‘@‘localhost‘ (using password: YES)
  **解决方法**
  [参考链接](https://blog.csdn.net/KingOfOnePiece/article/details/112182935)

  3. 命令启动mysql
    - 启动：sudo /usr/local/MySQL/support-files/mysql.server start
    - 关闭：sudo /usr/local/mysql/support-files/mysql.server stop
    - 重启：sudo /usr/local/mysql/support-files/mysql.server restart

  4. 重置mysql密码
    1. [链接1](https://blog.csdn.net/weixin_43232423/article/details/127926977)
    2. [链接2](https://www.jianshu.com/p/c1005edb82cf)

## 基本命令

- 连接数据库 mysql -u root -p
- 查看所有数据库 show databases;
- 查看某个数据库 use database_name
- show tables; 查看所有表
- describe table_name
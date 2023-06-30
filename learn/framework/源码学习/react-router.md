---
title: react-router history
tags: source
notebook: history
---

  # history
  - createBrowserHistory => history { push,  }
    * push 函数里 
      + 有 setState setState里会调用 notifyListeners  通知router  router更新对应的组件
      + 有createTransitionManager.confirmTransitionTo
    * 会调用 createTransitionManager 该函数采用 发布订阅模式
      + confirmTransitionTo
      + setPrompt  避免现在正在更新的数据 销毁？？TODO
      + appendListener
      + notifyListeners
    * 
  - createHashHistory
  - createMemoryHistory

  # react-router
  - Router
    * 生成Context 挂载history 和localtion
    * 注册订阅 
  - Route
    * Consumer 消费 Router的Context
  # 零碎知识点
   - Math.random().toString(32)  toString  
     1. Object.prototype.toString  不接受任何参数
     2. Number.prototype.toString 接受一个Number（基数） 用于转换数据 默认为10
     ```js
       function createKey() {
          return Math.random()
            .toString(36)
            .substr(2, keyLength);
        }
     ```
   - 写一个函数  可以添加return () => {} 将权柄放在return里
     ```js
      let isBlocked = false;
      // 注册/销毁
      function block(prompt = false) {
        const unblock = transitionManager.setPrompt(prompt);

        // 注册
        if (!isBlocked) {
          checkDOMListeners(1);
          isBlocked = true;
        }

        return () => {
          if (isBlocked) {
            isBlocked = false;
            checkDOMListeners(-1);
          }

          return unblock();
        };
      }
     ```




   - staticContext 如何使用？服务端渲染相关内容
   - 优化 对于一些计算量大 不容易变的 的内容 缓存下来
   ```js
    const cache = {};
    const cacheLimit = 10000;
    let cacheCount = 0;

    function compilePath(path, options) {
      const cacheKey = `${options.end}${options.strict}${options.sensitive}`;
      const pathCache = cache[cacheKey] || (cache[cacheKey] = {});

      if (pathCache[path]) return pathCache[path];

      const keys = [];
      const regexp = pathToRegexp(path, keys, options);
      const result = { regexp, keys };

      if (cacheCount < cacheLimit) {
        pathCache[path] = result;
        cacheCount++;
      }

      return result;
    }
   ```


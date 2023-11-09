// 括号生成
// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]

var generateParenthesis = function (n) {
  const result = [];
  backtrack("", 0, 0);
  return result;
  function backtrack(s, l, r) {
    if (l === n && r === n) {
      result.push(s);
      return;
    }
    if (l < n) {
      backtrack(s + "(", l + 1, r);
    }
    if (r < l) {
      backtrack(s + ")", l, r + 1);
    }
  }
};
// 函数闭包问题？是在初始化阶段又还是在执行阶段？
// perfect
/**
 * @param {number} n
 * @return {string[]}
 */
// var generateParenthesis = function (n) {
//   const ans = [];
//   dfs(0, 0, "");
//   return ans;

//   function dfs(open, close, str) {
//     if (str.length === n * 2) {
//       ans.push(str);
//       return;
//     }

//     if (open < n) {
//       dfs(open + 1, close, str + "(");
//     }

//     if (close < open) {
//       dfs(open, close + 1, str + ")");
//     }
//   }
// };

// 疑惑点 为什么将函数写在return后
// function 也会进行变量提升

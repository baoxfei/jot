// @ts-nocheck
// 括号生成
// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]

var generateParenthesis = function (n) {};
function generateParenthesis(n) {
  if (n === 0) {
    return [];
  }

  // 使用一个二维数组 dp 存储括号序列
  const dp = new Array(n + 1);
  dp[0] = [""];
  dp[1] = ["()"];

  for (let i = 2; i <= n; i++) {
    dp[i] = [];
    for (let j = 0; j < i; j++) {
      for (const str1 of dp[j]) {
        for (const str2 of dp[i - 1 - j]) {
          dp[i].push(`(${str1})${str2}`);
        }
      }
    }
  }

  return dp[n];
}
// 时间复杂度 2 ^ n
// ''
// ()
// (()) ()()
// ()()() ((())) (()()) (())() ()(())
// 思想 生成n对有效的括号 可以是 n - 1 + 1 n - 2 + 2

// 示例用法
const n = 3;
const result = generateParenthesis(n);
console.log(result);

// ()
// ()() (())
// (()()) ()()() ((()))

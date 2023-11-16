// @ts-nocheck
// 给你一个 非严格递增排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。然后返回 nums 中唯一元素的个数。
// 考虑 nums 的唯一元素的数量为 k ，你需要做以下事情确保你的题解可以被通过：
// 更改数组 nums ，使 nums 的前 k 个元素包含唯一元素，并按照它们最初在 nums 中出现的顺序排列。nums 的其余元素与 nums 的大小不重要。
// 返回 k 。

// 输入：nums = [1,1,2]
// 输出：2, nums = [1,2,_]
// 解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。
// 示例 2：

// 输入：nums = [0,0,1,1,1,2,2,3,3,4]
// 输出：5, nums = [0,1,2,3,4]
// 解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。
var removeDuplicates = function (nums) {
  var len = nums?.length || 0;
  if (len < 2) return len;
  var lastLen = 0;
  for (var i = len - 1; i >= 0; i--) {
    if (nums[i] !== nums[0]) {
      nums.unshift(nums[i]);
      lastLen++;
    }
  }
  // 0,0,1,1,1,2,2,3,3,4
  return lastLen || 1;
};

var removeDuplicates = function (nums) {
  const n = nums.length;
  if (n === 0) {
    return 0;
  }
  let fast = 1,
    slow = 1;
  while (fast < n) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast];
      ++slow;
    }
    ++fast;
  }
  return slow;
};
// 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）。如果 needle 不是 haystack 的一部分，则返回  -1 。
// 暴力解法
var strStr = function (haystack, needle) {
  if (!needle || !haystack) return -1;
  let hIndex = 0;
  while (hIndex < haystack.length) {
    if (haystack[hIndex] === needle[0]) {
      let i;
      for (i = 0; i < needle.length; i++) {
        if (haystack[i + hIndex] !== needle[i]) break;
      }
      if (i === needle.length) return hIndex;
    }
    hIndex++;
  }
  return -1;
};
// sadbutsad
// sad
// ! 双指针解法 // mississippi // issip
var strStr = function (haystack, needle) {
  if (!needle || !haystack) return -1;
  let slow = 0;
  let fast = 0;
  while (fast < haystack.length) {
    if (needle.length === 1 && needle[0] === haystack[slow]) return slow;
    if (slow === fast) {
      if (haystack[slow] !== needle[0]) {
        slow++;
      }
      fast++;
      continue;
    }
    const index = fast - slow;
    if (haystack[fast] === needle[index]) {
      if (index === needle.length - 1) return slow;
      fast++;
      continue;
    }
    if (haystack[fast] === needle[0]) {
      slow = fast;
      fast++;
    } else {
      fast++;
      slow = fast;
    }
  }
  return -1;
};

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let next = buildNext(needle);
  let n = haystack.length,
    i = 0;
  let m = needle.length,
    j = 0;
  while (i < n && j < m) {
    if (j < 0 || haystack[i] === needle[j]) {
      i++;
      j++;
    } else {
      j = next[j];
    }
  }
  if (j === m) return i - j;
  return -1;

  function buildNext(str) {
    let next = [];
    let n = str.length;
    let t = -1,
      j = 0;

    next[0] = t;
    while (j < n - 1) {
      if (t < 0 || str[j] === str[t]) {
        t++;
        j++;
        next[j] = t;
      } else {
        t = next[t];
      }
    }
    return next;
  }
};

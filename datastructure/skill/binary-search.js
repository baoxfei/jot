// 整数数组 nums 按升序排列，数组中的值 互不相同 。
// 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。
// 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。
// 你必须设计一个时间复杂度为 O(log n) 的算法解决此问题
// 示例 1：

// 输入：nums = [4,5,6,7,0,1,2], target = 0
// 输出：4
// 示例 2：

// 输入：nums = [4,5,6,7,0,1,2], target = 3
// 输出：-1
// 示例 3：

// 输入：nums = [1], target = 0
// 输出：-1
var search = function (nums, target) {
  if (nums?.length === 0) return -1;
  if (nums?.length === 0) return nums[0] === target ? 0 : -1;
  let left = 0;
  let right = nums.length - 1;
  // 3 1
  while (left <= right) {
    // const mid = Math.floor((left + right) / 2);
    const mid = left + ((right - left) >> 1);
    if (nums[mid] === target) return mid;
    if (nums[mid] > nums[left]) {
      // 左侧有序
      if (target >= nums[left] && target <= nums[mid - 1]) {
        // 在有序的序列中
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // 右侧有序
      if (target >= nums[mid + 1] && target <= nums[right]) {
        // 在有序的序列中
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};

var search = function (nums, target) {
  if (nums?.length === 0) return -1;
  let left = 0;
  let right = nums.length - 1;
  // 3 1
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (nums[mid] === target) return mid;
    if (nums[mid] >= nums[left]) {
      // 左侧有序
      if (target >= nums[left] && target < nums[mid]) {
        // 在有序的序列中
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // 右侧有序
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
};

// 34. 在排序数组中查找元素的第一个和最后一个位置
// 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。
// 如果数组中不存在目标值 target，返回 [-1, -1]。
// 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。
// 首先就想到 找到该值 向左右两侧扩散
var searchRange = function (nums, target) {
  if (nums.length === 0) return [-1, -1];
  let left = 0;
  let right = nums.length - 1;
  let targetIndex;
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (nums[mid] === target) {
      targetIndex = mid;
      break;
    }
    if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  if (targetIndex !== 0 && !targetIndex) return [-1, -1];
  left = right = targetIndex;
  while (left >= 0 && nums[left - 1] === target) {
    left--;
  }
  while (right < nums.length && nums[right + 1] === target) {
    right--;
  }
  return [left, right];
};

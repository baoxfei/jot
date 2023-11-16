// @ts-nocheck
// 合并k个升序数组
// 给你一个链表数组，每个链表都已经按升序排列。
// 请你将所有链表合并到一个升序链表中，返回合并后的链表。
// 输入：lists = [[1,4,5],[1,3,4],[2,6]]
// 输出：[1,1,2,3,4,4,5,6]
// 解释：链表数组如下：
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// 将它们合并到一个有序链表中得到。
// 1->1->2->3->4->4->5->6

var mergeTwoLists = (l1, l2) => {
  if (!l1 || !l2) return l1 || l2;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

var mergeKLists = function (lists) {
  const length = lists?.length;
  if (length === 0 || !lists) return null;
  if (length === 1) return lists[0];
  if (length === 2) return mergeTwoLists(lists[0], lists[1]);
  const middleIndex = Math.floor(length / 2);
  return mergeTwoLists(
    mergeKLists(lists.slice(0, middleIndex)),
    mergeKLists(lists.slice(middleIndex))
  );
};

// 两两交换链表中的节点
// 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
var swapPairs = function (head) {
  if (!head && head.next) return head;
  let temp = head.next.next;
  let next = head.next;
  next.next = head;
  head.next = swapPairs(temp);
  return next;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 时间复杂度 N
 */
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }

  if (head.next) {
    let nextHead = null;
    if (head.next.next) {
      nextHead = swapPairs(head.next.next);
    }
    let newHead = head.next;
    newHead.next = head;
    head.next = null;
    if (nextHead) {
      head.next = nextHead;
    }
    return newHead;
  }
};
// 时间复杂度 3 N
var swapPairs = function (head) {
  if (!(head && head.next)) return head;
  var nodes = [];
  while (head) {
    nodes.push(head);
    head = head.next;
  }
  for (var i = 0; i < nodes.length; i = i + 2) {
    [nodes[i], nodes[i + 1]] = [nodes[i + 1], nodes[i]];
  }
  var curhead = nodes[0];
  while (nodes.length) {
    nodes[0].next = nodes[1];
    nodes.unshift();
  }
  return curhead;
};

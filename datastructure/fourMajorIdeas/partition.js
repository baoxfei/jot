// @ts-nocheck
const mergeTwoLists = (l1, l2) => {
  if (!l1 || !l2) return l1 || l2;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};
// 典型的分治法
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
